export default function UserLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
				<h1>Página de usuários - Visível para todas as rotas</h1>
				{children}
		</main>
	);
}