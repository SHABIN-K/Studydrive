import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server"

export default withAuth(
  function middleware() {
    //return NextResponse
    return NextResponse.rewrite(new URL("/dashboard", req.url))
  },
  {
    callbacks: {
      authorized(token) {
        return token?.role === 'admin';
      },
    },
  }
);

export const config = { matcher: ["/dashboard"] };