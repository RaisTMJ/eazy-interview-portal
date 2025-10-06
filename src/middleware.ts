import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Middleware running for:', request.url);
  const token = request.cookies.get("auth_token")?.value;

  // If user not logged in, redirect to login page
  console.log('Auth Token:', token);
  if (!token && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Limit middleware to certain routes only
export const config = {
  matcher: ["/profile", "/profile/:path*"],
};