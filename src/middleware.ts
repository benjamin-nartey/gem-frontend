import { NextRequest, NextResponse } from "next/server";
import { getMe } from "./lib/getMe";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Redirect to unauthorized if no token is found
  if (!token) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  const url = `${BASE_URL}/api/v1/users/getMe`;

  // Fetch the user information based on the token
  const user = await getMe(url, token);

  if (!user) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  const { pathname } = req.nextUrl;

  // Role-based route access logic
  if (user.role === "admin") {
    // Admin has access to all routes
    return NextResponse.next();
  } else if (user.role === "user") {
    // User has restricted access
    const allowedUserRoutes = ["/attendance", "/members"];
    if (!allowedUserRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  } else {
    // Redirect other roles to unauthorized
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/users", "/visitors", "/attendance", "/members"],
};
