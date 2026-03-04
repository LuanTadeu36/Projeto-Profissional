const cards = [
  {
    emoji: "📊",
    title: "Desempenho",
    description:
      "Imagine ver seu pace, distância e evolução semana a semana em gráficos claros. O NoCorre vai transformar cada corrida em dados que te motivam a ir além.",
  },
  {
    emoji: "🏃",
    title: "Treinos",
    description:
      "Chega de treinar no escuro. Planos estruturados para iniciantes, intermediários e avançados — adaptados ao seu ritmo e aos seus objetivos.",
  },
  {
    emoji: "👥",
    title: "Comunidade",
    description:
      "Corra com quem te puxa pra frente. Rankings semanais ou mensais, desafios entre amigos e um feed onde cada km compartilhado vira inspiração.",
  },
  {
    emoji: "🔥",
    title: "Metas",
    description:
      "Primeira corrida de 5km? Bater seu recorde nos 10km? Defina marcos, acompanhe o progresso e celebre cada conquista no caminho.",
  },
  {
    emoji: "🧘",
    title: "Alongamentos",
    description:
      "Aquecimento antes, recuperação depois. Rotinas guiadas de alongamento para evitar lesões e manter seu corpo pronto para o próximo treino.",
  },
  {
    emoji: "📱",
    title: "Em breve",
    description:
      "Tudo isso no seu bolso. O app NoCorre está sendo construído com carinho e está quase chegando. Entre na lista de espera e seja um dos primeiros.",
  },
];

function Evolucao() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center px-4 md:px-8 pt-28 pb-20 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
          Evolua com NoCorre
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-12 max-w-xl mx-auto">
          Tudo que você precisa para ir mais longe.
        </p>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 text-left transition-all duration-300 flex flex-col"
            >
              <span className="text-4xl lg:text-5xl mb-4 block">{card.emoji}</span>
              <h3 className="text-amarelo text-xl lg:text-2xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Evolucao;
