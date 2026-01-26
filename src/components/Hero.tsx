import { useEffect, useState } from "react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const textTimer = setTimeout(() => setShowText(true), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const lines = [
    { text: "NEXT LEVEL", delay: 0, gradient: "from-cyan-400 via-purple-500 to-orange-400" },
    { text: "Combapy Systems", delay: 400, gradient: "from-purple-400 via-pink-500 to-purple-400" },
    { text: "Marketing & Performance", delay: 800, gradient: "from-orange-400 via-yellow-400 to-orange-400" },
  ];

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
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 0 40px rgba(147,51,234,0.4))'
        }}
      />

      {/* Animated text overlay */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center gap-3 z-10">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className={`overflow-hidden transition-all duration-700 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${line.delay}ms` }}
          >
            <div
              className={`flex justify-center transition-transform duration-700 ${
                showText ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: `${line.delay}ms` }}
            >
              {line.text.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={`inline-block font-bold bg-gradient-to-r ${line.gradient} bg-clip-text text-transparent transition-all duration-500 ${
                    lineIndex === 0 ? 'text-4xl md:text-6xl tracking-wider' : 
                    lineIndex === 1 ? 'text-xl md:text-2xl tracking-wide' : 
                    'text-lg md:text-xl tracking-wide'
                  } ${showText ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                  style={{
                    transitionDelay: `${line.delay + charIndex * 30}ms`,
                    textShadow: showText ? '0 0 30px currentColor' : 'none',
                    animation: showText ? `pulseGlow 3s ease-in-out infinite ${charIndex * 0.1}s` : 'none',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

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
