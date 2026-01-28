import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#metodo", label: "Método HOOK™" },
    { href: "#planos", label: "Planos" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: 'rgba(11, 11, 11, 0.8)',
        borderBottom: '1px solid hsl(0 0% 15% / 0.5)',
      }}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Styled like Hero */}
          <a 
            href="#" 
            className={`flex items-center gap-0 transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            aria-label="Next Level - Ir para o início"
          >
            {/* Left chevrons */}
            <div 
              className="flex items-center gap-0.5"
              style={{ color: 'hsl(142 95% 55%)' }}
              aria-hidden="true"
            >
              <svg className="w-4 h-6" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 8 8 20 16 32" />
              </svg>
              <svg className="w-4 h-6 -ml-2" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 8 8 20 16 32" />
              </svg>
            </div>

            {/* NEXT */}
            <div 
              className="px-2.5 py-1 rounded-l-md border"
              style={{ 
                background: 'linear-gradient(135deg, hsl(142 98% 54%) 0%, hsl(145 95% 48%) 100%)',
                borderColor: 'hsl(0 0% 100%)',
                boxShadow: '0 4px 16px hsl(142 90% 50% / 0.3)',
              }}
            >
              <span className="text-sm font-black text-black tracking-tight">NEXT</span>
            </div>

            {/* LEVEL */}
            <div 
              className="px-2.5 py-1 rounded-r-md border -ml-px"
              style={{ 
                background: 'hsl(0 0% 5%)',
                borderColor: 'hsl(0 0% 70%)',
              }}
            >
              <span className="text-sm font-black text-white tracking-tight">LEVEL</span>
            </div>

            {/* Right chevrons */}
            <div 
              className="flex items-center gap-0.5"
              style={{ color: 'hsl(142 95% 55%)' }}
              aria-hidden="true"
            >
              <svg className="w-4 h-6" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 8 16 20 8 32" />
              </svg>
              <svg className="w-4 h-6 -ml-2" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 8 16 20 8 32" />
              </svg>
            </div>
          </a>

          {/* Desktop Navigation - Styled like Logo */}
          <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Menu principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-md"
                style={{
                  color: 'hsl(0 0% 80%)',
                  background: 'hsl(0 0% 10% / 0.5)',
                  border: '1px solid hsl(0 0% 25% / 0.5)',
                }}
              >
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(142 90% 50% / 0.2) 0%, hsl(145 85% 45% / 0.15) 100%)',
                    border: '1px solid hsl(142 80% 50% / 0.4)',
                  }}
                  aria-hidden="true"
                />
                {/* Chevron accent on hover */}
                <span 
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: 'hsl(142 95% 55%)' }}
                  aria-hidden="true"
                >
                  <svg className="w-2 h-3" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="8 8 16 20 8 32" />
                  </svg>
                </span>
                <span className="relative group-hover:text-white group-hover:pl-3 transition-all duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="font-semibold px-6 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(142 95% 52%) 0%, hsl(145 90% 46%) 100%)',
                color: '#000',
                boxShadow: '0 4px 20px hsl(142 90% 50% / 0.3)',
              }}
              asChild
            >
              <a 
                href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20a%20agência%20" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contratar agora via WhatsApp"
              >
                Contratar Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button - Accessible */}
          <button
            className="md:hidden text-white p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden py-4 backdrop-blur-xl"
            style={{
              background: 'rgba(11, 11, 11, 0.95)',
              borderTop: '1px solid hsl(0 0% 15% / 0.5)',
            }}
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative group flex items-center gap-2 px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-md"
                  style={{
                    color: 'hsl(0 0% 70%)',
                    background: 'hsl(0 0% 8%)',
                    border: '1px solid hsl(0 0% 20%)',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Chevron accent */}
                  <span style={{ color: 'hsl(142 95% 55%)' }} aria-hidden="true">
                    <svg className="w-2.5 h-4" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="8 8 16 20 8 32" />
                    </svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
              <Button 
                className="font-semibold mt-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(142 95% 52%) 0%, hsl(145 90% 46%) 100%)',
                  color: '#000',
                }}
                asChild
              >
                <a 
                  href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20a%20agência%20" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Contratar agora via WhatsApp"
                >
                  Contratar Agora
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;