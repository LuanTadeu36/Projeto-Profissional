import logo from "../assets/logo-nocorre.png";

function Footer() {
  return (
    <footer className="w-full z-50 bg-preto border-t border-white/10 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3 px-4">
        <img src={logo} alt="NoCorre — logo" className="h-6" />
        <span className="text-white/70 text-xs">
          © {new Date().getFullYear()} NoCorre. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
