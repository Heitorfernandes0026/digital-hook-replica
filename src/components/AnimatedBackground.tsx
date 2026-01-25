const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Main gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated flowing curves - Primary Blue */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] animate-flow-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent rounded-full blur-[100px] transform rotate-12" />
        </div>
      </div>

      {/* Animated flowing curves - Secondary Purple/Pink */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] animate-flow-2">
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/40 via-accent/30 to-transparent rounded-full blur-[100px] transform -rotate-12" />
        </div>
      </div>

      {/* Orange/Red accent curve */}
      <div className="absolute bottom-0 left-1/4 w-full h-full">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] animate-flow-3">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-red-500/20 to-transparent rounded-full blur-[120px]" />
        </div>
      </div>

      {/* Flowing light trails */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing curve 1 */}
        <path 
          className="animate-dash-1"
          d="M-100,400 Q300,200 600,350 T1200,300 T1900,500" 
          fill="none" 
          stroke="url(#flowGradient1)" 
          strokeWidth="3"
          filter="url(#glow)"
        />
        
        {/* Flowing curve 2 */}
        <path 
          className="animate-dash-2"
          d="M-100,600 Q400,800 700,550 T1300,700 T2000,400" 
          fill="none" 
          stroke="url(#flowGradient2)" 
          strokeWidth="2"
          filter="url(#glow)"
        />
      </svg>

      {/* Particle-like glowing dots */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-primary rounded-full animate-pulse-glow blur-sm" />
      <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-secondary rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-accent rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[70%] right-[25%] w-2 h-2 bg-primary rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[45%] left-[60%] w-3 h-3 bg-secondary rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '0.7s' }} />

      {/* Overlay to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
    </div>
  );
};

export default AnimatedBackground;
