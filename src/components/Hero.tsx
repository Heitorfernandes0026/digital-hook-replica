import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos entregues" },
    { value: "7 dias", label: "Tempo médio de entrega" },
    { value: "+300%", label: "Aumento em conversões" },
    { value: "100%", label: "Clientes satisfeitos" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_60%/0.15)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Metodologia validada em +50 projetos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Landing pages e sites que{" "}
            <span className="gradient-text">geram leads</span> em até 7 dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cada seção tem um motivo. Cada botão tem um objetivo. Estratégia, copy e design pensados para conversão desde o primeiro scroll.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2" size={20} />
              Ver cases de sucesso
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Entrega em até 7 dias
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              100% personalizada
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              +50 projetos entregues
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
