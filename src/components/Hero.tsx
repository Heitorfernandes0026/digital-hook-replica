import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 80%, hsl(25 70% 12% / 0.5) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 80% 20%, hsl(280 30% 10% / 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 100% 100% at 50% 50%, hsl(0 0% 4%) 0%, hsl(0 0% 2%) 100%)
            `,
          }}
        />
        
        {/* Subtle ambient glow on right side */}
        <div 
          className="absolute top-1/2 right-0 w-[60%] h-[80%] -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(30 80% 50% / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
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
                  <span className="text-white">Leve seu negócio</span>
                  <br />
                  <span className="text-white">ao </span>
                  <span 
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    próximo nível
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
                    background: 'radial-gradient(ellipse at center, hsl(30 90% 50% / 0.25) 0%, transparent 70%)',
                    transform: 'scale(1.5)',
                  }}
                />
                
                {/* Logo Container */}
                <div 
                  className="relative flex flex-col items-center gap-6"
                >
                  {/* NEXT LEVEL Text with inline chevrons */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Left chevrons */}
                    <div 
                      className="flex items-center gap-0.5"
                      style={{
                        color: 'hsl(30 95% 55%)',
                        filter: 'drop-shadow(0 0 10px hsl(30 95% 55% / 0.5))',
                      }}
                    >
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 8 8 20 16 32" />
                      </svg>
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16 -ml-3 sm:-ml-4 lg:-ml-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 8 8 20 16 32" />
                      </svg>
                    </div>

                    {/* NEXT */}
                    <div 
                      className="px-5 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-xl"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(32 98% 54%) 0%, hsl(28 95% 48%) 100%)',
                        boxShadow: '0 8px 32px hsl(30 90% 50% / 0.4), 0 0 0 1px hsl(30 90% 50% / 0.2)',
                      }}
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black tracking-tight">NEXT</span>
                    </div>

                    {/* LEVEL */}
                    <div 
                      className="px-5 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-xl border-2"
                      style={{ 
                        background: 'hsl(0 0% 5%)',
                        borderColor: 'hsl(0 0% 70%)',
                      }}
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">LEVEL</span>
                    </div>

                    {/* Right chevrons */}
                    <div 
                      className="flex items-center gap-0.5"
                      style={{
                        color: 'hsl(30 95% 55%)',
                        filter: 'drop-shadow(0 0 10px hsl(30 95% 55% / 0.5))',
                      }}
                    >
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="8 8 16 20 8 32" />
                      </svg>
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16 -ml-3 sm:-ml-4 lg:-ml-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="8 8 16 20 8 32" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <p 
                    className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/40 font-medium"
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
