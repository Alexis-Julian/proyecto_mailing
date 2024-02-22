import { NextResponse } from "next/server";
import fs from "fs";

const PATH = "src/data/message.json";
export async function POST(req) {
	try {
		const { message, emails, date } = await req.json();
		console.log(date);
		if (fs.existsSync(PATH)) {
			const messages = JSON.parse(await fs.promises.readFile(PATH, "UTF8"));
			messages.push({ message, emails, date });

			await fs.promises.writeFile(PATH, JSON.stringify(messages));

			return NextResponse.json({
				message: "Success",
				statusCode: 202,
			});
		} else {
			await fs.promises.writeFile(
				PATH,
				JSON.stringify([{ emails, message, date }])
			);

			return NextResponse.json({
				message: "Success",
				statusCode: 202,
			});
		}
	} catch (e) {
		console.log(e.message);
		return NextResponse.json({
			data: null,
			message: "Error Syntax",
			statusCode: 500,
		});
	}
}

export async function GET() {
	try {
		if (!fs.existsSync(PATH))
			return NextResponse.json({
				data: null,
				message: "NOT FOUND",
				statusCode: "404",
			});

		const data = JSON.parse(await fs.promises.readFile(PATH, "UTF8"));

		return NextResponse.json({
			data: data,
			message: "SUCCESS",
			statusCode: 200,
		});
	} catch (e) {
		return NextResponse.json({
			data: null,
			message: "Error Syntax",
			statusCode: 500,
		});
	}
}
