import { notFound } from "next/navigation";

async function fetchUser(userId: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

	if (!res.ok) {
		//return null;
		throw new Error("Failed to fetch user data");
	}
	// return res.json();
	return await res.json();
}

export default async function UserPage({ 
	params 
}: { 
	params: Promise<{ userId: string }> 
}) {
	console.log("User page rendered");

	const { userId } = await params;
	const user = await fetchUser(userId);
	console.log(user);

	if (!user) {
		notFound();
	}

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1>User Page</h1>
				<ul className="list-disc pl-5">
					<li className="mb-2">
						<strong>{user.name}</strong> - {user.email}
					</li>
					<li className="mb-2">
						<strong>{user.username}</strong> - {user.phone}
					</li>
					<li className="mb-2">
						<strong>Website:</strong> {user.website}
					</li>
				</ul>
			</main>
		</div>
	);

	// const { userId } = await params;
	// return <div>User ID: {userId}</div>;

	// const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
	// const user = await response.json();
	// console.log(user);

	// return (
	// 	<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
	// 		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
	// 			<h1>User Page</h1>
	// 			<ul className="list-disc pl-5">
	// 				<li className="mb-2">
	// 					<strong>{user.name}</strong> - {user.email}
	// 				</li>
	// 			</ul>
	// 		</main>
	// 	</div>
	// );
}