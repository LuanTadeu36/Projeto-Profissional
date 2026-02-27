const marcos = [
  {
    data: "Março 2025",
    titulo: "A ideia nasce",
    descricao:
      "Numa conversa entre amigos corredores, percebemos que faltava algo que unisse treino, evolução e comunidade num só lugar. Ali nasceu o NoCorre.",
  },
  {
    data: "Junho 2025",
    titulo: "Primeiros passos",
    descricao:
      "Começamos a desenhar o conceito, definir a identidade visual e a missão: ajudar corredores de todos os níveis a evoluírem juntos.",
  },
  {
    data: "Outubro 2025",
    titulo: "Construindo a base",
    descricao:
      "A landing page ficou pronta, as redes sociais começaram a ganhar vida e os primeiros interessados entraram na lista de espera.",
  },
  {
    data: "Janeiro 2026",
    titulo: "Comunidade crescendo",
    descricao:
      "O projeto começou a ganhar forma real. Documentário gravado, marca consolidada e um time motivado a fazer acontecer.",
  },
  {
    data: "2026",
    titulo: "O app chega",
    descricao:
      "Tudo que estamos construindo vai caber no seu bolso. Treinos, desempenho, comunidade, loja e muito mais. O NoCorre está chegando.",
  },
];

function Sobre() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center px-4 md:px-8 py-20 md:py-24">
      <div className="max-w-4xl mx-auto w-full">
        {/* Título */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
            Quem Somos
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            A história por trás do NoCorre — de uma ideia entre amigos a um movimento de verdade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="flex flex-col gap-10 md:gap-14">
            {marcos.map((marco) => (
              <div key={marco.data} className="relative pl-12 md:pl-20">
                {/* Bolinha na timeline */}
                <div className="absolute left-2.5 md:left-6 top-1 w-4 h-4 rounded-full bg-amarelo border-2 border-preto shadow-lg shadow-amarelo/20" />

                {/* Card */}
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300">
                  <span className="text-amarelo/50 text-sm font-bold tracking-widest uppercase">
                    {marco.data}
                  </span>
                  <h3 className="text-amarelo text-xl md:text-2xl font-bold mt-2 mb-3">
                    {marco.titulo}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {marco.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
