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

// A Function that will upload the desired file to google drive folder
async function uploadFile(authClient) {
  return new Promise((resolve, rejected) => {
    const drive = google.drive({ version: "v3", auth: authClient });
    var fileMetaData = {
      name: "mydrivetext.txt",
      parents: ["1mHiaueqqEW_jAXn2gt3x3tZtzWtc9Xm0"],
    };
    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          body: createReadStream("mydrivetext.txt"),
          mimeType: "text/plain",
        },
        fields: "id",
      },
      function (error, file) {
        if (error) {
          return rejected(error);
        }
        resolve(file);
      }
    );
  });
}

export { uploadFile, authorize };