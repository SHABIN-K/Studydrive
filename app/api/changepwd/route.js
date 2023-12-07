import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function PATCH(req) {
  const { oldPassword, newPassword, sessionData } = await req.json();

  try {
    // Check if a user already exists by email
    const user = await prisma.user.findFirst({
      where: { email: sessionData },
    });

    if (!user) {
      return new Response("User not found", {
        status: 404,
        statusText: "FAILED",
      });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return new Response("Old password does not match", {
        status: 200,
        statusText: "FAILED",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // update the user password
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 201, // Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response(`Error: ${error.message}`, {
      status: 500, // Internal Server Error
    });
  }
}
