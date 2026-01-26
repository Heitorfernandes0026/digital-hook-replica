import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import lionLogo from "@/assets/lion-logo.png";

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

  const brandName = "NEXT LEVEL";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={lionLogo} 
              alt="Next Level Logo" 
              className={`w-10 h-10 object-contain transition-all duration-700 ${
                isLoaded 
                  ? 'opacity-100 scale-100 drop-shadow-[0_0_15px_rgba(147,51,234,0.7)]' 
                  : 'opacity-0 scale-75'
              }`}
              style={{
                animation: isLoaded ? 'pulseGlow 2s ease-in-out infinite' : 'none'
              }}
            />
            <span className="font-bold text-xl tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              {brandName.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{
                    transitionDelay: `${index * 50 + 400}ms`,
                    textShadow: isLoaded ? '0 0 20px rgba(147,51,234,0.5)' : 'none'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-orange-400 transition-colors text-sm font-medium tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold px-6 shadow-[0_0_20px_hsl(30_90%_50%/0.3)]" size="default" asChild>
              <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20a%20agência%20" target="_blank" rel="noopener noreferrer">Contratar Agora</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-[#0a0a12]/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-orange-400 transition-colors text-sm font-medium tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold mt-4" size="default" asChild>
                <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20a%20agência%20" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Contratar Agora</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
