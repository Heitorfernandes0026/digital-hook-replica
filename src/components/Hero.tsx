import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Main elegant flowing waves from bottom-left */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Primary wave gradient - rich golden orange */}
            <linearGradient id="waveGold1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25 90% 35%)" stopOpacity="0.9" />
              <stop offset="30%" stopColor="hsl(28 95% 45%)" stopOpacity="0.7" />
              <stop offset="60%" stopColor="hsl(30 90% 50%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(35 85% 55%)" stopOpacity="0" />
            </linearGradient>
            
            {/* Secondary wave - deeper amber */}
            <linearGradient id="waveGold2" x1="0%" y1="100%" x2="80%" y2="20%">
              <stop offset="0%" stopColor="hsl(20 85% 30%)" stopOpacity="0.8" />
              <stop offset="40%" stopColor="hsl(25 90% 40%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(30 85% 45%)" stopOpacity="0" />
            </linearGradient>
            
            {/* Third wave - subtle accent */}
            <linearGradient id="waveGold3" x1="0%" y1="100%" x2="60%" y2="40%">
              <stop offset="0%" stopColor="hsl(28 95% 50%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(32 90% 48%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(35 85% 50%)" stopOpacity="0" />
            </linearGradient>

            {/* Purple accent gradient */}
            <linearGradient id="purpleAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(280 60% 25%)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(300 50% 20%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>

            {/* Soft glow filter */}
            <filter id="waveBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Background purple accent - right side */}
          <ellipse 
            cx="1800" 
            cy="200" 
            rx="600" 
            ry="400" 
            fill="url(#purpleAccent)"
            style={{ opacity: 0.6 }}
          />
          
          {/* Primary wave - large flowing curve from bottom-left */}
          <path
            d="M-100,1200 
               C100,1000 200,900 350,800
               C600,650 800,700 1000,550
               C1200,400 1400,500 1600,350
               C1800,200 1900,250 2100,150
               L2100,-100 L-100,-100 L-100,1200 Z"
            fill="url(#waveGold1)"
            filter="url(#waveBlur)"
          />
          
          {/* Secondary wave - medium curve */}
          <path
            d="M-100,1200 
               C50,1050 150,950 300,870
               C500,750 650,800 850,680
               C1050,560 1200,620 1400,500
               C1600,380 1750,420 1950,320
               L1950,1200 L-100,1200 Z"
            fill="url(#waveGold2)"
            style={{ opacity: 0.7 }}
          />
          
          {/* Tertiary wave - inner accent */}
          <path
            d="M-100,1200 
               C0,1100 100,1020 220,950
               C400,850 550,890 720,790
               C900,680 1020,730 1200,640
               C1400,540 1550,580 1750,500
               L1750,1200 L-100,1200 Z"
            fill="url(#waveGold3)"
            style={{ opacity: 0.5 }}
          />

          {/* Highlight line on wave edge */}
          <path
            d="M-50,1150 
               C100,980 250,880 450,750
               C700,580 900,650 1150,480
               C1400,310 1600,380 1850,220"
            fill="none"
            stroke="hsl(32 95% 55%)"
            strokeWidth="2"
            strokeOpacity="0.4"
            filter="url(#waveBlur)"
          />
        </svg>
      </div>

      {/* Ambient glow spots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom-left warm glow */}
        <div 
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 30% 70%, hsl(25 80% 25% / 0.4) 0%, transparent 60%)',
          }}
        />
        
        {/* Right side purple tint */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 100% 0%, hsl(280 50% 15% / 0.3) 0%, transparent 70%)',
          }}
        />
        
        {/* Center subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, hsl(30 50% 10% / 0.2) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, hsl(0 0% 0% / 0.5) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* AGÊNCIA label - Refined serif style */}
        <p 
          className={`text-base md:text-lg tracking-[0.5em] mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
          style={{ 
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 400,
            fontStyle: 'normal',
            color: 'hsl(175 85% 60%)',
            textShadow: '0 0 50px hsl(175 85% 60% / 0.8), 0 0 100px hsl(175 85% 60% / 0.4)',
            textTransform: 'uppercase',
          }}
        >
          Agência
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
          className={`relative w-48 md:w-64 lg:w-72 h-0.5 mx-auto mb-8 transition-all duration-700 delay-300 ${
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

        {/* Tagline - Elegant Serif Italic */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl mb-8 transition-all duration-700 delay-350 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '0.05em',
          }}
        >
          <span style={{ 
            color: 'hsl(175 85% 65%)', 
            textShadow: '0 0 35px hsl(175 85% 65% / 0.7), 0 0 70px hsl(175 85% 65% / 0.3)' 
          }}>Sistemas</span>
          <span className="text-white/25 mx-3 md:mx-4" style={{ fontStyle: 'normal' }}>•</span>
          <span style={{ 
            color: 'hsl(320 85% 68%)', 
            textShadow: '0 0 35px hsl(320 85% 68% / 0.7), 0 0 70px hsl(320 85% 68% / 0.3)' 
          }}>Marketing</span>
          <span className="text-white/25 mx-2 md:mx-3" style={{ fontStyle: 'normal' }}>&</span>
          <span style={{ 
            color: 'hsl(0 0% 98%)', 
            textShadow: '0 0 25px hsl(0 0% 100% / 0.5), 0 0 50px hsl(0 0% 100% / 0.2)' 
          }}>Performance</span>
        </p>

        {/* Slogan - Luxury Serif Typography */}
        <p 
          className={`text-xl md:text-2xl lg:text-3xl mb-14 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ 
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            color: 'hsl(30 20% 55%)',
            textTransform: 'uppercase',
            textShadow: '0 0 30px hsl(30 30% 50% / 0.3)',
          }}
        >
          O próximo passo para o seu sucesso.
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
