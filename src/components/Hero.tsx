import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 120%, hsl(20 80% 8%) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 0%, hsl(25 70% 12%) 0%, transparent 40%),
            radial-gradient(ellipse 50% 50% at 0% 100%, hsl(280 50% 8%) 0%, transparent 45%),
            linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #080808 100%)
          `,
        }}
      />

      {/* Animated flowing waves - Layer 1 (back) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        style={{ filter: 'blur(1px)' }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25 90% 45%)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(30 85% 50%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(35 80% 40%)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(30 90% 55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(20 85% 35%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(175 80% 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(280 70% 55%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(320 75% 50%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Main flowing wave - top left */}
        <path
          d="M-100,200 Q200,100 400,180 T800,120 T1200,200 T1600,100 T2000,180 L2000,-100 L-100,-100 Z"
          fill="url(#waveGradient1)"
          className="animate-flow-1"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* Secondary wave - flows from top */}
        <path
          d="M-100,350 Q300,250 600,320 T1100,280 T1500,350 T1900,280 L2000,0 L-100,0 Z"
          fill="url(#waveGradient2)"
          className="animate-flow-2"
          style={{ transformOrigin: 'center', opacity: 0.5 }}
        />
      </svg>

      {/* Flowing accent wave - right side */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="rightWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="hsl(30 90% 50%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(25 85% 45%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M1920,200 Q1700,400 1800,600 T1700,900 T1920,1100 L1920,0 Z"
          fill="url(#rightWaveGrad)"
          className="animate-flow-3"
        />
        {/* Orange glow accent */}
        <ellipse
          cx="1850"
          cy="150"
          rx="200"
          ry="150"
          fill="hsl(30 90% 50%)"
          opacity="0.15"
          style={{ filter: 'blur(60px)' }}
        />
      </svg>

      {/* Geometric diamond shapes - subtle tech feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bottom left geometric */}
        <div 
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, hsl(220 30% 15%) 50%, transparent 60%)',
            transform: 'rotate(45deg)',
          }}
        />
        {/* Center bottom geometric accent */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-15"
          style={{
            background: 'linear-gradient(0deg, hsl(280 40% 12%) 0%, transparent 80%)',
            clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
          }}
        />
      </div>

      {/* Subtle grid overlay for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Ambient light glow spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top center glow */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, hsl(175 70% 50%) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Right orange glow */}
        <div 
          className="absolute top-1/4 -right-20 w-[400px] h-[600px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse, hsl(30 90% 50%) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Left purple subtle glow */}
        <div 
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 70% 50%) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(30 90% 60%)' 
                : i % 3 === 1 
                  ? 'hsl(175 80% 60%)' 
                  : 'hsl(280 70% 60%)',
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              boxShadow: `0 0 ${6 + Math.random() * 6}px currentColor`,
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
              filter: 'drop-shadow(0 0 10px hsl(30 90% 50% / 0.5))',
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
                boxShadow: '0 0 30px hsl(30 90% 50% / 0.4), 0 4px 20px hsl(0 0% 0% / 0.3)',
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
                background: 'rgba(0,0,0,0.8)',
                borderColor: 'white',
                boxShadow: '0 4px 20px hsl(0 0% 0% / 0.4)',
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
            boxShadow: '0 0 20px hsl(320 80% 55% / 0.5)',
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
            className="group px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(35 85% 45%) 100%)',
              color: 'black',
              boxShadow: '0 0 30px hsl(30 90% 50% / 0.5), 0 4px 15px hsl(0 0% 0% / 0.3)',
            }}
          >
            Começar Agora
          </a>

          {/* Secondary button */}
          <a
            href="#services"
            className="group px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105 hover:bg-white/5"
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
