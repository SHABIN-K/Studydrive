import prisma from "@/libs/prisma";

export async function POST(req) {
  try {
    const { fileDetails, uploadRes, userEmail } = await req.json();

    //find user by email address
    const user = await prisma.user.findFirst({
      where: { email: userEmail },
    });

    // Check if a file already exists
    //const existingFiles = await prisma.post.findMany({
    //  where: { file_name: { in: uploadRes.map((res) => res.filename) } },
    //});

    // Check if any of the files already exist
    //if (existingFiles.length > 0) {
    //  const existingFileNames = existingFiles.map((file) => file.file_name);
    //  return new Response(
    //    `These files already uploaded: ${existingFileNames.join(", ")}`,
    //    {
    //      status: 200,
    //      statusText: "FAILED",
    //    }
    //  );
    //}

    const createdPosts = [];

    // Iterate over each fileDetails and create a post for each
    for (let i = 0; i < fileDetails.length; i++) {
      const newPost = await prisma.post.create({
        data: {
          userId: user.id,
          course_name: fileDetails[i].course,
          semester_code: fileDetails[i].semester,
          subject_code: fileDetails[i].subject.link,
          subject_name: fileDetails[i].subject.name,
          title: fileDetails[i].title.trim(),
          description: fileDetails[i].description.trim(),
          category: fileDetails[i].category.trim(),
          file_url: uploadRes[i].url,
          file_name: uploadRes[i].filename,
        },
      });
      console.log("Created new post:", newPost);
      createdPosts.push(newPost);
    }

    return new Response(JSON.stringify(createdPosts), {
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
