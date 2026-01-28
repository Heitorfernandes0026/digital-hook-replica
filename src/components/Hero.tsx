import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Faster initial render - reduced delay for better LCP
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="hero-heading"
    >
      
      {/* Background Elements - Simplified for better performance (no filter:blur) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base solid dark background */}
        <div className="absolute inset-0" style={{ background: '#0B0B0B' }} />

        {/* Subtle radial glow - using opacity gradient instead of blur */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%]"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(142 90% 50% / 0.06) 0%, transparent 70%)',
          }}
        />

        {/* Secondary green accent - no blur filter */}
        <div 
          className="absolute top-[30%] right-[5%] w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, hsl(142 90% 50% / 0.08) 0%, hsl(142 90% 50% / 0.02) 40%, transparent 70%)',
          }}
        />

        {/* Left accent - no blur filter */}
        <div 
          className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(145 85% 45% / 0.06) 0%, hsl(145 85% 45% / 0.01) 40%, transparent 70%)',
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
                    background: 'hsl(142 70% 50% / 0.1)',
                    color: 'hsl(142 85% 65%)',
                    border: '1px solid hsl(142 60% 50% / 0.2)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                  Agência Digital
                </span>
              </div>

              {/* Main Headline - Priority LCP element */}
              <div 
                className={`mb-6 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h1 
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                >
                  <span className="text-white">Conquiste </span>
                  <span 
                    className="inline"
                    style={{
                      background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 50%, hsl(140 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    seu
                  </span>
                  <span className="text-white"> mercado com </span>
                  <span 
                    className="inline"
                    style={{
                      background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 50%, hsl(140 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    sites e landing pages
                  </span>
                  <span className="text-white"> de alta</span>
                  <br />
                  <span 
                    className="inline"
                    style={{
                      background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 50%, hsl(140 90% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    conversão.
                  </span>
                </h1>
              </div>

              {/* Subheadline - Improved contrast */}
              <p 
                className={`text-base sm:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed transition-all duration-700 delay-200 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ color: 'hsl(0 0% 70%)' }}
              >
                Desenvolvemos <strong className="text-white font-medium">sistemas</strong>, 
                estratégias de <strong className="text-white font-medium">marketing</strong> e 
                soluções de <strong className="text-white font-medium">performance</strong> que 
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
                    background: 'linear-gradient(135deg, hsl(142 95% 52%) 0%, hsl(145 90% 46%) 100%)',
                    color: '#000',
                    boxShadow: '0 4px 24px hsl(142 90% 50% / 0.3), 0 0 0 1px hsl(142 90% 50% / 0.1)',
                  }}
                  aria-label="Falar com especialista via WhatsApp"
                >
                  Falar com especialista
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-white/5 border border-white/20 hover:border-white/30"
                  style={{ color: 'hsl(0 0% 80%)' }}
                  aria-label="Ver nossos serviços"
                >
                  Ver serviços
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                    aria-hidden="true"
                  >
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
              aria-hidden="true"
            >
              <div className="relative">
                {/* Glow effect behind logo - no blur filter */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, hsl(142 90% 50% / 0.3) 0%, hsl(142 90% 50% / 0.1) 30%, transparent 60%)',
                    transform: 'scale(1.8)',
                  }}
                />
                
                {/* Logo Container */}
                <div className="relative flex flex-col items-center gap-6">
                  {/* Tagline - Above logo - Improved contrast */}
                  <p 
                    className="text-sm sm:text-base tracking-[0.25em] uppercase font-bold mb-6"
                    style={{
                      background: 'linear-gradient(90deg, hsl(142 85% 65%) 0%, hsl(145 90% 70%) 50%, hsl(142 85% 65%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    O próximo passo do seu sucesso começa agora
                  </p>

                  {/* NEXT LEVEL Text with inline chevrons */}
                  <div className="flex items-center gap-0">
                    {/* Left chevrons */}
                    <div 
                      className="flex items-center gap-0.5 animate-chevron-pulse"
                      style={{ color: 'hsl(142 95% 55%)' }}
                    >
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="16 8 8 20 16 32" />
                      </svg>
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16 -ml-3 sm:-ml-4 lg:-ml-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="16 8 8 20 16 32" />
                      </svg>
                    </div>

                    {/* NEXT */}
                    <div 
                      className="px-5 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-l-xl border-2"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(142 98% 54%) 0%, hsl(145 95% 48%) 100%)',
                        borderColor: 'hsl(0 0% 100%)',
                        boxShadow: '0 8px 32px hsl(142 90% 50% / 0.4)',
                      }}
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black tracking-tight">NEXT</span>
                    </div>

                    {/* LEVEL */}
                    <div 
                      className="px-5 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-r-xl border-2 -ml-px"
                      style={{ 
                        background: 'hsl(0 0% 5%)',
                        borderColor: 'hsl(0 0% 70%)',
                      }}
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">LEVEL</span>
                    </div>

                    {/* Right chevrons */}
                    <div 
                      className="flex items-center gap-0.5 animate-chevron-pulse"
                      style={{
                        color: 'hsl(142 95% 55%)',
                        animationDelay: '0.15s',
                      }}
                    >
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="8 8 16 20 8 32" />
                      </svg>
                      <svg className="w-6 h-10 sm:w-8 sm:h-14 lg:w-10 lg:h-16 -ml-3 sm:-ml-4 lg:-ml-5" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="8 8 16 20 8 32" />
                      </svg>
                    </div>
                  </div>

                  {/* Tagline below logo - Improved contrast */}
                  <p 
                    className="text-sm sm:text-base lg:text-lg tracking-[0.15em] uppercase font-medium mt-4"
                    style={{ color: 'hsl(0 0% 70%)' }}
                  >
                    Sistemas, Marketing & Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button - Accessible */}
      <a 
        href="#servicos"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 group cursor-pointer ${
          isVisible ? 'opacity-60 hover:opacity-100' : 'opacity-0'
        }`}
        aria-label="Rolar para a seção de serviços"
      >
        <div 
          className="w-10 h-14 rounded-full border-2 flex items-start justify-center pt-2 transition-colors duration-300"
          style={{ borderColor: 'hsl(0 0% 40%)' }}
        >
          <div 
            className="w-1.5 h-3 rounded-full animate-bounce"
            style={{ 
              background: 'hsl(142 95% 55%)',
              animationDuration: '1.5s' 
            }}
            aria-hidden="true"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;