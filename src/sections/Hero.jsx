import { Link } from "react-router-dom";
import grupoCorrida from "../assets/grupo-corrida.jpg";

function Hero() {
  return (
    <section
      className="relative flex-1 flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${grupoCorrida})`,
        backgroundSize: "cover",
        backgroundPosition: "center",        minHeight: "calc(100vh - 3.5rem)",      }}
    >
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 z-10" />

      {/* Conteúdo principal */}
      <div className="relative z-20 flex-1 flex items-start px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-6">
        <div className="max-w-xl w-full text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amarelo animate-pulse" />
            <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
              Comunidade de corredores desde 2023
            </span>
          </div>

          <h1 className="font-titulo text-5xl md:text-7xl drop-shadow-xl leading-none tracking-wide uppercase mb-3 md:mb-4">
            Superando<br />Limites
          </h1>
          <p className="font-semibold text-sm md:text-xl text-amarelo mb-3 md:mb-4">
            Não é apenas uma marca — é um movimento.
          </p>
          <p className="text-xs md:text-base text-white/75 leading-relaxed max-w-md mb-2 md:mb-3">
            O app que impulsiona seu treino, acompanha sua evolução e une sua
            comunidade. Seja um dos primeiros a testar.
          </p>
          <Link
            to="/lista-espera"
            className="inline-block bg-amarelo hover:bg-amber-400 text-preto font-bold text-sm md:text-base rounded-lg px-8 py-3 md:px-10 md:py-3.5 shadow-lg transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Quero fazer parte
          </Link>
        </div>
      </div>

      {/* Barra de estatísticas */}
      <div className="relative z-20 flex justify-start gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-4 md:py-5 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">200+</p>
          <p className="text-white/45 text-xs">Membros ativos</p>
        </div>
        <div className="w-px bg-white/10" />
        <div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">100km</p>
          <p className="text-white/45 text-xs">Desafio realizado</p>
        </div>
        <div className="w-px bg-white/10" />
        <div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">2023</p>
          <p className="text-white/45 text-xs">Fundado em</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;