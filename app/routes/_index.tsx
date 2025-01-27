import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Clínica Dengo" },
		{
			name: "description",
			content: "",
		},
	];
};

export const loader = () => {
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

	return { colors };
};

export default function Index() {
	const { colors } = useLoaderData<typeof loader>();

	return (
		<div
			className={`min-h-dvh min-w-80 grid place-content-center ${colors.bg} `}
		>
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
						<img
							src="/cafe.jpg"
							alt="Café Materno Psi"
							className="overflow-hidden rounded-3xl"
						/>
						<h2 className="text-white font-semibold leading-tight text-xl tracking-tighter my-4">
							Uma roda de conversa sobre as últimas novidades
							sobre a infância feliz.
						</h2>
						<div className="flex gap-2 text-center font-semibold text-2xl text-white">
							<div
								className={`px-2 py-4 rounded-xl bg-white text-serenidade w-full`}
							>
								27/8
							</div>
							<div
								className={`px-2 py-4 rounded-xl bg-white text-serenidade w-full`}
							>
								17h
							</div>
							<div
								className={`px-2 py-4 rounded-xl bg-white text-serenidade w-full`}
							>
								Dengo
							</div>
						</div>
						<div className="text-sm text-black/50 font-semibold my-4">
							Evento exclusivo para adultos.
							<br />
							Inscrição apenas R$ 49.
						</div>

						<a
							className="bg-white mb-8 px-4 py-6 rounded-xl font-semibold text-serenidade text-2xl block tracking-tight"
							href={`https://wa.me/5588992630993?text=${encodeURI(
								`Oi, Miriam. Eu quero me inscrever no Café Materno Psi.`
							)}`}
						>
							Quero me inscrever
						</a>
					</div> */}
					{[
						{
							nome: "Edrine Vasconcelos",
							area: "Nutricionista materno infantil",
							imagem: "",
						},
						{
							nome: "Brenda Vasconcelos",
							area: "Pediatra",
							imagem: "",
						},
						{
							nome: "Luma Parente",
							area: "Consultora do Sono",
							imagem: "",
						},
						{
							nome: "Sheily Barreto",
							area: "Psicológa infantil",
							imagem: "",
						},
						{
							nome: "Keylla Albuquerque",
							area: "Consultora em Amamentação",
							imagem: "",
						},
						{
							nome: "Kelly Alves",
							area: "Fonoaudióloga",
							imagem: "",
						},
						{
							nome: "Samara Araújo",
							area: "Fisioterapeuta",
							imagem: "",
						},
					].map((p, i) => (
						<a
							key={i}
							target="_blank"
							rel="noreferrer"
							href={`https://wa.me/5588992630993?text=${encodeURI(
								`Gostaria de agendar uma CONSULTA com a ${p.nome} (${p.area})`
							)}`}
							className={`link text-xl ${colors.link} flex flex-col`}
						>
							<div>{p.nome}</div>
							<div className="text-xs uppercase tracking-widest text-black/25">
								{p.area}
							</div>
						</a>
					))}

					{/* <a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992630993?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20com%20a%20Nutri%20Edrine%20Vasconcelos."
						className={`link ${colors.link}`}
					>
						Edrine Vasconcelos - Nutri
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992630993?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20com%20a%20Dra.%20Brenda%20vasconcelos."
						className={`link ${colors.link}`}
					>
						Dra. Brenda Vasconcelos - Ped
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992630993?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20com%20a%20Psi%20Sheily%20Barreto."
						className={`link ${colors.link}`}
					>
						Sheily Barreto - Psi
					</a> */}
				</div>

				{/* <div className="text-xs tracking-tight">
					Clínica DEngo <br />
					
				</div> */}
			</div>
		</div>
	);
}
