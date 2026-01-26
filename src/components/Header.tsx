import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#metodo", label: "Método HOOK™" },
    { href: "#planos", label: "Planos" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_0_15px_hsl(30_90%_50%/0.4)]">
              <Crown className="text-white" size={18} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-white tracking-wide" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>Agência Next Level</span>
              <span className="text-[10px] text-orange-400 tracking-widest uppercase">Marketing Digital</span>
            </div>
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
