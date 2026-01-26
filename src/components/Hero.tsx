import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep rich black base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Cinematic ambient lighting */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 150%, hsl(20 60% 8%) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 120% 20%, hsl(25 70% 10%) 0%, transparent 50%),
            radial-gradient(ellipse 70% 70% at -20% 80%, hsl(270 30% 6%) 0%, transparent 50%)
          `,
        }}
      />

      {/* Main flowing wave - elegant curve from top-left */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-[250%] h-[120%] -left-[30%] -top-[10%]"
          viewBox="0 0 2400 1200" 
          preserveAspectRatio="none"
        >
          <defs>
            {/* Rich orange gradient with depth */}
            <linearGradient id="waveMain" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="hsl(35 85% 55%)" stopOpacity="0.05" />
              <stop offset="25%" stopColor="hsl(30 90% 50%)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(28 95% 48%)" stopOpacity="0.7" />
              <stop offset="75%" stopColor="hsl(25 90% 45%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(20 80% 40%)" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Secondary wave gradient */}
            <linearGradient id="waveSecondary" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="hsl(32 90% 52%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(30 92% 50%)" stopOpacity="0.35" />
              <stop offset="60%" stopColor="hsl(28 88% 48%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(25 85% 45%)" stopOpacity="0.15" />
            </linearGradient>

            {/* Soft glow filter */}
            <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="30" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Primary elegant wave - smooth bezier curves */}
          <path
            d="M-100,300 
               C300,150 500,400 900,200 
               C1300,0 1500,350 1900,150 
               C2200,0 2400,200 2500,100
               L2500,-100 L-100,-100 Z"
            fill="url(#waveMain)"
            filter="url(#softGlow)"
            className="animate-flow-1"
          />
          
          {/* Secondary wave layer */}
          <path
            d="M-100,450 
               C200,300 450,500 800,350 
               C1150,200 1400,450 1750,280 
               C2100,110 2300,350 2500,250
               L2500,0 L-100,0 Z"
            fill="url(#waveSecondary)"
            filter="url(#innerGlow)"
            className="animate-flow-2"
            style={{ opacity: 0.6 }}
          />
        </svg>
      </div>

      {/* Right side dramatic accent */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            <linearGradient id="rightAccent" x1="50%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(30 95% 50%)" stopOpacity="0" />
              <stop offset="60%" stopColor="hsl(28 90% 48%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(25 85% 45%)" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id="cornerGlow" cx="100%" cy="0%" r="60%">
              <stop offset="0%" stopColor="hsl(30 90% 50%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(30 90% 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Curved accent from right */}
          <path
            d="M1920,0 
               C1920,0 1800,150 1850,400 
               C1900,650 1750,800 1920,1080
               L1920,0 Z"
            fill="url(#rightAccent)"
            className="animate-flow-3"
          />
          
          {/* Corner glow */}
          <ellipse cx="1920" cy="0" rx="400" ry="300" fill="url(#cornerGlow)" />
        </svg>
      </div>

      {/* Atmospheric light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary light beam */}
        <div 
          className="absolute origin-top-right"
          style={{
            top: '-5%',
            right: '5%',
            width: '3px',
            height: '45%',
            background: 'linear-gradient(180deg, hsl(30 90% 55% / 0.7) 0%, hsl(30 90% 50% / 0.3) 50%, transparent 100%)',
            transform: 'rotate(20deg)',
            filter: 'blur(2px)',
          }}
        />
        {/* Secondary light beam */}
        <div 
          className="absolute origin-top-right"
          style={{
            top: '-3%',
            right: '12%',
            width: '2px',
            height: '35%',
            background: 'linear-gradient(180deg, hsl(32 88% 55% / 0.5) 0%, hsl(32 88% 50% / 0.2) 60%, transparent 100%)',
            transform: 'rotate(15deg)',
            filter: 'blur(1px)',
          }}
        />
        {/* Subtle third beam */}
        <div 
          className="absolute origin-top-right"
          style={{
            top: '-2%',
            right: '8%',
            width: '1px',
            height: '28%',
            background: 'linear-gradient(180deg, hsl(35 85% 60% / 0.4) 0%, transparent 80%)',
            transform: 'rotate(25deg)',
          }}
        />
      </div>

      {/* Accent color glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan accent top-center */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, hsl(175 70% 45% / 0.08) 0%, transparent 70%)',
          }}
        />
        
        {/* Magenta accent left */}
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 0% 50%, hsl(320 60% 40% / 0.06) 0%, transparent 60%)',
          }}
        />
        
        {/* Warm glow bottom */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px]"
          style={{
            background: 'radial-gradient(ellipse 80% 100% at 50% 100%, hsl(25 50% 10% / 0.5) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Elegant particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              background: i % 3 === 0 
                ? 'hsl(30 95% 60%)' 
                : i % 3 === 1 
                  ? 'hsl(175 75% 55%)'
                  : 'hsl(0 0% 95%)',
              opacity: 0.5 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, hsl(0 0% 0% / 0.4) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* AGÊNCIA label */}
        <p 
          className={`text-xs md:text-sm tracking-[0.5em] font-medium mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ 
            color: 'hsl(175 75% 55%)',
            textShadow: '0 0 30px hsl(175 75% 55% / 0.6)',
          }}
        >
          AGÊNCIA
        </p>

        {/* Logo section */}
        <div 
          className={`flex items-center justify-center gap-3 md:gap-5 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          {/* Play icon with glow */}
          <div 
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center"
            style={{
              color: 'hsl(30 95% 55%)',
              filter: 'drop-shadow(0 0 20px hsl(30 95% 55% / 0.7)) drop-shadow(0 0 40px hsl(30 95% 55% / 0.3))',
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

          {/* NEXT LEVEL logo */}
          <div className="flex items-center">
            {/* NEXT box */}
            <div 
              className="px-4 py-2 md:px-6 md:py-3 lg:px-7 lg:py-3.5"
              style={{ 
                background: 'linear-gradient(145deg, hsl(32 98% 55%) 0%, hsl(28 95% 50%) 50%, hsl(25 90% 45%) 100%)',
                boxShadow: `
                  0 0 50px hsl(30 95% 55% / 0.5),
                  0 0 100px hsl(30 90% 50% / 0.2),
                  0 10px 40px hsl(0 0% 0% / 0.5),
                  inset 0 1px 0 hsl(35 100% 70% / 0.3)
                `,
                borderRadius: '8px 0 0 8px',
              }}
            >
              <span 
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight"
                style={{ 
                  color: '#000',
                  textShadow: '0 1px 0 hsl(35 100% 70% / 0.3)',
                }}
              >
                NEXT
              </span>
            </div>
            {/* LEVEL box */}
            <div 
              className="px-4 py-2 md:px-6 md:py-3 lg:px-7 lg:py-3.5 border-2"
              style={{ 
                background: 'linear-gradient(145deg, hsl(0 0% 8%) 0%, hsl(0 0% 3%) 100%)',
                borderColor: 'hsl(0 0% 85%)',
                boxShadow: `
                  0 10px 40px hsl(0 0% 0% / 0.6),
                  inset 0 1px 0 hsl(0 0% 20%)
                `,
                borderRadius: '0 8px 8px 0',
              }}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">
                LEVEL
              </span>
            </div>
          </div>
        </div>

        {/* Gradient accent line */}
        <div 
          className={`relative w-48 md:w-64 lg:w-72 h-0.5 mx-auto mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(175 80% 50%) 0%, hsl(280 65% 55%) 30%, hsl(320 75% 55%) 60%, hsl(30 95% 55%) 100%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(175 80% 50%) 0%, hsl(280 65% 55%) 30%, hsl(320 75% 55%) 60%, hsl(30 95% 55%) 100%)',
              filter: 'blur(10px)',
              opacity: 0.8,
            }}
          />
        </div>

        {/* Tagline */}
        <p 
          className={`text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-12 transition-all duration-700 delay-400 tracking-wide ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span style={{ color: 'hsl(175 75% 55%)', textShadow: '0 0 25px hsl(175 75% 55% / 0.5)' }}>Sistemas</span>
          <span className="text-white/40 mx-3 md:mx-4">•</span>
          <span style={{ color: 'hsl(320 75% 60%)', textShadow: '0 0 25px hsl(320 75% 60% / 0.5)' }}>Marketing</span>
          <span className="text-white/40 mx-3 md:mx-4">&</span>
          <span className="text-white/90" style={{ textShadow: '0 0 15px hsl(0 0% 100% / 0.3)' }}>Performance</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Primary button */}
          <a
            href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20contratar%20os%20serviços%20da%20NEXT%20LEVEL."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, hsl(32 98% 55%) 0%, hsl(28 95% 48%) 100%)',
              color: '#000',
              boxShadow: `
                0 0 40px hsl(30 95% 55% / 0.5),
                0 0 80px hsl(30 90% 50% / 0.2),
                0 8px 25px hsl(0 0% 0% / 0.4)
              `,
            }}
          >
            <span className="relative z-10">Começar Agora</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(145deg, hsl(35 100% 58%) 0%, hsl(30 95% 52%) 100%)',
              }}
            />
          </a>

          {/* Secondary button */}
          <a
            href="#services"
            className="group px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'hsl(30 90% 55% / 0.6)',
              color: 'hsl(30 90% 55%)',
              background: 'hsl(30 90% 55% / 0.05)',
              boxShadow: '0 0 30px hsl(30 90% 55% / 0.1)',
            }}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-40 hover:opacity-70' : 'opacity-0'
        }`}
      >
        <div 
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1 transition-colors duration-300"
          style={{ borderColor: 'hsl(175 65% 50% / 0.6)' }}
        >
          <div 
            className="w-1 h-1.5 rounded-full animate-bounce"
            style={{ background: 'hsl(175 65% 50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
