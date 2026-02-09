import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "ESSENCIAL",
      price: "R$ 57,90",
      period: "/mês",
      highlight: false,
      cta: "Contratar Agora",
      ctaLink: "https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20o%20plano%20Essencial",
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
      price: "R$ 87,90",
      period: "/mês",
      highlight: true,
      badge: "Mais contratado — Melhor custo-benefício",
      cta: "Contratar Agora",
      ctaLink: "https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20o%20plano%20Profissional",
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
        setupFee: "—",
      },
    },
    {
      name: "PREMIUM",
      price: "R$ 127,90",
      period: "/mês",
      highlight: false,
      cta: "Contratar Agora",
      ctaLink: "https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20contratar%20o%20plano%20Premium",
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
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: isHighlighted ? 'hsl(142 80% 50% / 0.2)' : 'hsl(142 71% 45% / 0.2)' }}
          role="img"
          aria-label="Incluído"
        >
          <Check className="w-4 h-4" style={{ color: isHighlighted ? 'hsl(142 80% 55%)' : 'hsl(142 71% 45%)' }} aria-hidden="true" />
        </div>
      ) : (
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center" 
          style={{ background: 'hsl(0 0% 20%)' }}
          role="img"
          aria-label="Não incluído"
        >
          <X className="w-4 h-4" style={{ color: 'hsl(0 0% 45%)' }} aria-hidden="true" />
        </div>
      );
    }
    return (
      <span className="text-sm font-semibold" style={{ color: isHighlighted ? 'hsl(142 80% 55%)' : 'white' }}>
        {value}
      </span>
    );
  };

  return (
    <section 
      id="planos" 
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="pricing-heading"
    >
      {/* Subtle green glow accents - no filter:blur for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, hsl(142 90% 50% / 0.08) 0%, hsl(142 90% 50% / 0.02) 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(142 70% 50% / 0.1)',
              color: 'hsl(142 85% 65%)',
              border: '1px solid hsl(142 60% 50% / 0.2)',
            }}
          >
            Nossos Planos
          </span>
          <h2 
            id="pricing-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Compare os planos e escolha a{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 50%, hsl(140 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              melhor solução digital
            </span>
          </h2>
          <p style={{ color: 'hsl(0 0% 70%)' }} className="max-w-3xl mx-auto text-lg">
            Todos os planos incluem hospedagem, site profissional, design moderno e suporte técnico para que você não precise se preocupar com tecnologia.
          </p>
        </header>

        {/* Pricing Table - Desktop */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'hsl(0 0% 5%)',
              border: '1px solid hsl(0 0% 18%)',
            }}
            role="table"
            aria-label="Tabela de comparação de planos"
          >
            {/* Header Row */}
            <div className="grid grid-cols-4" role="row">
              <div className="p-8 flex items-end" role="columnheader">
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'hsl(0 0% 55%)' }}>
                  Recursos
                </span>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-8 text-center relative"
                  style={{
                    background: plan.highlight ? 'linear-gradient(180deg, hsl(142 80% 50% / 0.1) 0%, hsl(142 80% 50% / 0.02) 100%)' : 'transparent',
                  }}
                  role="columnheader"
                >
                  {plan.highlight && (
                    <div 
                      className="absolute inset-x-0 top-0 h-1"
                      style={{
                        background: 'linear-gradient(90deg, hsl(142 90% 50%) 0%, hsl(145 100% 55%) 100%)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className={`text-lg font-bold tracking-wide ${plan.highlight ? "mb-1" : "mb-3"}`} style={{ color: plan.highlight ? 'hsl(142 80% 55%)' : 'white' }}>
                    {plan.name}
                    {plan.highlight && <Star className="w-4 h-4 inline-block ml-2" style={{ color: 'hsl(142 80% 55%)', fill: 'hsl(142 80% 55%)' }} aria-hidden="true" />}
                  </h3>
                  {plan.highlight && (
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
                      style={{
                        background: 'linear-gradient(135deg, hsl(142 90% 50%) 0%, hsl(145 85% 45%) 100%)',
                        color: '#000',
                      }}
                    >
                      Mais Popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span 
                      className="text-2xl font-extrabold"
                      style={plan.highlight ? {
                        background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      } : { color: 'white' }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: 'hsl(0 0% 65%)' }} className="text-sm font-medium">{plan.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 25%), transparent)' }} aria-hidden="true" />

            {/* Feature Rows */}
            {featureLabels.map((feature, featureIndex) => (
              <div
                key={feature.key}
                className="grid grid-cols-4"
                style={{ background: featureIndex % 2 === 0 ? 'hsl(0 0% 4%)' : 'transparent' }}
                role="row"
              >
                <div className="px-8 py-4 flex items-center" role="rowheader">
                  <span className="text-sm" style={{ color: 'hsl(0 0% 70%)' }}>{feature.label}</span>
                </div>
                {plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className="px-8 py-4 flex items-center justify-center"
                    style={{
                      background: plan.highlight ? 'hsl(142 80% 50% / 0.03)' : 'transparent',
                    }}
                    role="cell"
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
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 25%), transparent)' }} aria-hidden="true" />

            {/* CTA Row */}
            <div className="grid grid-cols-4" role="row">
              <div className="p-8" role="cell" />
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-8"
                  style={{
                    background: plan.highlight ? 'hsl(142 80% 50% / 0.03)' : 'transparent',
                  }}
                  role="cell"
                >
                  <Button
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
                    style={plan.highlight ? {
                      background: 'linear-gradient(135deg, hsl(142 95% 52%) 0%, hsl(145 90% 46%) 100%)',
                      color: '#000',
                      boxShadow: '0 4px 20px hsl(142 90% 50% / 0.3)',
                    } : {
                      background: 'transparent',
                      color: 'hsl(142 85% 65%)',
                      border: '1px solid hsl(142 80% 50% / 0.5)',
                    }}
                    asChild
                  >
                    <a 
                      href={plan.ctaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Contratar plano ${plan.name} via WhatsApp`}
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="lg:hidden space-y-6" role="list" aria-label="Lista de planos">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'hsl(0 0% 6%)',
                border: plan.highlight ? '2px solid hsl(142 80% 50%)' : '1px solid hsl(0 0% 18%)',
                boxShadow: plan.highlight ? '0 0 40px hsl(142 90% 50% / 0.15)' : 'none',
              }}
              role="listitem"
            >
              {/* Card Header */}
              <header 
                className="p-6 text-center relative"
                style={{
                  background: plan.highlight ? 'hsl(142 80% 50% / 0.08)' : 'transparent',
                }}
              >
                <h3 className={`text-xl font-bold tracking-wide ${plan.highlight ? "mb-1" : "mb-2"}`} style={{ color: plan.highlight ? 'hsl(142 80% 55%)' : 'white' }}>
                  {plan.name}
                  {plan.highlight && <Star className="w-4 h-4 inline-block ml-2" style={{ color: 'hsl(142 80% 55%)', fill: 'hsl(142 80% 55%)' }} aria-hidden="true" />}
                </h3>
                {plan.highlight && (
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2"
                    style={{
                      background: 'linear-gradient(135deg, hsl(142 90% 50%) 0%, hsl(145 85% 45%) 100%)',
                      color: '#000',
                    }}
                  >
                    Mais Popular
                  </span>
                )}
                <div className="flex items-baseline justify-center gap-0.5">
                  <span 
                    className="text-3xl font-extrabold"
                    style={plan.highlight ? {
                      background: 'linear-gradient(135deg, hsl(142 95% 55%) 0%, hsl(145 100% 60%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    } : { color: 'white' }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: 'hsl(0 0% 65%)' }} className="font-medium">{plan.period}</span>
                </div>
              </header>

              {/* Features List */}
              <ul className="p-6 space-y-3">
                {featureLabels.map((feature) => {
                  const value = plan.features[feature.key as keyof typeof plan.features];
                  const isIncluded = value === true || (typeof value === "string" && value !== "—");
                  
                  return (
                    <li key={feature.key} className="flex items-center justify-between gap-4">
                      <span className={`text-sm ${isIncluded ? "text-white" : ""}`} style={{ color: isIncluded ? 'white' : 'hsl(0 0% 55%)' }}>
                        {feature.label}
                      </span>
                      <div className="flex-shrink-0">
                        {typeof value === "boolean" ? (
                          value ? (
                            <div 
                              className="w-6 h-6 rounded-full flex items-center justify-center"
                              style={{ background: plan.highlight ? 'hsl(142 80% 50% / 0.2)' : 'hsl(142 71% 45% / 0.2)' }}
                              role="img"
                              aria-label="Incluído"
                            >
                              <Check className="w-4 h-4" style={{ color: plan.highlight ? 'hsl(142 80% 55%)' : 'hsl(142 71% 45%)' }} aria-hidden="true" />
                            </div>
                          ) : (
                            <div 
                              className="w-6 h-6 rounded-full flex items-center justify-center" 
                              style={{ background: 'hsl(0 0% 20%)' }}
                              role="img"
                              aria-label="Não incluído"
                            >
                              <X className="w-4 h-4" style={{ color: 'hsl(0 0% 45%)' }} aria-hidden="true" />
                            </div>
                          )
                        ) : (
                          <span className="text-sm font-semibold" style={{ color: plan.highlight ? 'hsl(142 80% 55%)' : 'white' }}>
                            {value}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Button
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
                  style={plan.highlight ? {
                    background: 'linear-gradient(135deg, hsl(142 95% 52%) 0%, hsl(145 90% 46%) 100%)',
                    color: '#000',
                    boxShadow: '0 4px 20px hsl(142 90% 50% / 0.3)',
                  } : {
                    background: 'transparent',
                    color: 'hsl(142 85% 65%)',
                    border: '1px solid hsl(142 80% 50% / 0.5)',
                  }}
                  asChild
                >
                  <a 
                    href={plan.ctaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Contratar plano ${plan.name} via WhatsApp`}
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p style={{ color: 'hsl(0 0% 60%)' }} className="text-sm">
            Todos os planos incluem suporte técnico e atualizações de segurança.
          </p>
          <p style={{ color: 'hsl(0 0% 60%)' }} className="text-sm mt-2">
            Dúvidas?{' '}
            <a 
              href="https://wa.me/5531975911116?text=Olá,%20tenho%20dúvidas%20sobre%20os%20planos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: 'hsl(142 85% 65%)' }}
            >
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;