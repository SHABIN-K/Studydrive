import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
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
  },
  callbacks: {
    jwt(params) {
      // console.log(params);
      //update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      //return final_token
      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


