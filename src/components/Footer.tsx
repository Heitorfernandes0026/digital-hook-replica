import { Instagram, Linkedin, Facebook } from "lucide-react";
import lionLogo from "@/assets/lion-logo.png";

const Footer = () => {
  const links = {
    services: [
      { label: "Landing Pages", href: "#servicos" },
      { label: "Sites Institucionais", href: "#servicos" },
      { label: "Copywriting", href: "#servicos" },
      { label: "Consultoria", href: "#servicos" },
    ],
    company: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Método HOOK™", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
    ],
    social: [
      { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
      { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    ],
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-[#0a0a12] via-[#0d0915] to-[#050208]">
      {/* Top border glow to separate from content */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      {/* Subtle diagonal gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/5" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <img 
                src={lionLogo} 
                alt="Next Level Logo" 
                className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.7)] transition-all duration-300"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">Next Level</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Transformando negócios através de landing pages e sites que realmente convertem.
            </p>
            <div className="flex gap-3">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">contato@digitalpro.com.br</li>
              <li>
                <a 
                  href="https://wa.me/5531975911116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (31) 9 7591-1116
                </a>
              </li>
              <li>Belo Horizonte, MG - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next Level. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
