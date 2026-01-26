import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt (max 15 degrees)
    const tiltX = (mouseY / (rect.height / 2)) * -10;
    const tiltY = (mouseX / (rect.width / 2)) * 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Dynamic Glow Layer - Animated gradient behind the image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        {/* Primary glow - Blue/Purple */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.6) 0%, rgba(147,51,234,0.4) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary glow - Pink */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(217,70,239,0.3) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* Tertiary glow - Orange */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, rgba(234,88,12,0.2) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Neon rays animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left"
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isLoaded ? `${150 + Math.random() * 200}px` : 0,
              opacity: isLoaded ? 1 : 0
            }}
            transition={{
              duration: 0.8 + i * 0.1,
              delay: 0.2 + i * 0.05,
              ease: "easeOut",
            }}
            style={{
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
            }}
          />
        ))}
      </div>

      {/* Main Logo Image with animations */}
      <motion.div
        ref={imageRef}
        className="relative z-10 w-[80vw] h-[80vh] max-w-[900px] max-h-[700px] cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 0.9,
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          rotateX: { duration: 0.3, ease: "easeOut" },
          rotateY: { duration: 0.3, ease: "easeOut" },
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Brightness pulsing effect wrapper */}
        <motion.div
          className="w-full h-full rounded-2xl overflow-hidden"
          animate={{
            filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: '0 0 60px rgba(147,51,234,0.4), 0 0 120px rgba(236,72,153,0.2)',
          }}
        >
          <img
            src={neonLogo}
            alt="Next Level - Logo"
            className="w-full h-full object-cover object-center"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(147,51,234,0.5))',
            }}
          />
        </motion.div>

        {/* Additional glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: tilt.x !== 0 || tilt.y !== 0 ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(147,51,234,0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
