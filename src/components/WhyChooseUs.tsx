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
    <section className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[30%] left-[5%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.04) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.05) 0%, transparent 60%)',
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
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Resultados que{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              falam por si
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Combinamos estratégia, design e tecnologia para criar landing pages que realmente convertem visitantes em clientes.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="text-center group">
            <div 
              className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              +300%
            </div>
            <div className="text-white/50">Aumento médio em conversões</div>
          </div>
          <div className="w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
          <div className="text-center group">
            <div 
              className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              98%
            </div>
            <div className="text-white/50">Taxa de satisfação</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 15%)',
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'hsl(0 0% 8%)',
                    border: '1px solid hsl(30 80% 50% / 0.2)',
                  }}
                >
                  <feature.icon 
                    className="w-10 h-10"
                    style={{
                      color: 'hsl(30 90% 55%)',
                    }}
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
