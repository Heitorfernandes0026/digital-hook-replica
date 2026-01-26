import { useEffect, useState } from "react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const textTimer = setTimeout(() => setTextVisible(true), 800);
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
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
        {/* Nebulosa de fundo */}
        <div 
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            isLoaded ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 40%, hsl(280 70% 15% / 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 30% 60%, hsl(260 60% 12% / 0.5) 0%, transparent 45%),
              radial-gradient(ellipse 100% 80% at 80% 80%, hsl(300 50% 10% / 0.4) 0%, transparent 60%)
            `
          }}
        />
        
        {/* Raios distantes da tempestade */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className={`absolute transition-all duration-1000 ${
              isLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 3) * 15}%`,
              width: '2px',
              height: `${60 + Math.random() * 100}px`,
              background: `linear-gradient(180deg, 
                hsl(280 80% 70% / 0.8) 0%, 
                hsl(260 70% 60% / 0.4) 50%, 
                transparent 100%)`,
              filter: 'blur(1px)',
              transform: `rotate(${-15 + i * 5}deg)`,
              transitionDelay: `${500 + i * 150}ms`,
              animation: isLoaded ? `lightning-flicker ${3 + i * 0.5}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Partículas de luz ambiente */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full transition-opacity duration-1000 ${
              isLoaded ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: i % 3 === 0 
                ? 'hsl(280 80% 70%)' 
                : i % 3 === 1 
                  ? 'hsl(200 80% 70%)' 
                  : 'hsl(320 70% 65%)',
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              transitionDelay: `${800 + i * 50}ms`,
              animation: `particle-float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* ========== CAMADA 3: PERSONAGEM (Character Layer) ========== */}
      <div 
        className={`absolute inset-0 z-20 transition-all duration-[1500ms] ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
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
        {/* Brilho principal do leão - pulsante */}
        <div 
          className={`absolute transition-all duration-[2000ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '15%',
            right: '10%',
            width: '60%',
            height: '70%',
            background: 'radial-gradient(ellipse 70% 60% at 60% 50%, hsl(280 80% 50% / 0.25) 0%, transparent 60%)',
            filter: 'blur(40px)',
            animation: isLoaded ? 'neon-pulse 3s ease-in-out infinite' : 'none'
          }}
        />
        
        {/* Brilho secundário - ciano */}
        <div 
          className={`absolute transition-all duration-[2500ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '20%',
            right: '15%',
            width: '50%',
            height: '60%',
            background: 'radial-gradient(ellipse 60% 50% at 55% 45%, hsl(200 90% 55% / 0.15) 0%, transparent 55%)',
            filter: 'blur(50px)',
            animation: isLoaded ? 'neon-pulse-alt 4s ease-in-out infinite' : 'none',
            animationDelay: '0.5s'
          }}
        />
        
        {/* Brilho rosa/magenta */}
        <div 
          className={`absolute transition-all duration-[2200ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: '30%',
            right: '5%',
            width: '45%',
            height: '50%',
            background: 'radial-gradient(ellipse 50% 45% at 50% 50%, hsl(320 80% 55% / 0.2) 0%, transparent 50%)',
            filter: 'blur(45px)',
            animation: isLoaded ? 'neon-pulse 3.5s ease-in-out infinite' : 'none',
            animationDelay: '1s'
          }}
        />
        
        {/* Raios de neon próximos */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`neon-ray-${i}`}
            className={`absolute origin-center transition-all ease-out ${
              isLoaded ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              top: '45%',
              left: '55%',
              width: isLoaded ? `${100 + i * 20}px` : '0px',
              height: '3px',
              transform: `rotate(${i * 45}deg)`,
              background: `linear-gradient(90deg, 
                ${i % 4 === 0 ? 'hsl(200 90% 60%)' : 
                  i % 4 === 1 ? 'hsl(280 80% 60%)' : 
                  i % 4 === 2 ? 'hsl(320 80% 60%)' : 
                  'hsl(30 90% 55%)'} 0%, 
                transparent 100%)`,
              boxShadow: `0 0 15px ${
                i % 4 === 0 ? 'hsl(200 90% 60% / 0.8)' : 
                i % 4 === 1 ? 'hsl(280 80% 60% / 0.8)' : 
                i % 4 === 2 ? 'hsl(320 80% 60% / 0.8)' : 
                'hsl(30 90% 55% / 0.8)'
              }`,
              transitionDuration: `${600 + i * 80}ms`,
              transitionDelay: `${300 + i * 60}ms`,
              animation: isLoaded ? `ray-pulse ${2 + i * 0.3}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
        
        {/* Centro de energia */}
        <div 
          className={`absolute transition-all duration-[1500ms] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            top: '42%',
            left: '53%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsl(280 90% 70% / 0.6) 0%, hsl(260 80% 50% / 0.3) 40%, transparent 70%)',
            filter: 'blur(20px)',
            animation: isLoaded ? 'core-pulse 2s ease-in-out infinite' : 'none'
          }}
        />
      </div>

      {/* ========== CAMADA 5: CONTEÚDO (Content Layer) ========== */}
      <div className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="max-w-2xl">
          {/* Título principal com efeito de digitação */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-700 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span 
              className="block"
              style={{
                background: 'linear-gradient(90deg, hsl(200 90% 60%) 0%, hsl(280 80% 65%) 50%, hsl(320 80% 60%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px hsl(280 80% 60% / 0.5))',
              }}
            >
              Domine o seu
            </span>
            <span 
              className="block mt-2"
              style={{
                background: 'linear-gradient(90deg, hsl(280 80% 65%) 0%, hsl(320 80% 60%) 50%, hsl(30 90% 55%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 25px hsl(320 80% 55% / 0.6))',
                transitionDelay: '200ms'
              }}
            >
              mercado digital
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p 
            className={`text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg transition-all duration-700 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: '400ms',
              textShadow: '0 0 30px hsl(280 50% 50% / 0.3)'
            }}
          >
            Transformamos sua presença online em resultados reais com estratégias de marketing digital de alto impacto.
          </p>
          
          {/* Botão CTA */}
          <div 
            className={`transition-all duration-700 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button 
              className="relative px-8 py-4 text-lg font-bold rounded-xl overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, hsl(280 80% 55%) 0%, hsl(320 80% 55%) 50%, hsl(30 90% 50%) 100%)',
                boxShadow: '0 0 30px hsl(280 80% 55% / 0.5), 0 0 60px hsl(320 80% 55% / 0.3)',
              }}
            >
              <span className="relative z-10 text-white">Comece Agora</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(320 80% 60%) 0%, hsl(30 90% 55%) 50%, hsl(280 80% 60%) 100%)',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para transição suave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(240 20% 4%) 0%, transparent 100%)'
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        @keyframes neon-pulse-alt {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1) translateX(0);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08) translateX(-10px);
          }
        }
        
        @keyframes ray-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: rotate(var(--rotation, 0deg)) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) scaleX(1.15);
          }
        }
        
        @keyframes core-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            filter: blur(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            filter: blur(25px);
          }
        }
        
        @keyframes lightning-flicker {
          0%, 90%, 100% {
            opacity: 0.3;
          }
          5%, 10% {
            opacity: 0.8;
          }
          15% {
            opacity: 0.2;
          }
          20%, 25% {
            opacity: 0.6;
          }
        }
        
        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-15px) translateX(3px);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
