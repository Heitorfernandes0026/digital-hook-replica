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
    <section id="metodo" className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, hsl(30 100% 50% / 0.05) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(30 70% 50% / 0.1)',
              color: 'hsl(30 80% 60%)',
              border: '1px solid hsl(30 60% 50% / 0.2)',
            }}
          >
            Método Proprietário
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Método{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              HOOK™
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Nossa metodologia exclusiva para criar páginas que capturam a atenção e convertem visitantes em clientes.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div 
            className="hidden lg:block absolute top-16 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5"
            style={{
              background: 'linear-gradient(90deg, hsl(30 90% 50% / 0.3) 0%, hsl(30 90% 50% / 0.5) 50%, hsl(30 90% 50% / 0.3) 100%)',
            }}
          />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Node Circle */}
                <div className="relative mb-8">
                  {/* Glow behind node */}
                  <div 
                    className="absolute inset-0 w-20 h-20 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500"
                    style={{
                      background: 'radial-gradient(circle, hsl(30 90% 50% / 0.5) 0%, transparent 70%)',
                      filter: 'blur(15px)',
                    }}
                  />
                  
                  {/* Node circle */}
                  <div 
                    className="relative w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: '#0B0B0B',
                      border: '2px solid hsl(30 90% 50%)',
                      boxShadow: '0 0 20px hsl(30 90% 50% / 0.3)',
                    }}
                  >
                    <span 
                      className="text-3xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(25 90% 50%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {step.letter}
                    </span>
                  </div>

                  {/* Step number badge */}
                  <div 
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
                      boxShadow: '0 0 12px hsl(30 90% 50% / 0.5)',
                    }}
                  >
                    <span className="text-xs font-bold text-black">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
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
