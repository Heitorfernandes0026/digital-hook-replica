import { useEffect, useState } from "react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Neon rays animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central glow burst */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full transition-all duration-[2000ms] ease-out ${
            isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(236,72,153,0.2) 30%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Neon rays */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 origin-left transition-all ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: isLoaded ? `${150 + Math.random() * 200}px` : '0px',
              height: '2px',
              transform: `rotate(${i * 30}deg)`,
              background: `linear-gradient(90deg, ${
                i % 3 === 0 ? 'rgba(34,211,238,0.8)' : 
                i % 3 === 1 ? 'rgba(147,51,234,0.8)' : 
                'rgba(236,72,153,0.8)'
              } 0%, transparent 100%)`,
              boxShadow: `0 0 10px ${
                i % 3 === 0 ? 'rgba(34,211,238,0.6)' : 
                i % 3 === 1 ? 'rgba(147,51,234,0.6)' : 
                'rgba(236,72,153,0.6)'
              }`,
              transitionDuration: `${800 + i * 100}ms`,
              transitionDelay: `${200 + i * 50}ms`,
            }}
          />
        ))}
        
        {/* Outer rotating rays */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`outer-${i}`}
            className={`absolute top-1/2 left-1/2 origin-left transition-all ease-out ${
              isLoaded ? 'opacity-70' : 'opacity-0'
            }`}
            style={{
              width: isLoaded ? `${80 + Math.random() * 120}px` : '0px',
              height: '1px',
              transform: `rotate(${i * 45 + 22.5}deg) translateX(100px)`,
              background: `linear-gradient(90deg, rgba(251,146,60,0.7) 0%, transparent 100%)`,
              boxShadow: '0 0 8px rgba(251,146,60,0.5)',
              transitionDuration: `${1000 + i * 80}ms`,
              transitionDelay: `${400 + i * 60}ms`,
            }}
          />
        ))}
      </div>

      {/* Full background image with fade-in */}
      <div 
        className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: `url(${neonLogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 0 40px rgba(147,51,234,0.4))'
        }}
      />

      {/* Pulsing neon glow overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-[2000ms] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
