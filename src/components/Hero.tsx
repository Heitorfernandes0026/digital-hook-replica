import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Elegant flowing waves from bottom-left */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGold1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25 90% 35%)" stopOpacity="0.95" />
              <stop offset="35%" stopColor="hsl(28 95% 45%)" stopOpacity="0.6" />
              <stop offset="70%" stopColor="hsl(30 90% 50%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(35 85% 55%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="waveGold2" x1="0%" y1="100%" x2="80%" y2="20%">
              <stop offset="0%" stopColor="hsl(20 85% 28%)" stopOpacity="0.9" />
              <stop offset="45%" stopColor="hsl(25 90% 38%)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(30 85% 45%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="waveGold3" x1="0%" y1="100%" x2="60%" y2="40%">
              <stop offset="0%" stopColor="hsl(28 95% 48%)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="hsl(32 90% 45%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(35 85% 50%)" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="purpleAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(280 55% 22%)" stopOpacity="0.45" />
              <stop offset="50%" stopColor="hsl(295 45% 18%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>

            <filter id="waveBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="25" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Purple accent - right side */}
          <ellipse cx="1850" cy="180" rx="550" ry="380" fill="url(#purpleAccent)" style={{ opacity: 0.5 }} />
          
          {/* Primary wave */}
          <path
            d="M-100,1200 C100,980 220,880 380,780 C620,630 820,700 1020,540 C1220,380 1420,480 1620,330 C1820,180 1920,230 2100,120 L2100,-100 L-100,-100 Z"
            fill="url(#waveGold1)"
            filter="url(#waveBlur)"
          />
          
          {/* Secondary wave */}
          <path
            d="M-100,1200 C40,1030 160,930 320,850 C520,730 670,790 870,660 C1070,530 1220,600 1420,480 C1620,360 1770,400 1970,300 L1970,1200 Z"
            fill="url(#waveGold2)"
            style={{ opacity: 0.75 }}
          />
          
          {/* Tertiary wave */}
          <path
            d="M-100,1200 C-10,1080 110,1000 240,920 C420,820 570,870 740,770 C920,660 1040,710 1220,620 C1420,520 1570,560 1770,480 L1770,1200 Z"
            fill="url(#waveGold3)"
            style={{ opacity: 0.55 }}
          />

          {/* Accent line */}
          <path
            d="M-60,1120 C90,960 240,860 460,720 C720,550 920,630 1170,450 C1420,280 1620,360 1870,190"
            fill="none"
            stroke="hsl(32 95% 52%)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            filter="url(#waveBlur)"
          />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -bottom-32 -left-32 w-[700px] h-[700px]"
          style={{ background: 'radial-gradient(ellipse 100% 100% at 25% 75%, hsl(25 75% 22% / 0.35) 0%, transparent 55%)' }}
        />
        <div 
          className="absolute top-0 right-0 w-[450px] h-[550px]"
          style={{ background: 'radial-gradient(ellipse 100% 100% at 100% 0%, hsl(280 45% 14% / 0.25) 0%, transparent 65%)' }}
        />
      </div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, hsl(0 0% 0% / 0.55) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* AGÊNCIA */}
        <div className={`mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span 
            className="text-xs sm:text-sm tracking-[0.5em] uppercase"
            style={{ 
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 500,
              color: 'hsl(175 85% 50%)',
              textShadow: '0 0 35px hsl(175 85% 50% / 0.7)',
            }}
          >
            Agência
          </span>
        </div>

        {/* NEXT LEVEL Logo */}
        <div className={`flex items-center justify-center gap-2.5 md:gap-4 mb-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          {/* Play icon */}
          <div 
            className="w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 flex items-center justify-center"
            style={{
              color: 'hsl(30 95% 52%)',
              filter: 'drop-shadow(0 0 18px hsl(30 95% 52% / 0.75)) drop-shadow(0 0 35px hsl(30 95% 52% / 0.35))',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>

          {/* NEXT LEVEL boxes */}
          <div className="flex items-center">
            <div 
              className="px-3.5 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3"
              style={{ 
                background: 'linear-gradient(135deg, hsl(32 98% 54%) 0%, hsl(28 95% 48%) 100%)',
                boxShadow: '0 0 45px hsl(30 95% 52% / 0.55), 0 8px 30px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(40 100% 70% / 0.25)',
                borderRadius: '6px 0 0 6px',
              }}
            >
              <span 
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight"
                style={{ color: '#000', fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                NEXT
              </span>
            </div>
            <div 
              className="px-3.5 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 border-2"
              style={{ 
                background: 'linear-gradient(135deg, hsl(0 0% 7%) 0%, hsl(0 0% 2%) 100%)',
                borderColor: 'hsl(0 0% 80%)',
                boxShadow: '0 8px 30px hsl(0 0% 0% / 0.55), inset 0 1px 0 hsl(0 0% 18%)',
                borderRadius: '0 6px 6px 0',
              }}
            >
              <span 
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                LEVEL
              </span>
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div className={`relative w-40 md:w-56 lg:w-64 h-[3px] mx-auto mb-7 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(90deg, hsl(175 80% 48%) 0%, hsl(270 60% 55%) 40%, hsl(320 70% 55%) 70%, hsl(30 95% 52%) 100%)' }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(90deg, hsl(175 80% 48%) 0%, hsl(270 60% 55%) 40%, hsl(320 70% 55%) 70%, hsl(30 95% 52%) 100%)', filter: 'blur(8px)', opacity: 0.7 }}
          />
        </div>

        {/* Tagline */}
        <div className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm md:text-base lg:text-lg" style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontWeight: 400 }}>
            <span style={{ color: 'hsl(175 80% 50%)', textShadow: '0 0 25px hsl(175 80% 50% / 0.55)' }}>Sistemas</span>
            <span className="text-white/25 mx-2.5">•</span>
            <span style={{ color: 'hsl(320 75% 58%)', textShadow: '0 0 25px hsl(320 75% 58% / 0.55)' }}>Marketing</span>
            <span className="text-white/25 mx-2">&</span>
            <span className="text-white/85">Performance</span>
          </p>
        </div>

        {/* Slogan */}
        <div className={`mb-10 transition-all duration-700 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p 
            className="text-sm md:text-base tracking-[0.22em] uppercase"
            style={{ 
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 300,
              color: 'hsl(30 15% 50%)',
            }}
          >
            O próximo passo para o seu sucesso.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20contratar%20os%20serviços%20da%20NEXT%20LEVEL."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(32 98% 52%) 0%, hsl(28 95% 46%) 100%)',
              color: '#000',
              boxShadow: '0 0 35px hsl(30 95% 52% / 0.5), 0 6px 20px hsl(0 0% 0% / 0.4)',
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <span className="relative z-10">Começar Agora</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, hsl(35 100% 56%) 0%, hsl(30 95% 50%) 100%)' }}
            />
          </a>

          <a
            href="#servicos"
            className="px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:scale-[1.03] hover:bg-white/5"
            style={{
              borderColor: 'hsl(30 85% 52% / 0.5)',
              color: 'hsl(30 85% 55%)',
              background: 'transparent',
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-35 hover:opacity-60' : 'opacity-0'}`}>
        <div 
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1.5"
          style={{ borderColor: 'hsl(175 60% 45% / 0.5)' }}
        >
          <div 
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: 'hsl(175 60% 50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
