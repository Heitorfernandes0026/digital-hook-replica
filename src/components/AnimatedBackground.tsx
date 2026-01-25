import { memo } from "react";

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none will-change-transform">
      {/* Main gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated flowing curves - Primary Blue - GPU accelerated */}
      <div className="absolute top-0 left-0 w-full h-full contain-strict">
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] animate-flow-1"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent rounded-full blur-[100px] transform rotate-12" />
        </div>
      </div>

      {/* Animated flowing curves - Secondary Purple/Pink - GPU accelerated */}
      <div className="absolute top-0 right-0 w-full h-full contain-strict">
        <div 
          className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] animate-flow-2"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/40 via-accent/30 to-transparent rounded-full blur-[100px] transform -rotate-12" />
        </div>
      </div>

      {/* Orange/Red accent curve - GPU accelerated */}
      <div className="absolute bottom-0 left-1/4 w-full h-full contain-strict">
        <div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] animate-flow-3"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-red-500/20 to-transparent rounded-full blur-[120px]" />
        </div>
      </div>

      {/* Flowing light trails - simplified for performance */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="hsl(270, 70%, 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(320, 70%, 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270, 70%, 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(320, 70%, 60%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(30, 90%, 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing curves without heavy filter */}
        <path 
          className="animate-dash-1"
          d="M-100,400 Q300,200 600,350 T1200,300 T1900,500" 
          fill="none" 
          stroke="url(#flowGradient1)" 
          strokeWidth="3"
        />
        
        <path 
          className="animate-dash-2"
          d="M-100,600 Q400,800 700,550 T1300,700 T2000,400" 
          fill="none" 
          stroke="url(#flowGradient2)" 
          strokeWidth="2"
        />
      </svg>

      {/* Reduced particle dots for better performance */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-primary rounded-full animate-pulse-glow blur-sm" />
      <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-secondary rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-accent rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '1s' }} />

      {/* Overlay to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;

