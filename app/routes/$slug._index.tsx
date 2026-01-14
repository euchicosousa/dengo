import { useParams } from "@remix-run/react";
import { useEffect } from "react";
import { colors, especialistas } from "~/components/utils";
import { EspecialistaCard } from "./_index";

export default function Slug() {
  const { slug } = useParams();

  const especialista = especialistas.find((e) => e.slug === slug);

  if (!slug || !especialista) {
    return (
      <div
        className={`grid place-content-center h-dvh ${colors[0].light} ${colors[0].dark}`}
      >
        <div className="max-w-96 flex flex-col gap-8 text-center">
          <div>
            Não encontramos a especialista{" "}
            <span className="font-bold">{slug}</span>, mas você pode agendar com
            uma das nossas especialistas abaixo:
          </div>
          <div className="grid grid-cols-2 gap-2 leading-none">
            {especialistas.map((p, i) => (
              <EspecialistaCard key={i} especialista={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://wa.me/5588992630993?text=${encodeURI(
        `Gostaria de agendar uma CONSULTA com a ${especialista.nome} (${especialista.area})`
      )}`;
    }, 1000);
  }, []);

  const color = colors[Math.floor(Math.random() * 4)];

  return (
    <div
      className={`grid place-content-center h-dvh ${color.light} ${color.dark}`}
    >
      <div className="flex flex-col text-center gap-8 items-center max-w-96">
        <img
          src={`/especialistas/${especialista.imagem}`}
          alt={especialista.nome}
          className="w-40 animate-bounce"
        />
        <div className="text-2xl">
          Estamos direcionando você para agendar uma consulta com a nossa{" "}
          <span className="underline font-bold">
            {especialista.area}
            {" — "}
            {especialista.nome}
          </span>
          .
        </div>
      </div>
    </div>
  );
}
