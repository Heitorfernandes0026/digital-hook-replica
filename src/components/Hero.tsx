import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-lion-bg-new.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'right 35%',
      }}
      />
      
      {/* Subtle overlay for text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Main content - aligned to far left */}
      <div className="relative z-10 text-left pl-4 md:pl-6 lg:pl-8 w-full md:w-[55%] flex flex-col justify-center">
        {/* NEXT text */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-[clamp(4rem,20vw,14rem)] font-black leading-[0.85] tracking-tighter select-none"
            style={{
              background: 'linear-gradient(135deg, hsl(190 90% 55%) 0%, hsl(140 70% 50%) 25%, hsl(280 80% 60%) 50%, hsl(320 80% 55%) 75%, hsl(30 90% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsl(280 80% 60% / 0.6)) drop-shadow(0 0 60px hsl(320 80% 55% / 0.4))',
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
              background: 'linear-gradient(135deg, hsl(30 90% 55%) 0%, hsl(320 80% 55%) 25%, hsl(280 80% 60%) 50%, hsl(140 70% 50%) 75%, hsl(190 90% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsl(320 80% 55% / 0.6)) drop-shadow(0 0 60px hsl(280 80% 60% / 0.4))',
            }}
          >
            LEVEL
          </h1>
        </div>

        {/* Tagline */}
        <p 
          className={`mt-6 text-lg md:text-xl text-white/90 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Sistemas, Marketing e Desempenho.
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
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
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

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/80 uppercase tracking-widest">Scroll</span>
          <svg 
            className="w-5 h-5 text-white/80" 
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
