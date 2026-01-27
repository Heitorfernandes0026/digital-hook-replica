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
    <footer className="relative py-16 overflow-hidden" style={{ background: '#080808' }}>
      {/* Top border glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(30 80% 50% / 0.3), transparent)',
        }}
      />
      
      {/* Subtle orange glow accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[30%] right-[20%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.03) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <img 
                src={lionLogo} 
                alt="Next Level Logo" 
                className="w-12 h-12 object-contain transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 12px hsl(30 90% 50% / 0.5))',
                }}
              />
              <span 
                className="font-bold text-xl uppercase"
                style={{
                  background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Next Level
              </span>
            </a>
            <p className="text-white/50 text-sm mb-6">
              Transformando negócios através de landing pages e sites que realmente convertem.
            </p>
            <div className="flex gap-3">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-orange-400 transition-all duration-300"
                  style={{
                    background: 'hsl(0 0% 10%)',
                    border: '1px solid hsl(0 0% 20%)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">contato@digitalpro.com.br</li>
              <li>
                <a 
                  href="https://wa.me/5531975911116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  (31) 9 7591-1116
                </a>
              </li>
              <li>Belo Horizonte, MG - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: '1px solid hsl(0 0% 15%)',
          }}
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Next Level. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
