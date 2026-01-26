import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(240,20%,4%)]">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(280 80% 50% / 0.4) 0%, hsl(320 80% 50% / 0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Top cyan glow */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, hsl(190 90% 50% / 0.5) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Bottom orange glow */}
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[300px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse, hsl(30 90% 50% / 0.4) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(280 80% 60% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(280 80% 60% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* NEXT text */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-[clamp(4rem,20vw,14rem)] font-black leading-[0.85] tracking-tighter select-none"
            style={{
              background: 'linear-gradient(135deg, hsl(190 90% 55%) 0%, hsl(217 91% 60%) 25%, hsl(280 80% 60%) 50%, hsl(320 80% 55%) 75%, hsl(30 90% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsl(280 80% 60% / 0.5)) drop-shadow(0 0 60px hsl(320 80% 55% / 0.3))',
            }}
          >
            NEXT
          </h1>
        </div>

        {/* LEVEL text */}
        <div 
          className={`transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-[clamp(4rem,20vw,14rem)] font-black leading-[0.85] tracking-tighter select-none -mt-2 md:-mt-4"
            style={{
              background: 'linear-gradient(135deg, hsl(30 90% 55%) 0%, hsl(320 80% 55%) 25%, hsl(280 80% 60%) 50%, hsl(217 91% 60%) 75%, hsl(190 90% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsl(320 80% 55% / 0.5)) drop-shadow(0 0 60px hsl(280 80% 60% / 0.3))',
            }}
          >
            LEVEL
          </h1>
        </div>

        {/* Tagline */}
        <p 
          className={`mt-8 text-lg md:text-xl text-muted-foreground max-w-md mx-auto transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Marketing Digital que Transforma Resultados
        </p>

        {/* CTA Button */}
        <div 
          className={`mt-10 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20contratar%20os%20serviços%20da%20NEXT%20LEVEL."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-background overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(320 80% 55%) 50%, hsl(280 80% 60%) 100%)',
              boxShadow: '0 0 30px hsl(30 90% 50% / 0.4), 0 0 60px hsl(320 80% 55% / 0.2)',
            }}
          >
            <span className="relative z-10">Começar Agora</span>
            <svg 
              className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(280 80% 60%) 0%, hsl(320 80% 55%) 50%, hsl(30 90% 50%) 100%)',
              }}
            />
          </a>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${[190, 217, 280, 320, 30][i % 5]} ${80 + Math.random() * 20}% ${50 + Math.random() * 20}%)`,
              boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <svg 
            className="w-5 h-5 text-muted-foreground" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
