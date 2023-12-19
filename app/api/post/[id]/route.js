import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  try {
    const userPost = await prisma.post.findMany({
      where: {
        userId: params.id,
      },
    });

    return new Response(JSON.stringify(userPost), {
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
