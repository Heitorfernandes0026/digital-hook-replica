import { Instagram, Linkedin, Facebook } from "lucide-react";

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
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl text-foreground">DigitalPro</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Transformando negócios através de landing pages e sites que realmente convertem.
            </p>
            <div className="flex gap-4">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
              <li>contato@digitalpro.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DigitalPro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
