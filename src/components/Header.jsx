
import { Link } from "react-router-dom";
import teste2 from "../assets/teste2.png";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const mobileMenu = menuOpen && createPortal(
    <div className="lg:hidden">
      {/* Overlay escuro */}
      <div 
        className="fixed inset-0"
        style={{ zIndex: 99998, backgroundColor: 'rgba(0,0,0,0.8)' }}
        onClick={() => setMenuOpen(false)} 
      />
      
      {/* Painel do menu */}
      <div 
        className="fixed top-0 right-0 h-full w-[280px] flex flex-col"
        style={{ zIndex: 99999, backgroundColor: '#111111' }}
      >
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-yellow-400 text-3xl font-bold hover:text-yellow-300"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>
        <nav className="flex flex-col items-stretch gap-2 mt-20 px-4">
          <Link className="text-white hover:text-yellow-400 text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/sobre" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
          <Link className="text-white hover:text-yellow-400 text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/evolucao" onClick={() => setMenuOpen(false)}>Evolução</Link>
          <Link className="text-white hover:text-yellow-400 text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/documentario" onClick={() => setMenuOpen(false)}>Documentário</Link>
          <Link className="text-white hover:text-yellow-400 text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/roadmap" onClick={() => setMenuOpen(false)}>Nosso App</Link>
          <Link className="text-white hover:text-yellow-400 text-lg font-medium py-4 px-4 text-center rounded-lg hover:bg-white/10" to="/redes" onClick={() => setMenuOpen(false)}>Redes</Link>
          <Link to="/lista-espera" onClick={() => setMenuOpen(false)} className="w-full mt-4">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md px-5 py-3 text-base">Entrar na lista de espera</button>
          </Link>
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
              <img src={teste2} alt="Logo secundário" className="h-8 md:h-10 ml-1 md:ml-2 mr-1 md:mr-2" />
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
              <Link to="/lista-espera">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-preto font-semibold rounded-md px-5 py-2 text-base transition-colors">Entrar na lista de espera</button>
              </Link>
            </div>
            {/* Hamburger menu (mobile) */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block w-7 h-1 rounded mb-1 bg-yellow-400"></span>
              <span className="block w-7 h-1 rounded mb-1 bg-yellow-400"></span>
              <span className="block w-7 h-1 rounded bg-yellow-400"></span>
            </button>
          </div>
        </div>
      </header>
      
      {mobileMenu}
    </>
  );
}
