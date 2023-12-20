import { NextResponse } from "next/server";
export function middleware(request) {
  console.log(request.nextUrl.pathname);

  //   return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/home",
};
