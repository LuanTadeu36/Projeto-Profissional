import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-amarelo mb-4">404</h1>
        <p className="text-white/70 text-lg md:text-xl mb-8">Página não encontrada.</p>
        <Link
          to="/"
          className="inline-block bg-amarelo hover:bg-amber-400 text-preto font-bold rounded-lg px-8 py-3 transition-all"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
