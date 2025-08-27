"use client";

import Link from "next/link";

export default function RedirectButton ({ id }: { id: number }) {
	return (
		<>
			<Link href={`/users-top/${id}`}>
				<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
					Ver detalhes do usuário
				</button>
			</Link>
		</>
	);
}