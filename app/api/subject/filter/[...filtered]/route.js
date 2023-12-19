import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  const [courseName, semester] = params.filtered;
  try {
    const filteredSubjects = await prisma.subject.findMany({
      where: {
        course_name: courseName,
        semester_code: semester,
      },
    });

    return new Response(JSON.stringify(filteredSubjects), {
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
