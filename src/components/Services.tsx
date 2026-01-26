import { Globe, Pen, Smartphone, MessageCircle, LineChart, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages & Sites",
      description: "Páginas únicas ou sites completos, criados do zero e focados em conversão.",
      color: "from-primary to-secondary",
    },
    {
      icon: Pen,
      title: "Copywriting Estratégico",
      description: "Textos persuasivos que conectam com seu público e motivam a ação imediata.",
      color: "from-secondary to-accent",
    },
    {
      icon: Smartphone,
      title: "Otimização Mobile-First",
      description: "Design responsivo perfeito em qualquer tela. 70% do tráfego vem do celular.",
      color: "from-accent to-primary",
    },
    {
      icon: MessageCircle,
      title: "Integração WhatsApp",
      description: "Botões e formulários integrados para conversão direta no WhatsApp Business.",
      color: "from-primary via-secondary to-accent",
    },
    {
      icon: LineChart,
      title: "Consultoria de Conversão",
      description: "Análise estratégica do seu funil e recomendações para maximizar resultados.",
      color: "from-secondary via-accent to-primary",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Sites e páginas rápidas, otimizadas para SEO e tráfego pago.",
      color: "from-accent via-primary to-secondary",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Subtle local overlay for depth variation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-pink-600/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Tudo que você precisa para <span className="gradient-text">converter mais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções completas em landing pages e sites, do planejamento à entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300`}>
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
