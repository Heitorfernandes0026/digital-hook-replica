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
    <section className="py-24 relative overflow-hidden cosmic-section cosmic-section-2">
      {/* SVG Gradient Definition for icons */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="neon-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(280 80% 60%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <div className="absolute -left-1/4 top-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-[100px] animate-flow-1" />
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-gradient-to-l from-pink-600/15 to-transparent rounded-full blur-[80px] animate-flow-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Resultados que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos estratégia, design e tecnologia para criar landing pages que realmente convertem visitantes em clientes.
          </p>
        </div>

        {/* Stats Row with neon glow */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform">+300%</div>
            <div className="text-muted-foreground">Aumento médio em conversões</div>
          </div>
          <div className="w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform">98%</div>
            <div className="text-muted-foreground">Taxa de satisfação</div>
          </div>
        </div>

        {/* Features Grid - 3 columns with neon outline icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-xl glass border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
            >
              {/* Large neon outline icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Icon with neon outline effect */}
                  <feature.icon 
                    className="relative z-10 w-12 h-12 stroke-[1.5]"
                    style={{
                      stroke: 'url(#neon-icon-gradient)',
                      fill: 'none',
                      filter: 'drop-shadow(0 0 8px hsl(217 91% 60%)) drop-shadow(0 0 16px hsl(280 80% 60% / 0.6))'
                    }}
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
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