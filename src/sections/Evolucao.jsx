import { TrendingUp, Activity, Users, Target, Zap, Smartphone } from "lucide-react";

const cards = [
  {
    Icon: TrendingUp,
    title: "Desempenho",
    description:
      "Imagine ver seu pace, distância e evolução semana a semana em gráficos claros. O NoCorre vai transformar cada corrida em dados que te motivam a ir além.",
  },
  {
    Icon: Activity,
    title: "Treinos",
    description:
      "Chega de treinar no escuro. Planos estruturados para iniciantes, intermediários e avançados — adaptados ao seu ritmo e aos seus objetivos.",
  },
  {
    Icon: Users,
    title: "Comunidade",
    description:
      "Corra com quem te puxa pra frente. Rankings semanais, desafios entre amigos e um feed onde cada km compartilhado vira inspiração.",
  },
  {
    Icon: Target,
    title: "Metas",
    description:
      "Primeira corrida de 5km? Bater seu recorde nos 10km? Defina marcos, acompanhe o progresso e celebre cada conquista no caminho.",
  },
  {
    Icon: Zap,
    title: "Alongamentos",
    description:
      "Aquecimento antes, recuperação depois. Rotinas guiadas de alongamento para evitar lesões e manter seu corpo pronto para o próximo treino.",
  },
  {
    Icon: Smartphone,
    title: "Em breve",
    description:
      "Tudo isso no seu bolso. O app NoCorre está sendo construído com carinho e está quase chegando. Entre na lista de espera e seja um dos primeiros.",
  },
];

function Evolucao() {
  return (
    <section className="w-full bg-preto flex items-center px-4 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
          Evolua com NoCorre
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Tudo que você precisa para ir mais longe.
        </p>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cards.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-5 md:p-6 text-left transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-amarelo/10 flex items-center justify-center mb-4 flex-shrink-0">
                <Icon className="w-5 h-5 text-amarelo" />
              </div>
              <h3 className="text-white text-base md:text-lg font-bold mb-2">
                {title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed flex-grow">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Evolucao;
