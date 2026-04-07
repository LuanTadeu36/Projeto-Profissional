import { Link } from "react-router-dom";
import logo from "../assets/logo-nocorre.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { socialLinks } from "./SocialIcons";

const navLinks = [
  { to: "/sobre", label: "Quem Somos" },
  { to: "/evolucao", label: "Evolução" },
  { to: "/documentario", label: "Documentário" },
  { to: "/roadmap", label: "Nosso App" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const mobileMenu = menuOpen && createPortal(
    <div className="lg:hidden">
      <div
        className="fixed inset-0 z-[99998] bg-black/80"
        onClick={() => setMenuOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-[280px] flex flex-col z-[99999] bg-zinc-900 border-l border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <img src={logo} alt="NoCorre" className="h-7 brightness-0 invert" />
            <span className="font-bold text-sm tracking-widest text-white">NO CORRE</span>
          </Link>
          <button
            className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-1 mt-3 px-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              className="text-white/70 hover:text-white hover:bg-white/8 text-base font-medium py-3 px-3 rounded-lg transition-all"
              to={to}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-3 mt-4">
          <Link
            to="/lista-espera"
            onClick={() => setMenuOpen(false)}
            className="w-full block bg-amarelo hover:bg-amber-400 text-preto font-semibold rounded-lg px-5 py-3 text-base text-center transition-colors"
          >
            Quero fazer parte
          </Link>
        </div>
        <div className="px-5 mt-auto pb-6 pt-5 border-t border-white/10 flex items-center gap-20">
          {socialLinks.map(({ nome, url, label, icon }) => (
            <a
              key={nome}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/40 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center px-4 py-3 md:px-8 md:py-3.5 w-full max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center gap-1.5 select-none flex-shrink-0">
            <img src={logo} alt="NoCorre — logo" className="h-8 md:h-9" />
            <span className="font-bold text-sm md:text-base tracking-widest text-black whitespace-nowrap">NO CORRE</span>
          </Link>

          <nav className="hidden lg:flex flex-grow justify-center gap-0.5 items-center">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all"
                to={to}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center ml-auto gap-3">
            <div className="hidden lg:flex">
              <Link
                to="/lista-espera"
                className="bg-amarelo hover:bg-amber-400 text-preto font-semibold rounded-md px-5 py-2 text-sm transition-colors"
              >
                Quero fazer parte
              </Link>
            </div>
            <button
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block w-5 h-0.5 rounded bg-gray-700 mb-1.5" />
              <span className="block w-5 h-0.5 rounded bg-gray-700 mb-1.5" />
              <span className="block w-5 h-0.5 rounded bg-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
