import { useEffect } from "react";
import { colors } from "~/components/utils";

export default function Slug() {

  


  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://g.page/r/CfwEPNOYaE9hEAI/review`;
    }, 1000);
  }, []);

  const color = colors[Math.floor(Math.random() * 4)];

  return (
    <div
      className={`grid place-content-center h-dvh ${color.light} ${color.dark}`}
    >
      <div className="flex flex-col text-center gap-8 items-center max-w-96">
       
        <div className="text-2xl">
          Estamos direcionando você para a nossa pesquisa
        </div>
      </div>
    </div>
  );
}
