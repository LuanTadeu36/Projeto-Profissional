const features = [
  {
    emoji: "🏃",
    titulo: "Treinos Personalizados",
    descricao:
      "Planos estruturados para iniciantes, intermediários e avançados. O app adapta os treinos ao seu ritmo, seus objetivos e sua rotina — seja sua primeira corrida de 5km ou a preparação para uma maratona.",
    destaques: ["Planos por nível", "Adaptação ao seu ritmo", "Progressão inteligente"],
  },
  {
    emoji: "📊",
    titulo: "Desempenho em Tempo Real",
    descricao:
      "Acompanhe pace, distância, tempo e evolução semana a semana. Gráficos claros que transformam cada corrida em dados que te motivam a ir além e entender seu progresso real.",
    destaques: ["Métricas por corrida", "Gráficos semanais", "Histórico completo"],
  },
  {
    emoji: "🛍️",
    titulo: "Shop NoCorre",
    descricao:
      "Vista a camisa — literalmente. Nossa loja vai trazer camisetas, bonés, canecas e acessórios com a identidade NoCorre. Correr com estilo e representar o movimento.",
    destaques: ["Camisetas exclusivas", "Bonés e acessórios", "Canecas NoCorre"],
  },
  {
    emoji: "📸",
    titulo: "Comunidade Social",
    descricao:
      "Um feed feito pra quem corre. Poste fotos dos treinos, registre suas corridas, acompanhe amigos e transforme cada km compartilhado em inspiração para a comunidade.",
    destaques: ["Feed de fotos", "Registro de treinos", "Conexão entre corredores"],
  },
  {
    emoji: "⚖️",
    titulo: "Calculadora Nutricional",
    descricao:
      "Saiba o que está comendo. A calculadora vai medir o peso e as calorias dos alimentos, ajudando você a alinhar a alimentação com seus objetivos na corrida.",
    destaques: ["Peso dos alimentos", "Contagem de calorias", "Dicas nutricionais"],
  },
  {
    emoji: "🏆",
    titulo: "Desafios e Rankings",
    descricao:
      "Compete com amigos, participe de desafios semanais e suba no ranking. Medalhas e badges por conquistas que tornam cada treino mais divertido e motivador.",
    destaques: ["Rankings semanais", "Badges de conquista", "Desafios entre amigos"],
  },
];

function Roadmap() {
  return (
    <section className="w-full bg-preto px-4 md:px-8 py-20 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Título */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
            Nosso App
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Conheça tudo que o NoCorre vai colocar no seu bolso.
          </p>
        </div>

        {/* Zig-zag features */}
        <div className="flex flex-col gap-16 md:gap-24">
          {features.map((feature, index) => (
            <div
              key={feature.titulo}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-4 md:gap-14`}
            >
              {/* Lado visual (emoji grande + fundo) */}
              <div className="w-5/12 md:w-5/12 flex justify-center shrink-0">
                <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-[120px] md:max-w-xs aspect-square flex items-center justify-center">
                  <span className="text-4xl md:text-8xl">{feature.emoji}</span>
                </div>
              </div>

              {/* Lado texto */}
              <div className="w-7/12 md:w-7/12">
                <h3 className="text-amarelo text-2xl md:text-3xl font-bold mb-4">
                  {feature.titulo}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  {feature.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.destaques.map((destaque) => (
                    <span
                      key={destaque}
                      className="text-xs md:text-sm font-medium bg-amarelo/10 text-amarelo border border-amarelo/20 rounded-full px-4 py-1.5"
                    >
                      {destaque}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
