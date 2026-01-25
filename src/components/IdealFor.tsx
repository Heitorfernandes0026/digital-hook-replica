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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(270_70%_60%/0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Clareza
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            É <span className="gradient-text">pra você?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia funciona melhor para perfis específicos. Veja se você se encaixa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ideal For */}
          <div className="p-8 rounded-2xl bg-card/50 border border-green-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Check className="text-green-500" size={24} />
              </div>
              Ideal para quem
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="p-8 rounded-2xl bg-card/50 border border-red-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <X className="text-red-500" size={24} />
              </div>
              Não indicado para quem
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-muted-foreground">{item}</span>
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
          <Button variant="hero" size="lg">
            Quero uma landing page que converta
          </Button>
        </div>

        {/* Mission Card */}
        <div className="p-8 md:p-12 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Nossa Missão</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Transformar negócios através de landing pages e sites estratégicos que realmente convertem, utilizando design, copy e tecnologia de forma integrada.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <point.icon className="text-primary" size={24} />
                <span className="text-sm text-muted-foreground">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
