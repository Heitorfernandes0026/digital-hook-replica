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
              radial-gradient(ellipse 80% 50% at 0% 100%, hsl(25 80% 15% / 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 100% 0%, hsl(280 40% 12% / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 50% 50%, hsl(0 0% 5%) 0%, transparent 70%)
            `,
          }}
        />
        
        {/* Abstract flowing shape */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMinYMax slice"
          style={{ opacity: 0.9 }}
        >
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="100%" x2="70%" y2="30%">
              <stop offset="0%" stopColor="hsl(20 85% 25%)" />
              <stop offset="40%" stopColor="hsl(28 90% 40%)" />
              <stop offset="70%" stopColor="hsl(32 85% 45%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(35 80% 50%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="100%" x2="60%" y2="40%">
              <stop offset="0%" stopColor="hsl(18 80% 20%)" />
              <stop offset="50%" stopColor="hsl(25 85% 32%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(30 80% 40%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Main flowing curve */}
          <path
            d="M-200,900 Q200,750 400,680 T800,500 T1200,380 T1600,200 L1600,900 Z"
            fill="url(#flowGradient)"
          />
          <path
            d="M-200,900 Q150,800 350,740 T700,580 T1050,450 T1400,300 L1400,900 Z"
            fill="url(#flowGradient2)"
          />
        </svg>

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            
            {/* Centered Brand Badge */}
            <div 
              className={`mb-12 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              <div 
                className="flex flex-col items-center gap-4"
              >
                <div 
                  className="flex items-center gap-5 px-10 py-6 rounded-2xl"
                  style={{
                    background: 'hsl(0 0% 100% / 0.04)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid hsl(0 0% 100% / 0.08)',
                    boxShadow: '0 8px 32px hsl(30 90% 50% / 0.15)',
                  }}
                >
                  {/* Play icon */}
                  <div 
                    className="w-14 h-14 flex items-center justify-center"
                    style={{
                      color: 'hsl(30 95% 55%)',
                      filter: 'drop-shadow(0 0 20px hsl(30 95% 55% / 0.6))',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  
                  {/* NEXT LEVEL */}
                  <div className="flex items-center">
                    <div 
                      className="px-5 py-2.5 rounded-l-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(32 98% 54%) 0%, hsl(28 95% 48%) 100%)',
                        boxShadow: '0 4px 16px hsl(30 90% 50% / 0.4)',
                      }}
                    >
                      <span className="text-2xl sm:text-3xl font-black text-black tracking-tight">NEXT</span>
                    </div>
                    <div 
                      className="px-5 py-2.5 rounded-r-lg border-2"
                      style={{ 
                        background: 'hsl(0 0% 5%)',
                        borderColor: 'hsl(0 0% 80%)',
                      }}
                    >
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">LEVEL</span>
                    </div>
                  </div>
                </div>
                
                {/* Tagline under badge */}
                <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/40 font-medium">
                  Digital Agency
                </p>
              </div>
            </div>

            {/* Eyebrow / Label */}
            <div 
              className={`mb-6 transition-all duration-700 delay-100 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
                style={{
                  background: 'hsl(175 60% 40% / 0.12)',
                  color: 'hsl(175 70% 55%)',
                  border: '1px solid hsl(175 60% 40% / 0.2)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Agência Digital
              </span>
            </div>

            {/* Main Headline */}
            <div 
              className={`mb-6 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Leve seu negócio ao</span>
                <br />
                <span 
                  className="inline-block mt-2"
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
              className={`text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ fontWeight: 400 }}
            >
              Desenvolvemos <strong className="text-white/90 font-medium">sistemas</strong>, 
              estratégias de <strong className="text-white/90 font-medium">marketing</strong> e 
              soluções de <strong className="text-white/90 font-medium">performance</strong> que 
              transformam empresas.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap justify-center items-center gap-4 mb-16 transition-all duration-700 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="https://wa.me/5531975911116?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20NEXT%20LEVEL."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(30 95% 52%) 0%, hsl(25 90% 48%) 100%)',
                  color: '#000',
                  boxShadow: '0 4px 24px hsl(30 90% 50% / 0.35)',
                }}
              >
                Falar com especialista
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm text-white/80 transition-all duration-300 hover:text-white hover:bg-white/5"
              >
                Ver serviços
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div 
              className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-bold"
                      style={{ 
                        background: `linear-gradient(135deg, hsl(${20 + i * 15} 70% 45%) 0%, hsl(${25 + i * 15} 60% 35%) 100%)`,
                        color: 'white',
                      }}
                    >
                      {['J', 'M', 'R', 'A'][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">+50 clientes</p>
                  <p className="text-xs text-white/50">atendidos</p>
                </div>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4" fill="hsl(45 100% 55%)" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">5.0</p>
                  <p className="text-xs text-white/50">avaliação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
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
