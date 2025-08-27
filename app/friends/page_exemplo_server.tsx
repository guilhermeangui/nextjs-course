async function postFriendName(name: string) {
	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	const data = await res.json();
	return { data };
}

export default async function Friends() {
	console.log("Friends page rendered");
	const { data } = await postFriendName("Angui");
	
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<h1>{data.message}</h1>
		</main>
		</div>
	);
}