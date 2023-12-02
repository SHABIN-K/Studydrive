import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    //return NextResponse
    return NextResponse.rewrite(new URL("/dashboard", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === token?.role,
    },
  }
);

export const config = { matcher: ["/dashboard","/api"] };
