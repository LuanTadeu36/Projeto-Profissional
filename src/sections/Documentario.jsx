function Documentario() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center px-4 md:px-8 py-20 md:py-24">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
          Documentário
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Conheça a história por trás do NoCorre. De uma ideia entre amigos a
          um movimento que inspira corredores.
        </p>

        {/* Player do YouTube */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-amarelo/5"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/el6TtZnjMlM"
            title="Documentário NoCorre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Documentario;
