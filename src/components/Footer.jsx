import logo from "../assets/logo-nocorre.png";
import { socialLinks } from "./SocialIcons";

function Footer() {
  return (
    <footer className="w-full bg-gray-950 border-t border-white/10 py-5">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="flex items-center gap-2 text-white/40 text-xs">
            <img src={logo} alt="" className="h-4 brightness-0 invert opacity-40" />
            © {new Date().getFullYear()} NoCorre. Todos os direitos reservados.
          </span>
        <span className="hidden sm:block text-white/20 text-xs">·</span>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ nome, url, label, icon }) => (
            <a
              key={nome}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/50 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
