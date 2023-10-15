import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/libs/prisma";

const authOptions = {
  adapter: PrismaAdapter(prisma),
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
              // If everything is successful, return the user
              return user;
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
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        token.role = user.userRole;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session :", session);
      console.log("token :", token);
      console.log("user :", user);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
