import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Primary ambient gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% 140%, hsl(25 70% 12%) 0%, transparent 50%),
            radial-gradient(ellipse 80% 80% at 110% -20%, hsl(28 80% 15%) 0%, transparent 45%),
            radial-gradient(ellipse 60% 60% at -10% 110%, hsl(280 40% 10%) 0%, transparent 50%)
          `,
        }}
      />

      {/* Smooth flowing wave - Main Orange Wave */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-[200%] h-full -left-1/4"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="none"
          style={{ opacity: 0.85 }}
        >
          <defs>
            <linearGradient id="mainWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(30 85% 45%)" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(28 90% 48%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(25 95% 50%)" stopOpacity="0.8" />
              <stop offset="80%" stopColor="hsl(30 90% 45%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(35 80% 40%)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Elegant curved wave */}
          <path
            d="M-200,250 
               C200,180 400,320 700,200 
               S1000,350 1300,180 
               S1600,300 1920,220
               L1920,-50 L-200,-50 Z"
            fill="url(#mainWaveGrad)"
            filter="url(#glow1)"
            className="animate-flow-1"
          />
        </svg>
      </div>

      {/* Secondary flowing ribbon */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.6 }}
        >
          <defs>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="hsl(32 90% 55%)" stopOpacity="0.1" />
              <stop offset="30%" stopColor="hsl(28 85% 50%)" stopOpacity="0.5" />
              <stop offset="70%" stopColor="hsl(25 90% 45%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(20 80% 40%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <path
            d="M1920,400 
               Q1700,200 1500,350 
               T1100,250 
               T700,400 
               T300,280 
               T-100,380
               L-100,500 
               Q200,350 500,480 
               T900,380 
               T1300,500 
               T1700,380 
               T1920,480 Z"
            fill="url(#ribbonGrad)"
            className="animate-flow-2"
          />
        </svg>
      </div>

      {/* Right side accent glow */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: `
            radial-gradient(ellipse 80% 120% at 100% 30%, hsl(28 90% 50% / 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 90% 70%, hsl(30 85% 45% / 0.15) 0%, transparent 40%)
          `,
        }}
      />

      {/* Cyan accent - top */}
      <div 
        className="absolute -top-20 left-1/4 w-[600px] h-[300px]"
        style={{
          background: 'radial-gradient(ellipse, hsl(175 70% 50% / 0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Purple accent - left side */}
      <div 
        className="absolute top-1/2 -left-20 w-[400px] h-[600px] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse, hsl(280 60% 45% / 0.08) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle light streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div 
          className="absolute top-[15%] right-[5%] w-[2px] h-[300px]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(30 90% 55% / 0.8) 30%, hsl(30 90% 55% / 0.8) 70%, transparent 100%)',
            transform: 'rotate(25deg)',
            filter: 'blur(1px)',
          }}
        />
        <div 
          className="absolute top-[10%] right-[12%] w-[1px] h-[200px]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, hsl(35 85% 50% / 0.6) 40%, hsl(35 85% 50% / 0.6) 60%, transparent 100%)',
            transform: 'rotate(20deg)',
            filter: 'blur(1px)',
          }}
        />
      </div>

      {/* Geometric shapes - premium feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diamond shape bottom left */}
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px]"
          style={{
            background: 'linear-gradient(135deg, hsl(220 20% 8%) 0%, transparent 60%)',
            transform: 'rotate(45deg)',
            opacity: 0.6,
          }}
        />
        {/* Triangle accent center-bottom */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px]"
          style={{
            background: 'linear-gradient(0deg, hsl(0 0% 3%) 0%, transparent 100%)',
            clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
            opacity: 0.8,
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background: i % 4 === 0 
                ? 'hsl(30 90% 60%)' 
                : i % 4 === 1 
                  ? 'hsl(175 80% 55%)' 
                  : i % 4 === 2
                    ? 'hsl(280 70% 60%)'
                    : 'hsl(0 0% 100%)',
              opacity: 0.4 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              boxShadow: `0 0 ${8 + Math.random() * 8}px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* AGÊNCIA label */}
        <p 
          className={`text-sm md:text-base tracking-[0.4em] font-medium mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ 
            color: 'hsl(175 80% 50%)',
            textShadow: '0 0 20px hsl(175 80% 50% / 0.5)',
          }}
        >
          AGÊNCIA
        </p>

        {/* Logo section */}
        <div 
          className={`flex items-center justify-center gap-3 md:gap-4 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          {/* Play icon */}
          <div 
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center"
            style={{
              color: 'hsl(30 90% 50%)',
              filter: 'drop-shadow(0 0 15px hsl(30 90% 50% / 0.6))',
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="w-full h-full"
            >
              <polygon points="5 3 19 12 5 21 5 3" fill="none" />
            </svg>
          </div>

          {/* NEXT LEVEL text */}
          <div className="flex items-center shadow-2xl">
            {/* NEXT box */}
            <div 
              className="px-3 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3"
              style={{ 
                background: 'linear-gradient(135deg, hsl(32 95% 52%) 0%, hsl(28 90% 48%) 100%)',
                boxShadow: '0 0 40px hsl(30 90% 50% / 0.5), 0 8px 30px hsl(0 0% 0% / 0.4)',
                borderRadius: '6px 0 0 6px',
              }}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black tracking-tight">
                NEXT
              </span>
            </div>
            {/* LEVEL box */}
            <div 
              className="px-3 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 border-2"
              style={{ 
                background: 'linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(0 0% 2%) 100%)',
                borderColor: 'hsl(0 0% 90%)',
                boxShadow: '0 8px 30px hsl(0 0% 0% / 0.5)',
                borderRadius: '0 6px 6px 0',
              }}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">
                LEVEL
              </span>
            </div>
          </div>
        </div>

        {/* Gradient line with glow */}
        <div 
          className={`relative w-56 md:w-72 lg:w-80 h-1 mx-auto mb-8 rounded-full transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, hsl(175 80% 50%) 0%, hsl(280 70% 55%) 35%, hsl(320 80% 55%) 65%, hsl(30 90% 50%) 100%)',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'inherit',
              filter: 'blur(8px)',
              opacity: 0.7,
            }}
          />
        </div>

        {/* Tagline */}
        <p 
          className={`text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span style={{ color: 'hsl(175 80% 50%)', textShadow: '0 0 15px hsl(175 80% 50% / 0.4)' }}>Sistemas</span>
          <span className="text-white/60 mx-2 md:mx-3">•</span>
          <span style={{ color: 'hsl(320 80% 55%)', textShadow: '0 0 15px hsl(320 80% 55% / 0.4)' }}>Marketing</span>
          <span className="text-white/60 mx-2 md:mx-3">&</span>
          <span className="text-white" style={{ textShadow: '0 0 10px hsl(0 0% 100% / 0.3)' }}>Performance</span>
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
            className="group relative px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(32 95% 52%) 0%, hsl(28 90% 45%) 100%)',
              color: 'black',
              boxShadow: '0 0 35px hsl(30 90% 50% / 0.5), 0 6px 20px hsl(0 0% 0% / 0.4)',
            }}
          >
            <span className="relative z-10">Começar Agora</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(35 95% 55%) 0%, hsl(30 90% 50%) 100%)',
              }}
            />
          </a>

          {/* Secondary button */}
          <a
            href="#services"
            className="group px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'hsl(30 90% 50%)',
              color: 'hsl(30 90% 50%)',
              background: 'hsl(30 90% 50% / 0.05)',
              boxShadow: '0 0 20px hsl(30 90% 50% / 0.15)',
            }}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-50 hover:opacity-80' : 'opacity-0'
        }`}
      >
        <div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5 transition-colors duration-300"
          style={{ borderColor: 'hsl(175 70% 50%)' }}
        >
          <div 
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: 'hsl(175 70% 50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
