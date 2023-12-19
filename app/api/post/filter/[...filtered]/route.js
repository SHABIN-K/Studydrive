import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  const [courseName, semester, category, subId] = params.filtered;
  try {
    const filteredPost = await prisma.post.findMany({
      where: {
        course_name: courseName,
        semester_code: semester,
        category,
        subject_code: subId,
      },
    });
    
    return new Response(JSON.stringify(filteredPost), {
      status: 200, // Created
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
