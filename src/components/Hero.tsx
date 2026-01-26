import { useEffect, useState } from "react";
import lionLogo from "@/assets/lion-logo.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* LAYER 1: Background Layer - Deep black with subtle gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 80% 50%, hsl(280 40% 8%) 0%, hsl(240 20% 4%) 40%, hsl(0 0% 0%) 70%)',
          }}
        />
      </div>

      {/* LAYER 2: Atmosphere Layer - Storm and distant lightning */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Distant storm clouds */}
        <div 
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 70% 20%, hsl(280 50% 15% / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 30% 30%, hsl(240 40% 12% / 0.3) 0%, transparent 40%),
              radial-gradient(ellipse 60% 40% at 90% 60%, hsl(260 45% 10% / 0.35) 0%, transparent 45%)
            `,
          }}
        />

        {/* Animated lightning bolts */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className="absolute opacity-0"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 15}%`,
              width: '2px',
              height: `${60 + Math.random() * 100}px`,
              background: 'linear-gradient(180deg, hsl(280 80% 70% / 0.8), hsl(260 70% 60% / 0.4), transparent)',
              filter: 'blur(1px)',
              transform: `rotate(${-10 + i * 5}deg)`,
              animation: `lightning-flash ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Ambient glow spots */}
        <div 
          className={`absolute w-[600px] h-[400px] rounded-full transition-all duration-[3000ms] ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
          style={{
            top: '10%',
            right: '5%',
            background: 'radial-gradient(ellipse, hsl(280 60% 30% / 0.3) 0%, transparent 60%)',
            filter: 'blur(60px)',
            animation: 'atmosphere-pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* LAYER 3: Character Layer - Lion positioned right */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div 
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] transition-all duration-[1500ms] ease-out ${
            isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
          }`}
        >
          <img 
            src={lionLogo}
            alt="Next Level Lion"
            className="w-full h-full object-contain object-right"
            style={{
              filter: 'brightness(1.1) contrast(1.05)',
            }}
          />
        </div>
      </div>

      {/* LAYER 4: Neon Glow Layer - CSS-based glows (CRUCIAL for animation) */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {/* Primary neon aura around lion area */}
        <div 
          className={`absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full transition-all duration-[2000ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(ellipse, hsl(280 80% 50% / 0.25) 0%, hsl(260 70% 40% / 0.15) 30%, transparent 60%)',
            filter: 'blur(40px)',
            animation: 'neon-pulse 3s ease-in-out infinite',
          }}
        />

        {/* Secondary cyan/blue glow accent */}
        <div 
          className={`absolute right-[15%] top-[30%] w-[300px] h-[400px] rounded-full transition-all duration-[2500ms] ${
            isLoaded ? 'opacity-80' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(ellipse, hsl(190 90% 50% / 0.2) 0%, transparent 50%)',
            filter: 'blur(50px)',
            animation: 'neon-pulse-alt 4s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />

        {/* Pink/magenta accent glow */}
        <div 
          className={`absolute right-[5%] bottom-[20%] w-[350px] h-[300px] rounded-full transition-all duration-[2500ms] ${
            isLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(ellipse, hsl(320 80% 55% / 0.2) 0%, transparent 50%)',
            filter: 'blur(45px)',
            animation: 'neon-pulse 3.5s ease-in-out infinite',
            animationDelay: '0.5s',
          }}
        />

        {/* Intense core glow behind lion head */}
        <div 
          className={`absolute right-[18%] top-[25%] w-[250px] h-[300px] rounded-full transition-all duration-[1800ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, hsl(270 90% 60% / 0.4) 0%, hsl(280 80% 50% / 0.2) 40%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'neon-intense-pulse 2.5s ease-in-out infinite',
          }}
        />

        {/* Animated neon rays emanating from behind */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className={`absolute right-[25%] top-[40%] origin-right transition-all ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: isLoaded ? `${100 + i * 20}px` : '0px',
              height: '3px',
              transform: `rotate(${i * 45}deg)`,
              background: `linear-gradient(90deg, ${
                i % 3 === 0 ? 'hsl(190 90% 60% / 0.6)' : 
                i % 3 === 1 ? 'hsl(280 80% 60% / 0.6)' : 
                'hsl(320 80% 55% / 0.6)'
              } 0%, transparent 100%)`,
              filter: `drop-shadow(0 0 8px ${
                i % 3 === 0 ? 'hsl(190 90% 60% / 0.8)' : 
                i % 3 === 1 ? 'hsl(280 80% 60% / 0.8)' : 
                'hsl(320 80% 55% / 0.8)'
              })`,
              transitionDuration: `${800 + i * 100}ms`,
              transitionDelay: `${300 + i * 80}ms`,
              animation: `ray-pulse ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* LAYER 5: Content Layer - Text and CTA */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          {/* Headline with typing effect potential */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span 
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(280 40% 90%) 50%, hsl(190 60% 80%) 100%)',
                textShadow: '0 0 40px hsl(280 80% 60% / 0.3)',
              }}
            >
              Domine o seu
            </span>
            <span 
              className="block text-transparent bg-clip-text mt-2"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(280 80% 65%) 0%, hsl(320 80% 60%) 50%, hsl(30 90% 55%) 100%)',
                textShadow: '0 0 60px hsl(280 80% 60% / 0.5), 0 0 100px hsl(320 80% 55% / 0.3)',
                filter: 'drop-shadow(0 0 20px hsl(280 80% 60% / 0.4))',
              }}
            >
              mercado digital
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-lg transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '900ms',
              textShadow: '0 0 20px hsl(0 0% 0% / 0.5)',
            }}
          >
            Transforme sua presença online em resultados extraordinários com estratégias que realmente funcionam.
          </p>

          {/* CTA Button with neon effect */}
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <button 
              className="group relative px-10 py-4 text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(280 80% 55%) 0%, hsl(320 80% 50%) 50%, hsl(30 90% 50%) 100%)',
                boxShadow: '0 0 30px hsl(280 80% 60% / 0.4), 0 0 60px hsl(320 80% 55% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.2)',
              }}
            >
              <span className="relative z-10 text-white">
                Comece Agora
              </span>
              {/* Animated shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.3) 50%, transparent 100%)',
                  animation: 'button-shine 2s ease-in-out infinite',
                }}
              />
            </button>
          </div>

          {/* Stats row */}
          <div 
            className={`flex gap-8 mt-12 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            {[
              { value: '500+', label: 'Clientes' },
              { value: '98%', label: 'Satisfação' },
              { value: '10x', label: 'ROI Médio' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-2xl md:text-3xl font-black text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, hsl(190 90% 60%) 0%, hsl(280 80% 65%) 100%)',
                    filter: 'drop-shadow(0 0 10px hsl(280 80% 60% / 0.5))',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade for section transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(240 20% 4%) 0%, transparent 100%)',
        }}
      />
    </section>
  );
};

export default Hero;
