import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const signInUrl = new URL("/signin", request.url);
  if (!token) {
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/transactions/:path*"],
};
