const marcos = [
  {
    data: " 2023",
    titulo: "Primeiros Passos",
    descricao:
      "Início das corridas entre amigos com o objetivo de buscar uma vida mais saudável. Em dezembro, surge a ideia do NoCorre, com nome, logo e propósito de incentivar mais pessoas a correrem juntas.",
  },
  {
    data: " 2024",
    titulo: "Crescimento e Comunidade",
    descricao:
      "Primeira corrida em grupo, lançamento do Instagram, crescimento do grupo, surgimento das camisetas e consolidação do ponto de encontro como referência para corredores.",
  },
  {
    data: " 2025",
    titulo: "Desafio dos 100 km",
    descricao:
      "Realização do Desafio dos 100 km, marcando um grande momento de superação e união para a comunidade NoCorre.",
  },
  {
    data: " 2026",
    titulo: "Expansão Digital",
    descricao:
      "Lançamento do site e do aplicativo NoCorre, ampliando o alcance e a experiência da comunidade para ainda mais pessoas.",
  },
];

function Sobre() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center px-4 md:px-8 pt-32 md:pt-36 pb-20 md:pb-24">
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
