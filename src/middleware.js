import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ENDPOINT } from "./shares/constants";
const validationToken = async (token) => {
	try {
		const response = await fetch(ENDPOINT + "api/auth/token", {
			headers: {
				Authorization: "Bearer " + token,
			},
			method: "GET",
		});

		const data = await response.json();

		console.log(data);

		if (data.statusCode === 202) {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		console.log("Syntax error ");
	}
};

export default async function middleware(request) {
	const cookieToken = cookies().get("accessToken");
	if (
		request.nextUrl.pathname.includes("/home") ||
		request.nextUrl.pathname.includes("/register")
	) {
		if (cookieToken) {
			const response = await validationToken(cookieToken.value);
			console.log(response);
			if (response) {
				return NextResponse.redirect(new URL("/mailing", request.url));
			}
			return NextResponse.next();
		}
		return NextResponse.next();
	}

	if (request.nextUrl.pathname.includes("/mailing")) {
		const cookieToken = cookies().get("accessToken");
		console.log(cookieToken);
		try {
			const response = await validationToken(cookieToken.value);

			if (!response)
				return NextResponse.redirect(new URL("/home", request.url));

			return NextResponse.next();
		} catch (err) {
			return NextResponse.redirect(new URL("/home", request.url));
		}
	}
}

export const config = {
	matcher: ["/home", "/mailing", "/register"],
};
