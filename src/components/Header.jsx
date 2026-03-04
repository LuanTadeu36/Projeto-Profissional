import { Link } from "react-router-dom";
import logo from "../assets/logo-nocorre.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll do body quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fechar menu com tecla Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const mobileMenu = menuOpen && createPortal(
    <div className="lg:hidden">
      {/* Overlay escuro */}
      <div 
        className="fixed inset-0 z-[99998] bg-black/80"
        onClick={() => setMenuOpen(false)} 
      />
      
      {/* Painel do menu */}
      <div 
        className="fixed top-0 right-0 h-full w-[280px] flex flex-col z-[99999] bg-preto"
      >
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-amarelo text-3xl font-bold hover:text-amarelo/80"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>
        <nav className="flex flex-col items-stretch gap-2 mt-20 px-4">
          <Link className="text-white hover:text-amarelo text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/sobre" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
          <Link className="text-white hover:text-amarelo text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/evolucao" onClick={() => setMenuOpen(false)}>Evolução</Link>
          <Link className="text-white hover:text-amarelo text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/documentario" onClick={() => setMenuOpen(false)}>Documentário</Link>
          <Link className="text-white hover:text-amarelo text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/roadmap" onClick={() => setMenuOpen(false)}>Nosso App</Link>
          <Link className="text-white hover:text-amarelo text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/redes" onClick={() => setMenuOpen(false)}>Redes</Link>
          <Link to="/lista-espera" onClick={() => setMenuOpen(false)} className="w-full mt-4 block bg-amarelo hover:bg-amarelo/90 text-preto font-semibold rounded-md px-5 py-3 text-base text-center">Quero fazer parte</Link>
        </nav>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header className="w-full z-40 transition-all duration-300 bg-white/80 backdrop-blur-sm absolute top-0 left-0">
        <div className="flex items-center px-2 pt-4 pb-3 md:px-8 md:pt-6 md:pb-4 w-full">
          {/* Esquerda: Logo + NO CORRE */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center gap-0 select-none">
              <img src={logo} alt="NoCorre — logo" className="h-8 md:h-10 ml-1 md:ml-2 mr-1 md:mr-2" />
              <span className="font-bold text-base md:text-lg tracking-widest text-black transition-colors whitespace-nowrap">NO CORRE</span>
            </Link>
          </div>

          {/* Centro: Navegação */}
          <nav className="hidden lg:flex flex-grow justify-center gap-2 items-center">
            <Link className="px-3 py-2 font-medium text-black hover:text-amarelo transition-colors" to="/sobre">Quem Somos</Link>
            <Link className="px-3 py-2 font-medium text-black hover:text-amarelo transition-colors" to="/evolucao">Evolução</Link>
            <Link className="px-3 py-2 font-medium text-black hover:text-amarelo transition-colors" to="/documentario">Documentário</Link>
            <Link className="px-3 py-2 font-medium text-black hover:text-amarelo transition-colors" to="/roadmap">Nosso App</Link>
            <Link className="px-3 py-2 font-medium text-black hover:text-amarelo transition-colors" to="/redes">Redes</Link>
          </nav>

          {/* Direita: Botão lista de espera (desktop) OU hamburguer (mobile) */}
          <div className="flex items-center ml-auto">
            {/* Botão lista de espera desktop */}
            <div className="hidden lg:flex items-center justify-end">
              <Link to="/lista-espera" className="bg-amarelo hover:bg-amarelo/90 text-preto font-semibold rounded-md px-5 py-2 text-base transition-colors">Quero fazer parte</Link>
            </div>
            {/* Hamburger menu (mobile) */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block w-7 h-1 rounded mb-1 bg-amarelo"></span>
              <span className="block w-7 h-1 rounded mb-1 bg-amarelo"></span>
              <span className="block w-7 h-1 rounded bg-amarelo"></span>
            </button>
          </div>
        </div>
      </header>
      
      {mobileMenu}
    </>
  );
}
