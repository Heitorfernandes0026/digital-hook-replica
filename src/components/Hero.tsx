import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Sophisticated gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              #000000 0%, 
              #0a0502 25%,
              #080808 50%,
              #050505 75%,
              #000000 100%
            )
          `,
        }}
      />

      {/* Main wave - Top left flowing curve */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 0% 0%, 
              hsla(28, 90%, 45%, 0.4) 0%, 
              hsla(28, 85%, 40%, 0.2) 30%,
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Smooth wave overlay - creates the flowing effect */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c97a30" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#b86d28" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#a56020" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5018" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#d4864a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#c07838" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a86828" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="rightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c97a30" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#e88c3a" stopOpacity="0.35" />
          </linearGradient>

          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Primary wave - elegant S-curve from top-left */}
        <path
          d="M-50,0 
             L400,0 
             C500,0 550,100 500,200 
             C450,300 550,400 650,350 
             C750,300 800,400 750,500
             C700,600 600,650 500,600
             C400,550 300,600 200,700
             L-50,900 Z"
          fill="url(#wave1)"
          filter="url(#blur1)"
        />
        
        {/* Secondary softer wave */}
        <path
          d="M-50,0 
             L300,0 
             C400,50 450,150 400,250 
             C350,350 400,450 500,400 
             C600,350 650,450 600,550
             L-50,800 Z"
          fill="url(#wave2)"
          style={{ opacity: 0.7 }}
        />

        {/* Right side accent */}
        <path
          d="M1440,0 
             L1440,900 
             L1200,900
             C1300,750 1250,600 1350,450
             C1450,300 1350,150 1440,0 Z"
          fill="url(#rightGlow)"
        />
        
        {/* Top-right corner glow */}
        <ellipse 
          cx="1400" 
          cy="80" 
          rx="250" 
          ry="180" 
          fill="#d4864a" 
          opacity="0.12"
          filter="url(#blur1)"
        />
      </svg>

      {/* Subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom dark gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
        
        {/* Diagonal dark shape - bottom left */}
        <div 
          className="absolute bottom-0 left-0 w-2/3 h-1/2"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.6) 100%)',
            clipPath: 'polygon(0 100%, 0 30%, 100% 100%)',
          }}
        />
      </div>

      {/* Ambient light spots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan subtle accent - top */}
        <div 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Floating particles - minimal and elegant */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${2 + i * 0.3}px`,
              height: `${2 + i * 0.3}px`,
              left: `${20 + i * 10}%`,
              top: `${25 + (i % 3) * 20}%`,
              background: i % 2 === 0 ? '#e8943a' : '#ffffff',
              opacity: 0.4,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
              boxShadow: i % 2 === 0 
                ? '0 0 10px #e8943a' 
                : '0 0 8px rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* AGÊNCIA label */}
        <p 
          className={`text-xs md:text-sm tracking-[0.5em] font-light mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ 
            color: '#2dd4bf',
            textShadow: '0 0 40px rgba(45, 212, 191, 0.5)',
            letterSpacing: '0.5em',
          }}
        >
          AGÊNCIA
        </p>

        {/* Logo section */}
        <div 
          className={`flex items-center justify-center gap-4 md:gap-6 mb-8 transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          {/* Play icon */}
          <div 
            className="w-12 h-12 md:w-16 md:h-16"
            style={{
              color: '#e8943a',
              filter: 'drop-shadow(0 0 25px rgba(232, 148, 58, 0.6))',
            }}
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <path 
                d="M12 8 L40 24 L12 40 Z" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* NEXT LEVEL */}
          <div className="flex items-stretch">
            <div 
              className="px-5 py-2.5 md:px-8 md:py-4 flex items-center"
              style={{ 
                background: 'linear-gradient(145deg, #e8943a 0%, #d4802e 100%)',
                borderRadius: '8px 0 0 8px',
                boxShadow: '0 0 60px rgba(232, 148, 58, 0.4), 0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <span 
                className="text-3xl md:text-5xl lg:text-6xl font-black text-black"
                style={{ letterSpacing: '-0.02em' }}
              >
                NEXT
              </span>
            </div>
            <div 
              className="px-5 py-2.5 md:px-8 md:py-4 flex items-center border-2 border-white/90"
              style={{ 
                background: '#000',
                borderRadius: '0 8px 8px 0',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <span 
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                LEVEL
              </span>
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div 
          className={`mx-auto mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 w-56 md:w-72' : 'opacity-0 w-0'
          }`}
        >
          <div 
            className="h-[3px] rounded-full mx-auto"
            style={{
              background: 'linear-gradient(90deg, #2dd4bf 0%, #a855f7 40%, #ec4899 70%, #e8943a 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            }}
          />
        </div>

        {/* Tagline */}
        <p 
          className={`text-base md:text-lg lg:text-xl font-normal mb-14 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ letterSpacing: '0.05em' }}
        >
          <span style={{ color: '#2dd4bf' }}>Sistemas</span>
          <span className="text-white/30 mx-4">•</span>
          <span style={{ color: '#ec4899' }}>Marketing</span>
          <span className="text-white/30 mx-4">&</span>
          <span className="text-white/90">Performance</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20contratar%20os%20serviços%20da%20NEXT%20LEVEL."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #e8943a 0%, #d4802e 100%)',
              color: '#000',
              boxShadow: '0 0 50px rgba(232, 148, 58, 0.4), 0 10px 30px rgba(0,0,0,0.4)',
            }}
          >
            Começar Agora
          </a>

          <a
            href="#services"
            className="px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white/5"
            style={{
              border: '1.5px solid rgba(232, 148, 58, 0.5)',
              color: '#e8943a',
            }}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div 
          className="w-5 h-8 rounded-full border border-teal-400/50 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-teal-400/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
