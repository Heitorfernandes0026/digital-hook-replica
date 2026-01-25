const HookMethod = () => {
  const steps = [
    {
      letter: "H",
      title: "Diagnóstico de Conversão",
      description: "Analisamos seu negócio, concorrentes e público para identificar os gatilhos que vão converter.",
      gradient: "from-primary to-secondary",
    },
    {
      letter: "O",
      title: "Estrutura Estratégica",
      description: "Arquitetura de página pensada para guiar o visitante naturalmente até o botão de ação.",
      gradient: "from-secondary to-accent",
    },
    {
      letter: "O",
      title: "Copy Persuasiva",
      description: "Textos estratégicos que falam com seu cliente ideal e quebram objeções antes que surjam.",
      gradient: "from-accent to-primary",
    },
    {
      letter: "K",
      title: "Design + Mobile First",
      description: "Visual que conecta com seu público e funciona perfeitamente em qualquer dispositivo.",
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(280_80%_60%/0.1)_0%,hsl(217_91%_60%/0.05)_40%,transparent_70%)]" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-[100px] animate-flow-2" />
        <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-gradient-to-r from-secondary/15 to-transparent rounded-full blur-[80px] animate-flow-3" />
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

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.15)]"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className={`absolute inset-[-2px] bg-gradient-to-r ${step.gradient} opacity-20`} />
              </div>
              
              {/* Letter */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300`}>
                <span className="text-3xl font-bold text-primary-foreground">
                  {step.letter}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors relative">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative">
                {step.description}
              </p>

              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">{index + 1}</span>
              </div>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/60 to-transparent z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HookMethod;
