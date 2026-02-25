
import grupoCorrida from "../assets/grupo-corrida.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-[100vh] md:min-h-screen flex items-start justify-start overflow-hidden px-6 md:px-12 pt-20 md:pt-8"
      style={{
        backgroundImage: `url(${grupoCorrida})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro - mais forte no mobile */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-10" />
      <div className="relative z-20 max-w-2xl w-full text-white flex flex-col items-start space-y-4 md:space-y-6 text-left mt-4 md:mt-32">
        <h1 className="font-extrabold text-4xl md:text-5xl drop-shadow-xl leading-tight">
          Superando Limites
        </h1>
        <h2 className="font-semibold text-base md:text-2xl text-yellow-400 drop-shadow-md">
          Não é apenas uma marca, é um movimento.
        </h2>
        <p className="max-w-lg text-sm md:text-lg opacity-90 leading-relaxed">
          Inspirados pela crença inabalável na mentalidade de crescimento, acreditamos que cada experiência na vida, seja ela uma vitória ou um desafio, é uma oportunidade de evolução pessoal e esportiva.
        </p>
        <a
          href="/lista-espera"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-preto font-bold text-base md:text-lg rounded-lg px-9 py-3 shadow-lg transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >Entrar na lista de espera</a>
      </div>
    </section>
  );
}

export default Hero;