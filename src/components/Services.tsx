import { Globe, Pen, Smartphone, MessageCircle, LineChart, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages & Sites",
      description: "Páginas únicas ou sites completos, criados do zero e focados em conversão.",
    },
    {
      icon: Pen,
      title: "Copywriting Estratégico",
      description: "Textos persuasivos que conectam com seu público e motivam a ação imediata.",
    },
    {
      icon: Smartphone,
      title: "Otimização Mobile-First",
      description: "Design responsivo perfeito em qualquer tela. 70% do tráfego vem do celular.",
    },
    {
      icon: MessageCircle,
      title: "Integração WhatsApp",
      description: "Botões e formulários integrados para conversão direta no WhatsApp Business.",
    },
    {
      icon: LineChart,
      title: "Consultoria de Conversão",
      description: "Análise estratégica do seu funil e recomendações para maximizar resultados.",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Sites e páginas rápidas, otimizadas para SEO e tráfego pago.",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Tudo que você precisa para <span className="gradient-text">converter mais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em landing pages e sites, do planejamento à entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
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
