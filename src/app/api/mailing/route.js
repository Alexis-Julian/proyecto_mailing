import { NextResponse } from "next/server";
import fs from "fs";

const PATH = "src/data/contacts.json";

export async function POST(req) {
	try {
		const { email, name, date } = await req.json();
		if (fs.existsSync(PATH)) {
			const data = JSON.parse(await fs.promises.readFile(PATH, "UTF8"));

			data.push({ email: email, name: name, date: date });

			await fs.promises.writeFile(PATH, JSON.stringify(data));

			return NextResponse.json({
				data: data,
				message: "SUCCESSFUL",
				statusCode: 200,
			});
		} else {
			await fs.promises.writeFile(
				PATH,
				JSON.stringify([
					{
						email: email,
						name: name,
						date: date,
					},
				])
			);
			return NextResponse.json({
				data: data,
				message: "SUCCESSFUL",
				statusCode: 200,
			});
		}
	} catch (e) {
		return NextResponse.json({
			data: null,
			message: "Error Syntax",
			statusCode: 500,
		});
	}
}

export async function GET() {
	try {
		if (fs.existsSync(PATH)) {
			const data = JSON.parse(await fs.promises.readFile(PATH, "UTF8"));
			console.log(data);
			return NextResponse.json({
				data: data,
				message: "SUCCESSFUL",
				statusCode: 200,
			});
		} else {
			return NextResponse.json({
				data: null,
				message: "Not have any data to read",
				statusCode: 404,
			});
		}
	} catch (e) {
		return NextResponse.json({
			data: null,
			message: "Error Syntax",
			statusCode: 500,
		});
	}
}
