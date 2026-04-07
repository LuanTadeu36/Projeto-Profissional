import { Link } from "react-router-dom";

function Documentario() {
  return (
    <section className="w-full bg-preto px-4 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto w-full">
        {/* Título */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
            Documentário
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            A história por trás do NoCorre — de uma ideia entre amigos a um
            movimento que inspira corredores.
          </p>
        </div>

        {/* Vídeo + contexto lateral */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Player */}
          <div className="w-full lg:w-2/3">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/el6TtZnjMlM"
                title="Documentário NoCorre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto lateral */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Nossa História</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Em 2023, um grupo de amigos decidiu trocar o sedentarismo pela
              corrida. O que começou como uma ideia simples se tornou o
              NoCorre — uma comunidade que une pessoas em torno de um objetivo
              comum: se superar.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Assista ao documentário e veja como construímos essa jornada do
              zero.
            </p>
            <Link
              to="/lista-espera"
              className="mt-2 inline-block bg-amarelo hover:bg-amber-400 text-preto font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors w-fit"
            >
              Fazer parte do movimento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentario;
