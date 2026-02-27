function Footer() {
  return (
    <footer className="w-full z-50 bg-gray-50 text-preto border-t border-gray-200 opacity-90 text-xs py-2">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 min-h-[40px] gap-2 md:gap-0">
        <div className="flex flex-wrap gap-4 items-center mb-1 md:mb-0">
          <a href="mailto:contato@nocorre.com" className="text-preto/70 hover:text-amarelo transition-colors">Contato</a>
        </div>
        <div className="flex gap-4 items-center mb-1 md:mb-0">
          <a href="https://www.instagram.com/nocorre.run/" target="_blank" rel="noopener noreferrer" className="text-preto/70 hover:text-amarelo transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@nocorre.run" target="_blank" rel="noopener noreferrer" className="text-preto/70 hover:text-amarelo transition-colors">TikTok</a>
        </div>
        <div className="text-preto/60 text-[11px] mt-1 md:mt-0">
          © {new Date().getFullYear()} NoCorre. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}


export default Footer;
