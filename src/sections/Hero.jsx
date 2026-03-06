import { Link } from "react-router-dom";
import grupoCorrida from "../assets/grupo-corrida.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-start justify-start overflow-hidden px-4 md:px-12 pt-16 md:pt-8"
      style={{
        backgroundImage: `url(${grupoCorrida})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 max-w-[18rem] md:max-w-[26rem] w-full text-white flex flex-col items-start space-y-1 md:space-y-3 text-left mt-1 md:mt-32">
        <h1 className="font-titulo text-3xl md:text-6xl drop-shadow-xl leading-tight tracking-wide uppercase mt-5 md:mt-0">
          Superando Limites
        </h1>
        <h2 className="font-semibold text-sm md:text-2xl text-amarelo drop-shadow-md">
          Não é apenas uma marca,<br className="md:hidden" /> é um movimento.
        </h2>
        <p className="text-xs md:text-[17.5px] opacity-90 leading-relaxed">
          O app que impulsiona seu treino,<br className="md:hidden" /> sua evolução e une sua comunidade.<br /> Seja um dos primeiros a testar.
        </p>
        <div className="pt-5 md:pt-10">
          <Link
            to="/lista-espera"
            className="inline-block bg-amarelo hover:bg-amarelo/90 text-preto font-bold text-sm md:text-lg rounded-lg px-7 py-2.5 md:px-9 md:py-3 shadow-lg transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-amarelo focus:ring-offset-2"
          >Quero fazer parte</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;