import { useEffect, useState } from "react";
import lionLogo from "@/assets/lion-logo.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const brandName = "NEXT LEVEL";

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
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4">
        {/* Lion Logo */}
        <div 
          className={`relative transition-all duration-[1500ms] ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <img 
            src={lionLogo} 
            alt="Next Level Lion Logo"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain animate-[pulseGlow_3s_ease-in-out_infinite]"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(147,51,234,0.6)) drop-shadow(0 0 60px rgba(34,211,238,0.4))',
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start">
          {/* N Symbol + NEXT LEVEL */}
          <div className="flex items-center gap-2">
            {/* Stylized N */}
            <div 
              className={`relative text-6xl sm:text-7xl lg:text-8xl font-bold transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(180deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.8)) drop-shadow(0 0 40px rgba(168,85,247,0.6))',
              }}
            >
              N
            </div>

            {/* NEXT LEVEL text */}
            <div className="flex flex-col">
              <div className="flex">
                {brandName.split('').map((letter, index) => (
                  <span
                    key={index}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold transition-all duration-500 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: index < 4 
                        ? 'linear-gradient(90deg, #22d3ee 0%, #a855f7 100%)' 
                        : 'linear-gradient(90deg, #ec4899 0%, #f97316 50%, #eab308 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: index < 4 
                        ? 'drop-shadow(0 0 10px rgba(34,211,238,0.8))' 
                        : 'drop-shadow(0 0 10px rgba(249,115,22,0.8))',
                      transitionDelay: `${index * 80 + 500}ms`,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Neon line */}
          <div 
            className={`h-[2px] mt-3 transition-all duration-1000 ease-out ${
              isLoaded ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
            style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #a855f7 25%, #ec4899 50%, #f97316 75%, #eab308 100%)',
              boxShadow: '0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(236,72,153,0.6)',
              transitionDelay: '1200ms',
            }}
          />

          {/* Subtitle */}
          <div 
            className={`mt-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <p 
              className="text-sm sm:text-base lg:text-lg tracking-[0.2em] font-medium"
              style={{
                background: 'linear-gradient(90deg, #22d3ee 0%, #a855f7 25%, #ec4899 50%, #f97316 75%, #eab308 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.6))',
              }}
            >
              COMPANY SYSTEMS, MARKETING & PERFORMANCE
            </p>
          </div>
        </div>
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
