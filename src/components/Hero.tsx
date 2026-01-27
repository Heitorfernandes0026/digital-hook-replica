import { useEffect, useState } from "react";
import playLogo from "@/assets/play-logo.png";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0B0B0B' }}>
      
      {/* Background Elements - Premium Dark Tech */}
      <div className="absolute inset-0">
        {/* Base solid dark background */}
        <div className="absolute inset-0" style={{ background: '#0B0B0B' }} />

        {/* Subtle radial glow behind hero area - very low opacity */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%]"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(30 100% 50% / 0.06) 0%, transparent 70%)',
          }}
        />

        {/* Secondary orange accent glow - right side */}
        <div 
          className="absolute top-[30%] right-[5%] w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.04) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Subtle left accent */}
        <div 
          className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.03) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Clean vignette for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, #0B0B0B 100%)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              
              {/* Eyebrow / Label */}
              <div 
                className={`mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <span 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
                  style={{
                    background: 'hsl(30 70% 50% / 0.1)',
                    color: 'hsl(30 80% 60%)',
                    border: '1px solid hsl(30 60% 50% / 0.2)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  Agência Digital
                </span>
              </div>

              {/* Main Headline */}
              <div 
                className={`mb-6 transition-all duration-700 delay-100 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-white">Conquiste seu mercado com </span>
                  <span 
                    className="inline"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    sites e landing pages
                  </span>
                  <br />
                  <span className="text-white">de </span>
                  <span 
                    className="inline"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    alta conversão.
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p 
                className={`text-base sm:text-lg lg:text-xl text-white/55 max-w-lg mb-10 leading-relaxed transition-all duration-700 delay-200 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Desenvolvemos <strong className="text-white/85 font-medium">sistemas</strong>, 
                estratégias de <strong className="text-white/85 font-medium">marketing</strong> e 
                soluções de <strong className="text-white/85 font-medium">performance</strong> que 
                transformam empresas.
              </p>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <a
                  href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20NEXT%20LEVEL."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(30 95% 52%) 0%, hsl(25 90% 46%) 100%)',
                    color: '#000',
                    boxShadow: '0 4px 24px hsl(30 90% 50% / 0.3), 0 0 0 1px hsl(30 90% 50% / 0.1)',
                  }}
                >
                  Falar com especialista
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20"
                >
                  Ver serviços
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Visual Element (NEXT LEVEL Logo) */}
            <div 
              className={`flex items-center justify-center order-1 lg:order-2 transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                {/* Glow effect behind logo */}
                <div 
                  className="absolute inset-0 blur-3xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, hsl(30 90% 50% / 0.35) 0%, transparent 70%)',
                    transform: 'scale(2)',
                  }}
                />
                
                {/* Play Logo Container */}
                <div className="relative flex flex-col items-center gap-8">
                  {/* Play Logo Image */}
                  <img 
                    src={playLogo} 
                    alt="Next Level Play Logo" 
                    className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 40px hsl(30 90% 50% / 0.6)) drop-shadow(0 0 80px hsl(30 90% 50% / 0.3))',
                    }}
                  />
                  
                  {/* Tagline */}
                  <p 
                    className="text-sm sm:text-base tracking-[0.25em] uppercase font-bold"
                    style={{
                      background: 'linear-gradient(90deg, hsl(30 80% 60%) 0%, hsl(35 90% 70%) 50%, hsl(30 80% 60%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 30px hsl(30 90% 50% / 0.3)',
                    }}
                  >
                    O próximo passo do seu sucesso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
