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

        if (!email || !password) throw new Error("both fields are required");

        if (email === "me@g.com" && password === "123") {
          return {
            id: "2453",
            name: "J Smith",
            email: "me@g.com",
            role: "admin",
          };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    // error: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Check if the URL is a callback URL and redirect accordingly
      if (url === "/dashboard") {
        return url; // Allow redirection to /dashboard
      }
      return baseUrl; // Redirect to the base URL (e.g., /login) if not /dashboard
    },
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
