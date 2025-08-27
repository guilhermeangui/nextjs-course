"use client";

import { useState } from "react";

async function postFriendName(name: string) {
	const res = await fetch(`/api/hello`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	const data = await res.json();
	return { data };
}

export default function Friends() {
	const [message, setMessage] = useState("Carregando...");

	const onClick = async () => {
		const { data } = await postFriendName('angui');
		setMessage(data.message);
	}

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>Dale </button>
			{message}
		</main>
		</div>
	);
}