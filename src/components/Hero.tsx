import { useEffect, useState } from "react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Dynamic animated background */}
      <HeroBackground />

      {/* Central neon burst effect on load */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full transition-all duration-[2000ms] ease-out ${
            isLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(236,72,153,0.3) 30%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Neon rays burst */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 origin-left transition-all ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: isLoaded ? `${100 + (i % 3) * 80}px` : '0px',
              height: '2px',
              transform: `rotate(${i * 22.5}deg)`,
              background: `linear-gradient(90deg, ${
                i % 4 === 0 ? 'rgba(34,211,238,0.9)' : 
                i % 4 === 1 ? 'rgba(147,51,234,0.9)' : 
                i % 4 === 2 ? 'rgba(236,72,153,0.9)' :
                'rgba(251,146,60,0.9)'
              } 0%, transparent 100%)`,
              boxShadow: `0 0 15px ${
                i % 4 === 0 ? 'rgba(34,211,238,0.7)' : 
                i % 4 === 1 ? 'rgba(147,51,234,0.7)' : 
                i % 4 === 2 ? 'rgba(236,72,153,0.7)' :
                'rgba(251,146,60,0.7)'
              }`,
              transitionDuration: `${600 + i * 60}ms`,
              transitionDelay: `${100 + i * 40}ms`,
            }}
          />
        ))}
      </div>

      {/* Brand text overlay - can be enabled later */}
      <div className="relative z-10 text-center px-4">
        {/* Optional: Add headline/CTA here */}
      </div>
    </section>
  );
};

export default Hero;
