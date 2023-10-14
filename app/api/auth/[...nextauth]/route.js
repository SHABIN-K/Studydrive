import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/libs/prisma";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });

          if (user) {
            // check password
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
              console.log(user);
              // If everything is successful, return the user
              return {
                id: "2453",
                name: "J Smith",
                email: "me@g.com",
                role: "admin",
              };
            } else {
              throw new Error("Invalid password!");
            }
          } else {
            throw new Error("Invalid email address!");
          }
        } catch (error) {
          console.error("Error processing the request:", error);
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    // async redirect({ url, baseUrl }) {
    // Check if the URL is a callback URL and redirect accordingly
    //   if (url === "/dashboard") {
    //     return url; // Allow redirection to /dashboard
    //   }
    //   return baseUrl; // Redirect to the base URL (e.g., /login) if not /dashboard
    // },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
