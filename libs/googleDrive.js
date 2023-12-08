import { createReadStream } from "fs";
import { google } from "googleapis";

const SCOPE = ["https://www.googleapis.com/auth/drive"];

// A Function that can provide access to google drive api
function createAuthClient() {
  return new google.auth.JWT(
    process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    null,
    process.env.NEXT_PUBLIC_PRIVATE_KEY,
    SCOPE
  );
}

async function uploadFile(value) {
  console.log(value);
  const authClient = createAuthClient();
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth: authClient });

    const fileMetaData = {
      name: value.name,
      parents: [process.env.NEXT_PUBLIC_DRIVE_FOLDER_KEY],
    };

    const media = {
      body: createReadStream(value.path),
      mimeType: value.type,
    };

    drive.files.create(
      {
        resource: fileMetaData,
        media: media,
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

export { uploadFile };
