import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page",
  keywords: ["about", "nextjs", "typescript"],
  authors: [{ name: "Angui", url: "https://github.com/Angui" }],
  twitter: { card: "summary_large_image", site: "@anguissauro" },
};

export default function About() {
	console.log("About page rendered");
	
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<h1>About Page</h1>
		</main>
		</div>
	);
}