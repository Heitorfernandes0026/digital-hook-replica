import { memo, useEffect, useRef } from "react";

/**
 * Premium animated neon background for the Hero section
 * Features: energy lines, glow effects, particles, and animated gradients
 */
const HeroBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle system for subtle floating lights
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    const colors = [
      'rgba(147, 51, 234, ', // Purple
      'rgba(34, 211, 238, ',  // Cyan
      'rgba(236, 72, 153, ',  // Pink
      'rgba(251, 146, 60, ',  // Orange
      'rgba(59, 130, 246, ',  // Blue
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Calculate pulsing opacity
        const pulsingOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, p.color + pulsingOpacity + ')');
        gradient.addColorStop(1, p.color + '0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + pulsingOpacity + ')';
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - Deep black with cosmic undertones */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 30%, 
              hsl(280 50% 8%) 0%, 
              hsl(260 40% 4%) 40%, 
              hsl(240 30% 2%) 100%
            )
          `
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Primary purple orb - top center */}
        <div 
          className="absolute w-[800px] h-[800px] -top-[200px] left-1/2 -translate-x-1/2"
          style={{
            background: `radial-gradient(circle at center, 
              hsl(280 80% 30% / 0.6) 0%, 
              hsl(280 70% 20% / 0.3) 30%, 
              transparent 60%
            )`,
            animation: 'heroOrb1 8s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />

        {/* Cyan orb - left */}
        <div 
          className="absolute w-[600px] h-[600px] top-1/4 -left-[150px]"
          style={{
            background: `radial-gradient(circle at center, 
              hsl(185 80% 40% / 0.4) 0%, 
              hsl(200 70% 30% / 0.2) 40%, 
              transparent 60%
            )`,
            animation: 'heroOrb2 10s ease-in-out infinite',
            filter: 'blur(80px)',
          }}
        />

        {/* Magenta orb - right */}
        <div 
          className="absolute w-[700px] h-[700px] top-1/3 -right-[200px]"
          style={{
            background: `radial-gradient(circle at center, 
              hsl(320 80% 35% / 0.5) 0%, 
              hsl(300 60% 25% / 0.2) 40%, 
              transparent 60%
            )`,
            animation: 'heroOrb3 12s ease-in-out infinite',
            filter: 'blur(70px)',
          }}
        />

        {/* Orange accent - bottom */}
        <div 
          className="absolute w-[500px] h-[400px] bottom-0 left-1/3"
          style={{
            background: `radial-gradient(ellipse at center, 
              hsl(25 90% 45% / 0.3) 0%, 
              hsl(30 80% 35% / 0.15) 40%, 
              transparent 70%
            )`,
            animation: 'heroOrb4 9s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* SVG Energy Lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Neon line gradients */}
          <linearGradient id="neonLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 80% 60%)" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(280 80% 60%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(320 80% 55%)" stopOpacity="1" />
            <stop offset="80%" stopColor="hsl(185 80% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(185 80% 50%)" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="neonLine2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 80% 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(220 80% 55%)" stopOpacity="0.7" />
            <stop offset="70%" stopColor="hsl(280 70% 55%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(280 70% 55%)" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="neonLine3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(30 90% 50%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(320 80% 55%)" stopOpacity="0.6" />
            <stop offset="60%" stopColor="hsl(280 80% 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(280 80% 55%)" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Primary flowing energy lines */}
        <g filter="url(#neonGlow)">
          <path 
            d="M-100,300 Q300,150 600,350 T1200,200 T1800,400 T2200,250" 
            fill="none" 
            stroke="url(#neonLine1)" 
            strokeWidth="2"
            className="animate-energyFlow1"
          />
          
          <path 
            d="M-100,500 Q400,700 700,450 T1300,600 T1900,350" 
            fill="none" 
            stroke="url(#neonLine2)" 
            strokeWidth="1.5"
            className="animate-energyFlow2"
          />

          <path 
            d="M2020,600 Q1600,400 1200,550 T600,400 T-100,550" 
            fill="none" 
            stroke="url(#neonLine3)" 
            strokeWidth="1.5"
            className="animate-energyFlow3"
          />
        </g>

        {/* Secondary subtle lines */}
        <g filter="url(#softGlow)" opacity="0.5">
          <path 
            d="M-50,200 Q250,350 550,180 T1050,320 T1550,150 T2050,280" 
            fill="none" 
            stroke="url(#neonLine1)" 
            strokeWidth="1"
            className="animate-energyFlow2"
            style={{ animationDelay: '-3s' }}
          />
          
          <path 
            d="M-50,700 Q350,550 650,720 T1150,580 T1650,750" 
            fill="none" 
            stroke="url(#neonLine2)" 
            strokeWidth="1"
            className="animate-energyFlow1"
            style={{ animationDelay: '-5s' }}
          />
        </g>

        {/* Accent circles with glow */}
        <g filter="url(#neonGlow)">
          <circle 
            cx="300" cy="250" r="3" 
            fill="hsl(185 80% 60%)"
            className="animate-pulseNode"
          />
          <circle 
            cx="800" cy="400" r="4" 
            fill="hsl(280 80% 60%)"
            className="animate-pulseNode"
            style={{ animationDelay: '-1s' }}
          />
          <circle 
            cx="1200" cy="300" r="3" 
            fill="hsl(320 80% 60%)"
            className="animate-pulseNode"
            style={{ animationDelay: '-2s' }}
          />
          <circle 
            cx="1600" cy="450" r="4" 
            fill="hsl(30 90% 55%)"
            className="animate-pulseNode"
            style={{ animationDelay: '-0.5s' }}
          />
        </g>
      </svg>

      {/* Canvas for particle effects */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 40%, 
              transparent 0%, 
              hsl(240 30% 2% / 0.4) 100%
            )
          `
        }}
      />

      {/* Bottom gradient fade for content readability */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: 'linear-gradient(to top, hsl(240 30% 2%) 0%, transparent 100%)'
        }}
      />
    </div>
  );
});

HeroBackground.displayName = "HeroBackground";

export default HeroBackground;
