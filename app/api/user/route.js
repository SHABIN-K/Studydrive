import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();
    return new Response(JSON.stringify(allUsers), {
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
  const { userRole, name, email, phoneNumber, password } = await req.json();
  try {
    // Check if a user already exists by email
    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    // User with this email already exists
    if (existingUser) {
      return new Response("User with this email already exists", {
        status: 200,
        statusText: "FAILED",
      });
    }

    // If the user does not exist, you can proceed with user creation

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        userRole: userRole,
        name,
        email,
        phoneNumber,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify(newUser), {
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

export async function DELETE(req) {
  const { email } = await req.json();
  try {
    //find the user by email
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user) {
      //delete the user's profile (assuming a one-to-one relationship)
      await prisma.user.delete({
        where: { id: user.id },
      });

      // Process the data and send an appropriate response
      return new Response("Request processed successfully", {
        status: 200,
      });
    } else {
      return new Response("User not found", {
        statusText: "FAILED",
        status: 201, // Not Found
      });
    }
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response("An error occurred", {
      status: 500, // Internal Server Error
    });
  }
}
