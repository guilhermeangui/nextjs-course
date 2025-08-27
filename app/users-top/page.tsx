import RedirectButton from "./redirectButton";

export default async function Users() {
	console.log("Users page rendered");

	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	console.log(users);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1>Users Page</h1>
				<ul className="list-disc pl-5">
					{users.map((user: { id: number; name: string; email: string }) => (
						<li key={user.id} className="mb-2">
							<strong>{user.name} - id: {user.id} </strong> - {user.email}
							<RedirectButton id={user.id} />
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}