import prisma from "@/libs/prisma";
export async function GET() {
  return new Response("hey this is pasc hub api");
}

export async function POST(req) {
  const { courseName, userSemester, subjectCode, subjectName } =
    await req.json();

  try {
    // Check if a subject already exists
   //const existingSubject = await prisma.subject.findFirst({
   //  where: { subject_code: subjectCode },
   //});

   //// User with this email already exists
   //if (existingSubject) {
   //  return new Response("This subject already exists", {
   //    status: 200,
   //    statusText: "FAILED",
   //  });
   //}

    // Create the new subject
    const newSubject = await prisma.subject.create({
      data: {
        course_name: courseName,
        semester_code: userSemester,
        subject_code: subjectCode,
        subject_name: subjectName,
      },
    });

    return new Response(JSON.stringify(newSubject), {
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
