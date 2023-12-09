import { uploadFile } from "@/libs/googleDrive";

export async function POST(req) {
  const formData = await req.formData();
  try {
    const files = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        //console.log(value, key);
        // Check if the value is a File object
        const uploadData = await uploadFile(value);
        files.push({ key, uploadData });
      }
    }

    return new Response(JSON.stringify(files), {
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
