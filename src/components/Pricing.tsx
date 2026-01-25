import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 59,90",
      period: "/mês",
      highlight: false,
      cta: "Escolher este plano",
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
      name: "Profissional",
      price: "R$ 99,90",
      period: "/mês",
      highlight: true,
      badge: "Mais contratado — Melhor custo-benefício",
      cta: "Quero o melhor custo-benefício",
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
      name: "Premium",
      price: "R$ 129,90",
      period: "/mês",
      highlight: false,
      cta: "Quero a solução completa",
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
    { key: "emailSignature", label: "Assinatura de e-mail (personalizada)" },
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
        <Check className={`w-5 h-5 mx-auto ${isHighlighted ? "text-primary" : "text-green-500"}`} />
      ) : (
        <X className="w-5 h-5 mx-auto text-muted-foreground/50" />
      );
    }
    return <span className={`text-sm font-medium ${isHighlighted ? "text-foreground" : "text-muted-foreground"}`}>{value}</span>;
  };

  return (
    <section id="planos" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.08)_0%,transparent_60%)]" />

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
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
          {/* Header Row */}
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-6 bg-card/50">
              <span className="text-lg font-semibold text-foreground">Recursos</span>
            </div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 text-center relative ${
                  plan.highlight
                    ? "bg-primary/10 border-x-2 border-t-2 border-primary"
                    : "bg-card/30"
                }`}
              >
                {plan.highlight && plan.badge && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-semibold whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                  {plan.name}
                  {plan.highlight && <Star className="w-5 h-5 inline-block ml-2 text-primary fill-primary" />}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? "gradient-text" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {featureLabels.map((feature, featureIndex) => (
            <div
              key={feature.key}
              className={`grid grid-cols-4 ${
                featureIndex < featureLabels.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 bg-card/50 flex items-center">
                <span className="text-sm text-muted-foreground">{feature.label}</span>
              </div>
              {plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className={`p-4 flex items-center justify-center ${
                    plan.highlight
                      ? "bg-primary/5 border-x-2 border-primary"
                      : featureIndex % 2 === 0
                      ? "bg-card/20"
                      : "bg-card/30"
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

          {/* CTA Row */}
          <div className="grid grid-cols-4 border-t border-border">
            <div className="p-6 bg-card/50" />
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 ${
                  plan.highlight
                    ? "bg-primary/10 border-x-2 border-b-2 border-primary rounded-b-xl"
                    : "bg-card/30"
                }`}
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

        {/* Pricing Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.highlight
                  ? "border-2 border-primary bg-primary/5"
                  : "border border-border bg-card/30"
              }`}
            >
              {/* Card Header */}
              <div className={`p-6 text-center relative ${plan.highlight ? "bg-primary/10" : "bg-card/50"}`}>
                {plan.highlight && plan.badge && (
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-primary" : "text-foreground"}`}>
                  {plan.name}
                  {plan.highlight && <Star className="w-5 h-5 inline-block ml-2 text-primary fill-primary" />}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? "gradient-text" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
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
                            <Check className={`w-5 h-5 ${plan.highlight ? "text-primary" : "text-green-500"}`} />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50" />
                          )
                        ) : (
                          <span className={`text-sm font-medium ${plan.highlight ? "text-primary" : "text-muted-foreground"}`}>
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
          <div className="inline-flex items-start gap-3 p-6 rounded-xl bg-card/50 border border-border max-w-3xl">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-left">
              <span className="text-foreground font-medium">Você não precisa entender de tecnologia.</span>{" "}
              Nós cuidamos do seu site, design, conteúdo e manutenção para que tudo funcione com segurança e desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
