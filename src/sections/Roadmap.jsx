import { Activity, TrendingUp, ShoppingBag, Camera, Calculator, Trophy } from "lucide-react";

const features = [
  {
    Icon: Activity,
    titulo: "Treinos Personalizados",
    descricao:
      "Planos estruturados para iniciantes, intermediários e avançados. O app adapta os treinos ao seu ritmo, seus objetivos e sua rotina — seja sua primeira corrida de 5km ou a preparação para uma maratona.",
    destaques: ["Planos por nível", "Adaptação ao seu ritmo", "Progressão inteligente"],
  },
  {
    Icon: TrendingUp,
    titulo: "Desempenho em Tempo Real",
    descricao:
      "Acompanhe pace, distância, tempo e evolução semana a semana. Gráficos claros que transformam cada corrida em dados que te motivam a ir além e entender seu progresso real.",
    destaques: ["Métricas por corrida", "Gráficos semanais", "Histórico completo"],
  },
  {
    Icon: ShoppingBag,
    titulo: "Shop NoCorre",
    descricao:
      "Vista a camisa — literalmente. Nossa loja vai trazer camisetas, bonés, canecas e acessórios com a identidade NoCorre. Correr com estilo e representar o movimento.",
    destaques: ["Camisetas exclusivas", "Bonés e acessórios", "Canecas NoCorre"],
  },
  {
    Icon: Camera,
    titulo: "Comunidade Social",
    descricao:
      "Um feed feito pra quem corre. Poste fotos dos treinos, registre suas corridas, acompanhe amigos e transforme cada km compartilhado em inspiração para a comunidade.",
    destaques: ["Feed de fotos", "Registro de treinos", "Conexão entre corredores"],
  },
  {
    Icon: Calculator,
    titulo: "Calculadora Nutricional",
    descricao:
      "Saiba o que está comendo. A calculadora vai medir o peso e as calorias dos alimentos, ajudando você a alinhar a alimentação com seus objetivos na corrida.",
    destaques: ["Peso dos alimentos", "Contagem de calorias", "Dicas nutricionais"],
  },
  {
    Icon: Trophy,
    titulo: "Desafios e Rankings",
    descricao:
      "Compete com amigos, participe de desafios semanais e suba no ranking. Medalhas e badges por conquistas que tornam cada treino mais divertido e motivador.",
    destaques: ["Rankings semanais", "Badges de conquista", "Desafios entre amigos"],
  },
];

function Roadmap() {
  return (
    <section className="w-full bg-preto px-4 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto w-full">
        {/* Badge e Título */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-amarelo/10 border border-amarelo/20 text-amarelo text-xs font-semibold rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amarelo animate-pulse" />
            Lançamento em breve
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Nosso <span className="text-amarelo">App</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Conheça tudo que o NoCorre vai colocar no seu bolso.
          </p>
        </div>

        {/* Features zig-zag */}
        <div className="flex flex-col gap-8 md:gap-14">
          {features.map(({ Icon, titulo, descricao, destaques }, index) => (
            <div
              key={titulo}
              className={`flex flex-col items-center text-center md:text-left gap-6 md:gap-12 md:flex-row md:items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Ícone */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-amarelo/10 border border-amarelo/15 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto md:mx-0">
                  <Icon className="w-9 h-9 md:w-14 md:h-14 text-amarelo" />
                </div>
              </div>

              {/* Texto */}
              <div className="flex-1">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                  {titulo}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                  {descricao}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {destaques.map((destaque) => (
                    <span
                      key={destaque}
                      className="text-xs font-medium bg-white/5 text-white/60 border border-white/10 rounded-full px-3 py-1"
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
