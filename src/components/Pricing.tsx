import { Check, X, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "ESSENCIAL",
      price: "R$ 59,90",
      period: "/mês",
      highlight: false,
      cta: "Contratar Agora",
      features: {
        hosting: true,
        copyAI: true,
        design: true,
        pages: "1",
        emails: "1",
        emailSignature: false,
        domain: false,
        ssl: true,
        backups: false,
        monitoring: false,
        maintenance: "Básica",
        priority: false,
        setupFee: "—",
      },
    },
    {
      name: "PROFISSIONAL",
      price: "R$ 99,90",
      period: "/mês",
      highlight: true,
      badge: "Mais contratado — Melhor custo-benefício",
      cta: "Contratar Agora",
      features: {
        hosting: true,
        copyAI: true,
        design: true,
        pages: "1",
        emails: "2",
        emailSignature: true,
        domain: true,
        ssl: true,
        backups: true,
        monitoring: true,
        maintenance: "Intermediária",
        priority: true,
        setupFee: "Isento",
      },
    },
    {
      name: "PREMIUM",
      price: "R$ 129,90",
      period: "/mês",
      highlight: false,
      cta: "Contratar Agora",
      features: {
        hosting: true,
        copyAI: true,
        design: true,
        pages: "2",
        emails: "5 por domínio",
        emailSignature: true,
        domain: true,
        ssl: true,
        backups: true,
        monitoring: true,
        maintenance: "Completa",
        priority: true,
        setupFee: "Isento",
      },
    },
  ];

  const featureLabels = [
    { key: "hosting", label: "Hospedagem do site" },
    { key: "copyAI", label: "Copy persuasiva com IA" },
    { key: "design", label: "Design moderno (Mobile First)" },
    { key: "pages", label: "Landing pages / sites" },
    { key: "emails", label: "E-mails profissionais" },
    { key: "emailSignature", label: "Assinatura de E-mail Personalizada" },
    { key: "domain", label: "Domínio" },
    { key: "ssl", label: "SSL (HTTPS)" },
    { key: "backups", label: "Backups" },
    { key: "monitoring", label: "Monitoramento do site" },
    { key: "maintenance", label: "Manutenção técnica" },
    { key: "priority", label: "Atendimento prioritário" },
    { key: "setupFee", label: "Taxa de setup" },
  ];

  const renderFeatureValue = (value: boolean | string, isHighlighted: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isHighlighted ? "bg-primary/20" : "bg-emerald-500/20"}`}>
          <Check className={`w-4 h-4 ${isHighlighted ? "text-primary" : "text-emerald-500"}`} />
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-muted/30">
          <X className="w-4 h-4 text-muted-foreground/40" />
        </div>
      );
    }
    return (
      <span className={`text-sm font-semibold ${isHighlighted ? "text-primary" : "text-foreground"}`}>
        {value}
      </span>
    );
  };

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Compare os planos e escolha a <span className="gradient-text">melhor solução digital</span> para sua empresa
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Todos os planos incluem hospedagem, site profissional, design moderno e suporte técnico para que você não precise se preocupar com tecnologia.
          </p>
        </div>

        {/* Pricing Table - Desktop */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="rounded-3xl border border-border/50 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4">
              <div className="p-8 flex items-end">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  Recursos
                </span>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 text-center relative ${
                    plan.highlight
                      ? "bg-gradient-to-b from-primary/15 to-primary/5"
                      : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
                  )}
                  <h3 className={`text-lg font-bold tracking-wide mb-3 ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                    {plan.name}
                    {plan.highlight && <Star className="w-4 h-4 inline-block ml-2 text-primary fill-primary" />}
                  </h3>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className={`text-2xl font-extrabold ${plan.highlight ? "gradient-text" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Feature Rows */}
            {featureLabels.map((feature, featureIndex) => (
              <div
                key={feature.key}
                className={`grid grid-cols-4 ${featureIndex % 2 === 0 ? "bg-muted/5" : ""}`}
              >
                <div className="px-8 py-4 flex items-center">
                  <span className="text-sm text-muted-foreground">{feature.label}</span>
                </div>
                {plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`px-8 py-4 flex items-center justify-center ${
                      plan.highlight ? "bg-primary/5" : ""
                    }`}
                  >
                    {renderFeatureValue(
                      plan.features[feature.key as keyof typeof plan.features],
                      plan.highlight
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* CTA Row */}
            <div className="grid grid-cols-4">
              <div className="p-8" />
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 ${plan.highlight ? "bg-primary/5" : ""}`}
                >
                  <Button
                    variant={plan.highlight ? "hero" : "heroOutline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.highlight
                  ? "border-2 border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-xl shadow-primary/10"
                  : "border border-border bg-card/50"
              }`}
            >
              {/* Card Header */}
              <div className={`p-6 text-center relative ${plan.highlight ? "bg-primary/10" : "bg-card/50"}`}>
                <h3 className={`text-xl font-bold tracking-wide mb-2 ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                  {plan.name}
                  {plan.highlight && <Star className="w-4 h-4 inline-block ml-2 text-primary fill-primary" />}
                </h3>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className={`text-3xl font-extrabold ${plan.highlight ? "gradient-text" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground font-medium">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 space-y-3">
                {featureLabels.map((feature) => {
                  const value = plan.features[feature.key as keyof typeof plan.features];
                  const isIncluded = value === true || (typeof value === "string" && value !== "—");
                  
                  return (
                    <div key={feature.key} className="flex items-center justify-between gap-4">
                      <span className={`text-sm ${isIncluded ? "text-foreground" : "text-muted-foreground/60"}`}>
                        {feature.label}
                      </span>
                      <div className="flex-shrink-0">
                        {typeof value === "boolean" ? (
                          value ? (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? "bg-primary/20" : "bg-emerald-500/20"}`}>
                              <Check className={`w-4 h-4 ${plan.highlight ? "text-primary" : "text-emerald-500"}`} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-muted/30">
                              <X className="w-4 h-4 text-muted-foreground/40" />
                            </div>
                          )
                        ) : (
                          <span className={`text-sm font-semibold ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                            {value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Button
                  variant={plan.highlight ? "hero" : "heroOutline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Microcopy */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 max-w-3xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-left">
              <span className="text-foreground font-semibold">Você não precisa entender de tecnologia.</span>{" "}
              Nós cuidamos do seu site, design, conteúdo e manutenção para que tudo funcione com segurança e desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
