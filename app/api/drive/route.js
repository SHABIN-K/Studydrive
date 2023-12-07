import { createReadStream } from "fs";
import { google } from "googleapis";

const SCOPE = ["https://www.googleapis.com/auth/drive"];

// A Function that can provide access to google drive api
async function authorize() {
  const drive = new google.auth.JWT(
    process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    null,
    process.env.NEXT_PUBLIC_PRIVATE_KEY,
    SCOPE
  );

  await drive.authorize();
  return drive;
}

async function uploadFile(authClient) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth: authClient });
    const fileMetaData = {
      name: "mydrivetext.txt",
      parents: ["1mHiaueqqEW_jAXn2gt3x3tZtzWtc9Xm0"],
    };
    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          body: createReadStream(".pascHub"),
          mimeType: "text/plain",
        },
        fields: "id",
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        resolve(file);
      }
    );
  });
}

export async function POST(req) {
  try {
    const authClient = await authorize();
    await uploadFile(authClient);
    return new Response(JSON.stringify("successfully uploaded"), {
      status: 201, // Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response("An error occurred", {
      status: 500, // Internal Server Error
    });
  }
}

