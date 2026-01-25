import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos entregues" },
    { value: "7 dias", label: "Tempo médio de entrega" },
    { value: "+300%", label: "Aumento em conversões" },
    { value: "100%", label: "Clientes satisfeitos" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Background" 
          className="w-full h-full object-contain object-right scale-75"
        />
        {/* Overlay for better text readability on left side */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, hsl(280 30% 8% / 0.95) 0%, hsl(280 30% 8% / 0.8) 30%, hsl(280 30% 8% / 0.4) 50%, transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto md:mx-0 md:mr-auto text-center md:text-left">
          {/* Badge with glow effect */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/30 backdrop-blur-xl mb-8 animate-fade-up glass animate-glow-pulse">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_hsl(142_71%_45%)]" />
            <span className="text-sm text-muted-foreground">
              Metodologia validada em +50 projetos
            </span>
          </div>

          {/* Headline with enhanced gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Landing pages e sites que{" "}
            <span className="gradient-text">geram leads</span> em até 7 dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cada seção tem um motivo. Cada botão tem um objetivo. Estratégia, copy e design pensados para conversão desde o primeiro scroll.
          </p>

          {/* CTA Buttons with enhanced glow */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Solicitar orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </Button>
            <Button variant="heroOutline" size="xl" className="group backdrop-blur-xl">
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver cases de sucesso
            </Button>
          </div>

          {/* Quick Info with neon accents */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="text-green-500 drop-shadow-[0_0_6px_hsl(142_71%_45%)]">✓</span>
              Entrega em até 7 dias
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 drop-shadow-[0_0_6px_hsl(142_71%_45%)]">✓</span>
              100% personalizada
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 drop-shadow-[0_0_6px_hsl(142_71%_45%)]">✓</span>
              +50 projetos entregues
            </div>
          </div>

          {/* Stats Grid with glass morphism and glow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
