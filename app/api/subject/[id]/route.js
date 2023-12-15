import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  console.log(params); //652a35872725980eed65cc9f
  try {
    const filteredSubjects = await prisma.subject.findMany({
      where: {
        userId: params.id,
      },
    });
    console.log(filteredSubjects);
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
