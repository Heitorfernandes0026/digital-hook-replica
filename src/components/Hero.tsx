import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-neon-lion.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) saturate(1.15) brightness(0.7)',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative orange wave elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Top left wave */}
        <div 
          className="absolute -top-20 -left-20 w-[600px] h-[400px] opacity-40"
          style={{
            background: 'linear-gradient(135deg, hsl(30 90% 50% / 0.6) 0%, transparent 60%)',
            borderRadius: '0 0 100% 0',
            filter: 'blur(40px)',
          }}
        />
        {/* Top right accent */}
        <div 
          className="absolute top-20 -right-10 w-[300px] h-[300px] opacity-30"
          style={{
            background: 'linear-gradient(225deg, hsl(30 90% 50% / 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* AGÊNCIA label */}
        <p 
          className={`text-sm md:text-base tracking-[0.4em] font-medium mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ color: 'hsl(175 80% 50%)' }}
        >
          AGÊNCIA
        </p>

        {/* Logo section */}
        <div 
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          {/* Play icon */}
          <div 
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
            style={{
              color: 'hsl(30 90% 50%)',
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="w-full h-full"
            >
              <polygon points="5 3 19 12 5 21 5 3" fill="none" />
            </svg>
          </div>

          {/* NEXT LEVEL text */}
          <div className="flex items-center">
            {/* NEXT box */}
            <div 
              className="px-4 py-2 md:px-6 md:py-3 rounded-l-md"
              style={{ 
                background: 'hsl(30 90% 50%)',
              }}
            >
              <span className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">
                NEXT
              </span>
            </div>
            {/* LEVEL box */}
            <div 
              className="px-4 py-2 md:px-6 md:py-3 rounded-r-md border-2"
              style={{ 
                background: 'black',
                borderColor: 'white',
              }}
            >
              <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                LEVEL
              </span>
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div 
          className={`w-64 md:w-80 h-1 mx-auto mb-8 rounded-full transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, hsl(175 80% 50%) 0%, hsl(320 80% 55%) 50%, hsl(30 90% 50%) 100%)',
          }}
        />

        {/* Tagline */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl font-medium mb-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span style={{ color: 'hsl(175 80% 50%)' }}>Sistemas</span>
          <span className="text-white/80 mx-2">•</span>
          <span style={{ color: 'hsl(320 80% 55%)' }}>Marketing</span>
          <span className="text-white/80 mx-2">&</span>
          <span className="text-white">Performance</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Primary button */}
          <a
            href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20contratar%20os%20serviços%20da%20NEXT%20LEVEL."
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'hsl(30 90% 50%)',
              color: 'black',
              boxShadow: '0 0 20px hsl(30 90% 50% / 0.4)',
            }}
          >
            Começar Agora
          </a>

          {/* Secondary button */}
          <a
            href="#services"
            className="group px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'hsl(30 90% 50%)',
              color: 'hsl(30 90% 50%)',
              background: 'transparent',
            }}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div 
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
            style={{ borderColor: 'hsl(175 80% 50%)' }}
          >
            <div 
              className="w-1.5 h-2.5 rounded-full animate-bounce"
              style={{ background: 'hsl(175 80% 50%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
