const HookMethod = () => {
  const steps = [
    {
      letter: "H",
      title: "Diagnóstico de Conversão",
      description: "Analisamos seu negócio, concorrentes e público para identificar os gatilhos que vão converter.",
    },
    {
      letter: "O",
      title: "Estrutura Estratégica",
      description: "Arquitetura de página pensada para guiar o visitante naturalmente até o botão de ação.",
    },
    {
      letter: "O",
      title: "Copy Persuasiva",
      description: "Textos estratégicos que falam com seu cliente ideal e quebram objeções antes que surjam.",
    },
    {
      letter: "K",
      title: "Design + Mobile First",
      description: "Visual que conecta com seu público e funciona perfeitamente em qualquer dispositivo.",
    },
  ];

  return (
    <section id="metodo" className="py-24 relative overflow-hidden cosmic-section">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(280_60%_40%/0.2)_0%,hsl(260_50%_30%/0.1)_40%,transparent_70%)]" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-l from-purple-600/25 to-transparent rounded-full blur-[100px] animate-flow-2" />
        <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-gradient-to-r from-pink-600/20 to-transparent rounded-full blur-[80px] animate-flow-3" />
        {/* Lightning effect */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Método Proprietário
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Método <span className="gradient-text">HOOK™</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa metodologia exclusiva para criar páginas que capturam a atenção e convertem visitantes em clientes.
          </p>
        </div>

        {/* Horizontal Timeline with Neon Nodes */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-sm opacity-60" />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Neon Node Circle */}
                <div className="relative mb-8">
                  {/* Energy glow behind node */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-500" />
                  
                  {/* Node circle with neon border */}
                  <div className="relative w-20 h-20 rounded-full neon-node flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span 
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(280 80% 60%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 8px hsl(217 91% 60%))'
                      }}
                    >
                      {step.letter}
                    </span>
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_12px_hsl(var(--primary)/0.6)]">
                    <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                  </div>

                  {/* Neon connector to next node (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-[calc(100%-2rem)] h-0.5 ml-4">
                      <div className="neon-connector w-full" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HookMethod;