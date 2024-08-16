import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Clínica Dengo" },
		{
			name: "description",
			content: "",
		},
	];
};

export default function Index() {
	// console.log(
	// 	encodeURI(
	// 		"https://wa.me/5588992630993?text=Olá, Gostaria de agendar uma CONSULTA com a Dra. Edrine."
	// 	)
	// );

	const colors = [
		{ bg: "bg-carinho", link: "bg-abraco" },
		{ bg: "bg-carinho", link: "bg-serenidade" },
		{ bg: "bg-carinho", link: "bg-alegria" },
		{ bg: "bg-abraco", link: "bg-serenidade" },
		{ bg: "bg-abraco", link: "bg-carinho" },
		{ bg: "bg-abraco", link: "bg-alegria" },
		{ bg: "bg-alegria", link: "bg-abraco" },
		{ bg: "bg-alegria", link: "bg-serenidade" },
		{ bg: "bg-alegria", link: "bg-carinho" },
		{ bg: "bg-serenidade", link: "bg-carinho" },
		{ bg: "bg-serenidade", link: "bg-alegria" },
		{ bg: "bg-serenidade", link: "bg-abraco" },
	][Math.floor(Math.random() * 12)];

	return (
		<div className={`min-h-dvh grid place-content-center ${colors.bg} `}>
			<div className="max-w-96 p-8 rounded-xl text-center">
				<div className="rounded-full mx-auto">
					<img
						src="./dengo.png"
						alt="Clínica Dengo"
						className="mx-auto max-w-40"
					/>
				</div>

				<div className="flex my-12 flex-col gap-2">
					{/* <div>
						<h2 className="text-black/50 font-semibold text-2xl">
							Café Materno Psi
						</h2>
					</div> */}

					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Brenda."
						className={`link ${colors.link}`}
					>
						Edrine Vasconcelos - Nutri
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Brenda."
						className={`link ${colors.link}`}
					>
						Dra. Brenda Vasconcelos - Ped
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Brenda."
						className={`link ${colors.link}`}
					>
						Sheily Alves - Psi
					</a>
				</div>

				{/* <div className="text-xs tracking-tight">
					Clínica DEngo <br />
					
				</div> */}
			</div>
		</div>
	);
}
