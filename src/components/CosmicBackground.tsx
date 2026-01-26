import { memo } from "react";

/**
 * Global continuous cosmic background for the entire page
 * Creates a seamless visual experience with flowing gradients,
 * nebula effects, and subtle particle overlays
 */
const CosmicBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient - Deep black with cosmic undertones */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              hsl(240 20% 4%) 0%,
              hsl(260 25% 6%) 20%,
              hsl(280 20% 5%) 40%,
              hsl(270 22% 5%) 60%,
              hsl(260 25% 6%) 80%,
              hsl(240 20% 4%) 100%
            )
          `
        }}
      />

      {/* Primary nebula layer - Large flowing gradients */}
      <div className="absolute inset-0">
        {/* Top-left purple nebula */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[150vw] h-[80vh] animate-flow-1"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 30% 30%, 
                hsl(280 70% 25% / 0.4) 0%, 
                hsl(260 60% 20% / 0.2) 40%, 
                transparent 70%
              )
            `,
            transform: 'translateZ(0)'
          }}
        />
        
        {/* Center-right pink/magenta nebula */}
        <div 
          className="absolute top-1/4 -right-1/4 w-[120vw] h-[100vh] animate-flow-2"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 70% 40%, 
                hsl(320 70% 25% / 0.35) 0%, 
                hsl(300 50% 20% / 0.2) 35%, 
                transparent 65%
              )
            `,
            transform: 'translateZ(0)'
          }}
        />

        {/* Bottom blue nebula */}
        <div 
          className="absolute bottom-0 left-1/4 w-[140vw] h-[70vh] animate-flow-3"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 80%, 
                hsl(220 70% 30% / 0.3) 0%, 
                hsl(240 50% 20% / 0.15) 45%, 
                transparent 70%
              )
            `,
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Secondary nebula layer - Smaller accent glows */}
      <div className="absolute inset-0">
        {/* Magenta accent glow - mid page */}
        <div 
          className="absolute top-[30%] left-[10%] w-[600px] h-[600px]"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                hsl(320 80% 35% / 0.2) 0%, 
                transparent 50%
              )
            `,
            animation: 'nebula-drift-1 25s ease-in-out infinite',
            transform: 'translateZ(0)'
          }}
        />

        {/* Purple accent glow */}
        <div 
          className="absolute top-[60%] right-[5%] w-[500px] h-[500px]"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                hsl(280 70% 30% / 0.25) 0%, 
                transparent 55%
              )
            `,
            animation: 'nebula-drift-2 30s ease-in-out infinite reverse',
            transform: 'translateZ(0)'
          }}
        />

        {/* Blue electric accent */}
        <div 
          className="absolute top-[80%] left-[20%] w-[700px] h-[400px]"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                hsl(220 80% 40% / 0.15) 0%, 
                transparent 60%
              )
            `,
            animation: 'nebula-drift-1 35s ease-in-out infinite',
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Flowing light waves - Creates "light trails" effect */}
      <svg 
        className="absolute inset-0 w-full h-[300vh] opacity-20" 
        viewBox="0 0 1920 3000" 
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cosmicFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 80% 60%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(280 80% 60%)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(320 80% 55%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(320 80% 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cosmicFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220 80% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(260 70% 55%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(300 70% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Long flowing wave across multiple sections */}
        <path 
          d="M-100,400 Q400,200 800,450 T1600,350 T2400,500 T3200,400" 
          fill="none" 
          stroke="url(#cosmicFlow1)" 
          strokeWidth="2"
          className="animate-dash-1"
        />
        
        <path 
          d="M-100,1200 Q500,1000 900,1300 T1700,1100 T2500,1350" 
          fill="none" 
          stroke="url(#cosmicFlow2)" 
          strokeWidth="1.5"
          className="animate-dash-2"
        />

        <path 
          d="M2020,800 Q1600,950 1200,750 T400,900 T-200,700" 
          fill="none" 
          stroke="url(#cosmicFlow1)" 
          strokeWidth="1.5"
          className="animate-dash-2"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Subtle star particles overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, hsl(0 0% 100% / 0.3) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 25% 45%, hsl(280 70% 80% / 0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 15%, hsl(0 0% 100% / 0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 70%, hsl(0 0% 100% / 0.2) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 35%, hsl(320 70% 75% / 0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 60%, hsl(0 0% 100% / 0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 80%, hsl(0 0% 100% / 0.2) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 90% 85%, hsl(260 60% 75% / 0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 90%, hsl(0 0% 100% / 0.15) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 5%, hsl(0 0% 100% / 0.2) 0%, transparent 100%)
          `,
          backgroundSize: '100% 100%',
          animation: 'stars-twinkle 8s ease-in-out infinite',
        }}
      />

      {/* Soft vignette overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, 
              transparent 0%, 
              hsl(240 20% 4% / 0.3) 100%
            )
          `
        }}
      />
    </div>
  );
});

CosmicBackground.displayName = "CosmicBackground";

export default CosmicBackground;
