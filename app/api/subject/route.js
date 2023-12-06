import prisma from "@/libs/prisma";
//https://next-auth.js.org/configuration/nextjs#getserversession

export async function GET(req) {
  try {
    /*
    const filteredSubjects = await prisma.subject.findMany({
      where: {
        course_name: courseName,
        semester_code: semester,
      },
    });
    */
    const allSubject = await prisma.subject.findMany();
    return new Response(JSON.stringify(allSubject), {
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

export async function POST(req) {
  const { courseName, userSemester, subjectCode, subjectName, userEmail } =
    await req.json();

  try {
    //find user by email address
    const user = await prisma.user.findFirst({
      where: { email: userEmail },
    });

    // Check if a subject already exists
    const existingSubject = await prisma.subject.findFirst({
      where: { subject_code: subjectCode },
    });

    // this subject already exists
    if (existingSubject) {
      return new Response("This subject already exists", {
        status: 200,
        statusText: "FAILED",
      });
    }

    // Create the new subject
    const newSubject = await prisma.subject.create({
      data: {
        userId: user.id,
        course_name: courseName,
        semester_code: userSemester,
        subject_code: subjectCode.trim().toUpperCase(),
        subject_name: subjectName.trim(),
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
