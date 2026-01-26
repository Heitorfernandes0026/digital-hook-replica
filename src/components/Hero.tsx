import { useEffect, useState } from "react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* ========== CAMADA 1: FUNDO (Background Layer) ========== */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, hsl(240 20% 3%) 0%, hsl(260 30% 5%) 50%, hsl(240 20% 4%) 100%)'
        }}
      />

      {/* ========== CAMADA 2: ATMOSFERA (Atmosphere Layer) ========== */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Nebulosa de fundo animada */}
        <div 
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            isLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 40%, hsl(280 70% 15% / 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 30% 60%, hsl(260 60% 12% / 0.5) 0%, transparent 45%),
              radial-gradient(ellipse 100% 80% at 80% 80%, hsl(300 50% 10% / 0.4) 0%, transparent 60%)
            `,
            animation: isLoaded ? 'nebula-breathe 8s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Raios distantes da tempestade - mais dramáticos */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className={`absolute transition-all duration-1000 ${
              isLoaded ? 'opacity-50' : 'opacity-0'
            }`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${5 + (i % 4) * 12}%`,
              width: '3px',
              height: `${80 + Math.random() * 120}px`,
              background: `linear-gradient(180deg, 
                hsl(280 90% 75% / 0.9) 0%, 
                hsl(260 80% 65% / 0.5) 40%, 
                hsl(320 70% 55% / 0.2) 70%,
                transparent 100%)`,
              filter: 'blur(1px)',
              transform: `rotate(${-20 + i * 6}deg)`,
              transitionDelay: `${400 + i * 120}ms`,
              animation: isLoaded ? `lightning-strike ${2 + i * 0.4}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        {/* Partículas de energia flutuantes */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full transition-opacity duration-1000 ${
              isLoaded ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 4 === 0 
                ? 'hsl(280 90% 75%)' 
                : i % 4 === 1 
                  ? 'hsl(200 90% 70%)' 
                  : i % 4 === 2
                    ? 'hsl(320 80% 70%)'
                    : 'hsl(30 90% 60%)',
              boxShadow: `0 0 ${6 + Math.random() * 12}px currentColor`,
              transitionDelay: `${600 + i * 40}ms`,
              animation: `particle-dance ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Ondas de energia */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className={`absolute rounded-full transition-opacity duration-2000 ${
              isLoaded ? 'opacity-30' : 'opacity-0'
            }`}
            style={{
              top: '45%',
              left: '55%',
              width: '200px',
              height: '200px',
              border: `2px solid ${i % 2 === 0 ? 'hsl(280 80% 60%)' : 'hsl(200 80% 60%)'}`,
              transform: 'translate(-50%, -50%)',
              animation: isLoaded ? `energy-wave ${3 + i}s ease-out infinite` : 'none',
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>

      {/* ========== CAMADA 3: PERSONAGEM (Character Layer) ========== */}
      <div 
        className={`absolute inset-0 z-20 transition-all duration-[1500ms] ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          animation: isLoaded ? 'character-breathe 6s ease-in-out infinite' : 'none'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${neonLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* ========== CAMADA 4: EFEITO NEON (Neon Glow Layer) ========== */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Brilho principal do leão - pulsante intenso */}
        <div 
          className={`absolute transition-all duration-[2000ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '10%',
            right: '5%',
            width: '70%',
            height: '80%',
            background: 'radial-gradient(ellipse 70% 60% at 60% 50%, hsl(280 90% 55% / 0.35) 0%, transparent 55%)',
            filter: 'blur(50px)',
            animation: isLoaded ? 'neon-pulse-intense 2.5s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Brilho secundário - ciano elétrico */}
        <div 
          className={`absolute transition-all duration-[2500ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '15%',
            right: '10%',
            width: '55%',
            height: '65%',
            background: 'radial-gradient(ellipse 60% 50% at 55% 45%, hsl(200 95% 60% / 0.25) 0%, transparent 50%)',
            filter: 'blur(40px)',
            animation: isLoaded ? 'neon-shift 4s ease-in-out infinite' : 'none',
            animationDelay: '0.3s'
          }}
        />
        
        {/* Brilho rosa/magenta vibrante */}
        <div 
          className={`absolute transition-all duration-[2200ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '25%',
            right: '0%',
            width: '50%',
            height: '55%',
            background: 'radial-gradient(ellipse 55% 50% at 50% 50%, hsl(320 90% 60% / 0.3) 0%, transparent 45%)',
            filter: 'blur(45px)',
            animation: isLoaded ? 'neon-pulse-intense 3s ease-in-out infinite' : 'none',
            animationDelay: '0.8s'
          }}
        />

        {/* Brilho laranja/dourado */}
        <div 
          className={`absolute transition-all duration-[2400ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '35%',
            right: '15%',
            width: '40%',
            height: '45%',
            background: 'radial-gradient(ellipse 50% 45% at 50% 50%, hsl(30 95% 55% / 0.2) 0%, transparent 50%)',
            filter: 'blur(35px)',
            animation: isLoaded ? 'neon-shift 3.5s ease-in-out infinite' : 'none',
            animationDelay: '1.2s'
          }}
        />
        
        {/* Raios de neon energéticos */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`neon-ray-${i}`}
            className={`absolute origin-left transition-all ease-out ${
              isLoaded ? 'opacity-90' : 'opacity-0'
            }`}
            style={{
              top: '45%',
              left: '55%',
              width: isLoaded ? `${80 + i * 15}px` : '0px',
              height: '4px',
              transform: `rotate(${i * 30}deg)`,
              background: `linear-gradient(90deg, 
                ${i % 4 === 0 ? 'hsl(200 95% 65%)' : 
                  i % 4 === 1 ? 'hsl(280 90% 65%)' : 
                  i % 4 === 2 ? 'hsl(320 90% 65%)' : 
                  'hsl(30 95% 60%)'} 0%, 
                transparent 100%)`,
              boxShadow: `0 0 20px ${
                i % 4 === 0 ? 'hsl(200 95% 65% / 0.9)' : 
                i % 4 === 1 ? 'hsl(280 90% 65% / 0.9)' : 
                i % 4 === 2 ? 'hsl(320 90% 65% / 0.9)' : 
                'hsl(30 95% 60% / 0.9)'
              }`,
              transitionDuration: `${500 + i * 60}ms`,
              transitionDelay: `${200 + i * 40}ms`,
              animation: isLoaded ? `ray-extend ${1.5 + i * 0.2}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
        
        {/* Centro de energia pulsante */}
        <div 
          className={`absolute transition-all duration-[1500ms] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            top: '42%',
            left: '53%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsl(280 95% 75% / 0.7) 0%, hsl(320 90% 60% / 0.4) 30%, hsl(260 80% 50% / 0.2) 60%, transparent 70%)',
            filter: 'blur(15px)',
            animation: isLoaded ? 'core-energy 1.5s ease-in-out infinite' : 'none'
          }}
        />

        {/* Anéis de energia orbitais */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className={`absolute rounded-full border-2 transition-all duration-2000 ${
              isLoaded ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              top: '38%',
              left: '48%',
              width: `${180 + i * 60}px`,
              height: `${180 + i * 60}px`,
              borderColor: i === 0 ? 'hsl(280 80% 60% / 0.5)' : 'hsl(200 80% 60% / 0.4)',
              transform: 'translate(-50%, -50%)',
              animation: isLoaded ? `ring-orbit ${4 + i * 2}s linear infinite` : 'none',
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
            }}
          />
        ))}
      </div>

      {/* ========== CAMADA 5: CONTEÚDO - Reservado ========== */}

      {/* Gradiente inferior para transição suave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(240 20% 4%) 0%, transparent 100%)'
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes neon-pulse-intense {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        
        @keyframes neon-shift {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1) translate(0, 0);
          }
          33% {
            opacity: 0.9;
            transform: scale(1.05) translate(-15px, 10px);
          }
          66% {
            opacity: 0.8;
            transform: scale(1.02) translate(10px, -5px);
          }
        }
        
        @keyframes ray-extend {
          0%, 100% {
            opacity: 0.5;
            transform: rotate(var(--rotation, 0deg)) scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) scaleX(1.3);
          }
        }
        
        @keyframes core-energy {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
            filter: blur(15px);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
            filter: blur(20px);
          }
        }
        
        @keyframes lightning-strike {
          0%, 85%, 100% {
            opacity: 0.2;
            transform: scaleY(1);
          }
          5%, 10% {
            opacity: 1;
            transform: scaleY(1.1);
          }
          15% {
            opacity: 0.1;
          }
          20%, 25% {
            opacity: 0.8;
            transform: scaleY(1.05);
          }
        }
        
        @keyframes particle-dance {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-25px) translateX(5px) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes energy-wave {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        @keyframes nebula-breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes character-breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }

        @keyframes ring-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
