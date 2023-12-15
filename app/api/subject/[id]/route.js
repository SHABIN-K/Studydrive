import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  console.log(params);
  try {
    /*
      const filteredSubjects = await prisma.subject.findMany({
        where: {
          course_name: courseName,
          semester_code: semester,
        },
      });
      */
    //const allSubject = await prisma.subject.findMany();
    return new Response(JSON.stringify("hello world"), {
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
