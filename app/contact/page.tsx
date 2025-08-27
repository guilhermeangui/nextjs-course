import ButtonComponent from "./button";

export default async function Contact() {
	console.log("Contact page rendered");

	const response = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await response.json()
	console.log(posts)

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<h1>Contact Page</h1>
			<ButtonComponent />
		</main>
		</div>
	);
}