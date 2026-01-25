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
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute -left-1/4 top-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-[100px] animate-flow-1" />
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-xl glass border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <feature.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
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
