import { Shield, Target, BarChart3, Clock, HeadphonesIcon, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Entregamos o que prometemos, sempre no prazo combinado.",
    },
    {
      icon: Target,
      title: "Metodologia Comprovada",
      description: "Processo testado em +50 projetos de diferentes nichos.",
    },
    {
      icon: BarChart3,
      title: "Orientados a Dados",
      description: "Decisões baseadas em métricas e resultados reais.",
    },
    {
      icon: Clock,
      title: "Entregas Rápidas",
      description: "Sua landing page pronta em até 7 dias úteis.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Dedicado",
      description: "Acompanhamento próximo durante todo o projeto.",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Design e código de alto padrão profissional.",
    },
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="why-choose-heading"
    >
      {/* Subtle green glow accents - no filter:blur for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[30%] left-[5%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(142 90% 50% / 0.06) 0%, hsl(142 90% 50% / 0.01) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(145 85% 45% / 0.08) 0%, hsl(145 85% 45% / 0.02) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(142 70% 50% / 0.1)',
              color: 'hsl(142 85% 65%)',
              border: '1px solid hsl(142 60% 50% / 0.2)',
            }}
          >
            Por que nos escolher
          </span>
          <h2 
            id="why-choose-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Resultados que{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 50%, hsl(140 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              falam por si
            </span>
          </h2>
          <p style={{ color: 'hsl(0 0% 70%)' }} className="max-w-2xl mx-auto text-lg">
            Combinamos estratégia, design e tecnologia para criar landing pages que realmente convertem visitantes em clientes.
          </p>
        </header>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-12 mb-16" role="list" aria-label="Estatísticas de resultados">
          <div className="text-center group" role="listitem">
            <div 
              className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              aria-label="Mais de 300 porcento"
            >
              +300%
            </div>
            <div style={{ color: 'hsl(0 0% 70%)' }}>Aumento médio em conversões</div>
          </div>
          <div className="w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" aria-hidden="true" />
          <div className="text-center group" role="listitem">
            <div 
              className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              aria-label="98 porcento"
            >
              98%
            </div>
            <div style={{ color: 'hsl(0 0% 70%)' }}>Taxa de satisfação</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)', /* Improved border contrast */
              }}
              role="listitem"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'hsl(0 0% 8%)',
                    border: '1px solid hsl(142 80% 50% / 0.3)',
                  }}
                  aria-hidden="true"
                >
                  <feature.icon 
                    className="w-10 h-10"
                    style={{ color: 'hsl(142 90% 55%)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(0 0% 70%)' }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
