import { Check, X, Lightbulb, Focus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const IdealFor = () => {
  const idealFor = [
    "Precisa gerar leads qualificados rapidamente",
    "Trabalha com tráfego pago e quer maximizar ROI",
    "Está lançando um produto, serviço ou infoproduto",
    "Quer um site ou landing page focado em conversão",
    "Busca profissionalismo para fechar mais clientes",
  ];

  const notFor = [
    "Quer apenas um site bonito sem estratégia",
    "Não tem produto ou serviço definido ainda",
    "Prefere fazer tudo sozinho sem orientação estratégica",
  ];

  const missionPoints = [
    { icon: Sparkles, text: "Inovação constante em cada projeto" },
    { icon: Focus, text: "Foco total na experiência do usuário" },
    { icon: Lightbulb, text: "Soluções criativas e estratégicas" },
  ];

  return (
    <section className="py-24 relative overflow-hidden cosmic-section cosmic-section-1">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_bottom,hsl(280_60%_40%/0.2)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-pink-600/20 to-transparent rounded-full blur-[80px] animate-flow-2" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-gradient-to-r from-purple-600/15 to-transparent rounded-full blur-[60px] animate-flow-1" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
            Clareza
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            É <span className="gradient-text">pra você?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa metodologia funciona melhor para perfis específicos. Veja se você se encaixa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ideal For */}
          <div className="p-8 rounded-2xl glass border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(142_71%_45%/0.15)]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shadow-[0_0_15px_hsl(142_71%_45%/0.3)]">
                <Check className="text-green-500" size={24} />
              </div>
              Ideal para quem
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5 drop-shadow-[0_0_6px_hsl(142_71%_45%/0.5)]" size={20} />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="p-8 rounded-2xl glass border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_84%_60%/0.15)]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shadow-[0_0_15px_hsl(0_84%_60%/0.3)]">
                <X className="text-red-500" size={24} />
              </div>
              Não indicado para quem
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <X className="text-red-500 flex-shrink-0 mt-0.5 drop-shadow-[0_0_6px_hsl(0_84%_60%/0.5)]" size={20} />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            Se você se identificou, estamos prontos para ajudar.
          </p>
          <Button variant="hero" size="lg" className="group">
            Quero uma landing page que converta
          </Button>
        </div>

        {/* Mission Card */}
        <div className="relative p-8 md:p-12 rounded-2xl glass border border-border/50 overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl opacity-50">
            <div className="absolute inset-[-1px] bg-gradient-to-r from-primary via-secondary to-accent opacity-20 rounded-2xl" />
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Nossa Missão</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl text-lg">
              Transformar negócios através de landing pages e sites estratégicos que realmente convertem, utilizando design, copy e tecnologia de forma integrada.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <point.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
