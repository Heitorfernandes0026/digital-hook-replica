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
    <section id="metodo" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Método Proprietário
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Método <span className="gradient-text">HOOK™</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia exclusiva para criar páginas que capturam atenção e convertem visitantes em clientes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Letter */}
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-primary-foreground">
                  {step.letter}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HookMethod;
