import prisma from "@/libs/prisma";

export async function GET(req, { params }) {
  try {
    const post = await prisma.post.findMany({
      where: {
        id: params.id,
      },
    });
    console.log(post);
    return new Response(JSON.stringify(post), {
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
