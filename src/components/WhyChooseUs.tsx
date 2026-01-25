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
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Resultados que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos estratégia, design e tecnologia para criar landing pages que realmente convertem visitantes em clientes. Cada projeto é único e desenvolvido com foco total nos seus objetivos.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">+300%</div>
            <div className="text-muted-foreground">Aumento médio em conversões</div>
          </div>
          <div className="w-px bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de satisfação</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
