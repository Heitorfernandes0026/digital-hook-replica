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
      { icon: Instagram, href: "https://instagram.com", label: "Visitar nosso Instagram" },
      { icon: Linkedin, href: "https://linkedin.com", label: "Visitar nosso LinkedIn" },
      { icon: Facebook, href: "https://facebook.com", label: "Visitar nosso Facebook" },
    ],
  };

  return (
    <footer 
      className="relative py-16 overflow-hidden" 
      style={{ background: '#080808' }}
      role="contentinfo"
    >
      {/* Top border glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(142 80% 50% / 0.3), transparent)',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle green glow accent - no filter:blur */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[30%] right-[20%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle, hsl(142 90% 50% / 0.06) 0%, hsl(142 90% 50% / 0.01) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand - Styled like Header Logo */}
          <div className="md:col-span-1">
            <a 
              href="#" 
              className="flex items-center gap-0 mb-4 group"
              aria-label="Next Level - Ir para o início"
            >
              {/* Left chevrons */}
              <div 
                className="flex items-center gap-0.5"
                style={{ color: 'hsl(142 95% 55%)' }}
                aria-hidden="true"
              >
                <svg className="w-3 h-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 8 8 20 16 32" />
                </svg>
                <svg className="w-3 h-5 -ml-1.5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 8 8 20 16 32" />
                </svg>
              </div>

              {/* NEXT */}
              <div 
                className="px-2 py-0.5 rounded-l-md border"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(142 98% 54%) 0%, hsl(145 95% 48%) 100%)',
                  borderColor: 'hsl(0 0% 100%)',
                  boxShadow: '0 4px 16px hsl(142 90% 50% / 0.3)',
                }}
              >
                <span className="text-xs font-black text-black tracking-tight">NEXT</span>
              </div>

              {/* LEVEL */}
              <div 
                className="px-2 py-0.5 rounded-r-md border -ml-px"
                style={{ 
                  background: 'hsl(0 0% 5%)',
                  borderColor: 'hsl(0 0% 70%)',
                }}
              >
                <span className="text-xs font-black text-white tracking-tight">LEVEL</span>
              </div>

              {/* Right chevrons */}
              <div 
                className="flex items-center gap-0.5"
                style={{ color: 'hsl(142 95% 55%)' }}
                aria-hidden="true"
              >
                <svg className="w-3 h-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="8 8 16 20 8 32" />
                </svg>
                <svg className="w-3 h-5 -ml-1.5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="8 8 16 20 8 32" />
                </svg>
              </div>
            </a>
            <p style={{ color: 'hsl(0 0% 65%)' }} className="text-sm mb-6">
              Transformando negócios através de landing pages e sites que realmente convertem.
            </p>
            <div className="flex gap-3" role="list" aria-label="Redes sociais">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:text-green-400"
                  style={{
                    color: 'hsl(0 0% 65%)',
                    background: 'hsl(0 0% 10%)',
                    border: '1px solid hsl(0 0% 25%)',
                  }}
                  aria-label={social.label}
                  role="listitem"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Links de serviços">
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-400 transition-colors text-sm"
                    style={{ color: 'hsl(0 0% 65%)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Links da empresa">
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-400 transition-colors text-sm"
                    style={{ color: 'hsl(0 0% 65%)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <address className="space-y-3 text-sm not-italic" style={{ color: 'hsl(0 0% 65%)' }}>
              <p>
                <a 
                  href="mailto:contato@nextlevel.com.br"
                  className="hover:text-green-400 transition-colors"
                  aria-label="Enviar email para contato@nextlevel.com.br"
                >
                  contato@nextlevel.com.br
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/5531975911116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                  aria-label="Ligar ou enviar WhatsApp para (31) 9 7591-1116"
                >
                  (31) 9 7591-1116
                </a>
              </p>
              <p>Belo Horizonte, MG - Brasil</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: '1px solid hsl(0 0% 18%)',
          }}
        >
          <p className="text-sm" style={{ color: 'hsl(0 0% 55%)' }}>
            © {new Date().getFullYear()} Next Level. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6 text-sm" style={{ color: 'hsl(0 0% 55%)' }} aria-label="Links legais">
            <a href="#" className="hover:text-green-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Termos de Uso
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;