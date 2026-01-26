import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Easing } from "framer-motion";

const DynamicHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [15, -15]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), springConfig);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const easeInOut: Easing = [0.42, 0, 0.58, 1];

  // SVG drawing animation variants
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, delay, ease: easeInOut },
        opacity: { duration: 0.3, delay }
      }
    })
  };

  const lineDrawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, delay: 1.8, ease: easeInOut },
        opacity: { duration: 0.3, delay: 1.8 }
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black"
    >
      {/* Gradient definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="25%" stopColor="#9333ea" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="75%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="30%" stopColor="#9333ea" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feGaussianBlur stdDeviation="12" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="15" result="blur2" />
            <feGaussianBlur stdDeviation="25" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background glow effects */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Main content with parallax */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        style={{ x: parallaxX, y: parallaxY }}
      >
        {/* Lion SVG with line art */}
        <motion.svg
          viewBox="0 0 400 350"
          className="w-[280px] md:w-[350px] lg:w-[400px] h-auto mb-6"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Glow layer */}
          <motion.g 
            filter="url(#strongGlow)"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Lion mane - outer flames */}
            <motion.path
              d="M200 30 Q230 10 250 40 Q280 20 290 60 Q320 40 320 90 Q350 80 340 130 Q370 130 350 170"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0}
            />
            <motion.path
              d="M200 30 Q170 10 150 40 Q120 20 110 60 Q80 40 80 90 Q50 80 60 130 Q30 130 50 170"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.1}
            />
            
            {/* Lion mane - middle flames */}
            <motion.path
              d="M350 170 Q380 200 360 240 Q385 270 350 290"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.2}
            />
            <motion.path
              d="M50 170 Q20 200 40 240 Q15 270 50 290"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.3}
            />

            {/* Inner mane details */}
            <motion.path
              d="M240 50 Q270 60 280 100 Q300 90 295 140"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.4}
            />
            <motion.path
              d="M160 50 Q130 60 120 100 Q100 90 105 140"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.5}
            />

            {/* Face outline */}
            <motion.path
              d="M120 160 Q100 200 110 240 Q120 280 160 300 Q180 310 200 315 Q220 310 240 300 Q280 280 290 240 Q300 200 280 160"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.6}
            />

            {/* Forehead */}
            <motion.path
              d="M140 150 Q170 120 200 115 Q230 120 260 150"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.7}
            />

            {/* Eyes */}
            <motion.path
              d="M145 185 Q155 175 175 180 Q185 190 175 200 Q165 205 150 195 Q145 190 145 185"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.8}
            />
            <motion.path
              d="M255 185 Q245 175 225 180 Q215 190 225 200 Q235 205 250 195 Q255 190 255 185"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={0.8}
            />

            {/* Eye inner details */}
            <motion.circle
              cx="160"
              cy="190"
              r="5"
              fill="url(#neonGradient)"
              variants={drawVariants}
              custom={1}
            />
            <motion.circle
              cx="240"
              cy="190"
              r="5"
              fill="url(#neonGradient)"
              variants={drawVariants}
              custom={1}
            />

            {/* Nose */}
            <motion.path
              d="M185 230 Q190 240 200 245 Q210 240 215 230 Q210 225 200 230 Q190 225 185 230"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={1.1}
            />

            {/* Mouth/Muzzle */}
            <motion.path
              d="M200 245 L200 260"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={1.2}
            />
            <motion.path
              d="M170 270 Q185 280 200 275 Q215 280 230 270"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariants}
              custom={1.3}
            />

            {/* Whisker areas */}
            <motion.path
              d="M140 240 Q155 245 165 250"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={1.4}
            />
            <motion.path
              d="M260 240 Q245 245 235 250"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={drawVariants}
              custom={1.4}
            />

            {/* Crown/Top accent */}
            <motion.path
              d="M180 70 L200 50 L220 70"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawVariants}
              custom={1.5}
            />
          </motion.g>
        </motion.svg>

        {/* Text content */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* NEXT LEVEL text with gradient */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
            style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #9333ea 30%, #ec4899 60%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(147,51,234,0.5)) drop-shadow(0 0 40px rgba(236,72,153,0.3))',
            }}
            animate={{ 
              filter: [
                'drop-shadow(0 0 20px rgba(147,51,234,0.5)) drop-shadow(0 0 40px rgba(236,72,153,0.3))',
                'drop-shadow(0 0 30px rgba(147,51,234,0.8)) drop-shadow(0 0 60px rgba(236,72,153,0.5))',
                'drop-shadow(0 0 20px rgba(147,51,234,0.5)) drop-shadow(0 0 40px rgba(236,72,153,0.3))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            NEXT LEVEL
          </motion.h1>

          {/* Horizontal line with drawing animation */}
          <svg width="300" height="4" className="mx-auto mb-4">
            <motion.line
              x1="0"
              y1="2"
              x2="300"
              y2="2"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              variants={lineDrawVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            />
          </svg>

          {/* Subtitle */}
          <motion.p 
            className="text-sm md:text-base tracking-[0.3em] text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            COMPANY SYSTEMS, MARKETING & PERFORMANCE
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: ['hsl(var(--neon-cyan))', 'hsl(var(--neon-purple))', 'hsl(var(--neon-pink))', 'hsl(var(--neon-orange))', 'hsl(190 90% 50%)'][i % 5],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${['#22d3ee', '#9333ea', '#ec4899', '#f97316', '#eab308'][i % 5]}`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicHero;
