import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ message: "Hello!" }, { status: 200 });
}

export async function POST(request: Request) {
	const data = await request.json();
	const { name } = data;

	return NextResponse.json({ message: `Data received - Name ${name}`, data }, { status: 201 });
}