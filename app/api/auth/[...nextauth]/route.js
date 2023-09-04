import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials;

        if (email !== "me@g.com" || password !== "123") {
          throw new Error("invalid credentials");
        }

        return {
          id: "2453",
          name: "J Smith",
          email: "me@g.com",
          role: "admin",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    //error: '/error'
  },
  callbacks: {
   // async redirect({ url, baseUrl }) {
   //   console.log("-----------------------------------------------------");
   //   if (url.startsWith("/")) {
   //     console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
   //     console.log(`api calling first : ${baseUrl}${url}`);
   //     return `${baseUrl}${url}`;
   //   } else if (new URL(url).origin === baseUrl) {
   //     console.log("api calling second :" +url);
   //     return url;
   //   }
   //   return baseUrl;
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
