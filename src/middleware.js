import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const validationToken = async (token) => {
	const response = await fetch("http://localhost:8080/api/auth/token", {
		headers: {
			Authorization: "Bearer " + token,
		},
		method: "GET",
	});

	const data = await response.json();

	if (data.uid) {
		return data;
	} else {
		return false;
	}
};

export default async function middleware(request) {
	const cookieToken = cookies().get("accessToken");

	if (request.nextUrl.pathname.includes("/home")) {
		if (cookieToken) {
			const response = await validationToken(cookieToken.value);
			if (response) {
				return NextResponse.redirect(new URL("/mailing", request.url));
			}
			return NextResponse.next();
		}
		return NextResponse.next();
	}
}

export const config = {
	matcher: "/home",
};
