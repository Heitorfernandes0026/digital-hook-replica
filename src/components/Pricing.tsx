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
        setupFee: "Isento",
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
          style={{ background: isHighlighted ? 'hsl(30 80% 50% / 0.2)' : 'hsl(142 71% 45% / 0.2)' }}
        >
          <Check className="w-4 h-4" style={{ color: isHighlighted ? 'hsl(30 80% 55%)' : 'hsl(142 71% 45%)' }} />
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'hsl(0 0% 20%)' }}>
          <X className="w-4 h-4 text-white/30" />
        </div>
      );
    }
    return (
      <span className="text-sm font-semibold" style={{ color: isHighlighted ? 'hsl(30 80% 55%)' : 'white' }}>
        {value}
      </span>
    );
  };

  return (
    <section id="planos" className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, hsl(30 100% 50% / 0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(30 70% 50% / 0.1)',
              color: 'hsl(30 80% 60%)',
              border: '1px solid hsl(30 60% 50% / 0.2)',
            }}
          >
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Compare os planos e escolha a{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              melhor solução digital
            </span>
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-lg">
            Todos os planos incluem hospedagem, site profissional, design moderno e suporte técnico para que você não precise se preocupar com tecnologia.
          </p>
        </div>

        {/* Pricing Table - Desktop */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'hsl(0 0% 5%)',
              border: '1px solid hsl(0 0% 15%)',
            }}
          >
            {/* Header Row */}
            <div className="grid grid-cols-4">
              <div className="p-8 flex items-end">
                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">
                  Recursos
                </span>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-8 text-center relative"
                  style={{
                    background: plan.highlight ? 'linear-gradient(180deg, hsl(30 80% 50% / 0.1) 0%, hsl(30 80% 50% / 0.02) 100%)' : 'transparent',
                  }}
                >
                  {plan.highlight && (
                    <div 
                      className="absolute inset-x-0 top-0 h-1"
                      style={{
                        background: 'linear-gradient(90deg, hsl(30 90% 50%) 0%, hsl(35 100% 55%) 100%)',
                      }}
                    />
                  )}
                  <h3 className={`text-lg font-bold tracking-wide ${plan.highlight ? "mb-1" : "mb-3"}`} style={{ color: plan.highlight ? 'hsl(30 80% 55%)' : 'white' }}>
                    {plan.name}
                    {plan.highlight && <Star className="w-4 h-4 inline-block ml-2" style={{ color: 'hsl(30 80% 55%)', fill: 'hsl(30 80% 55%)' }} />}
                  </h3>
                  {plan.highlight && (
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
                      style={{
                        background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
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
                        background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      } : { color: 'white' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/50 text-sm font-medium">{plan.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 20%), transparent)' }} />

            {/* Feature Rows */}
            {featureLabels.map((feature, featureIndex) => (
              <div
                key={feature.key}
                className="grid grid-cols-4"
                style={{ background: featureIndex % 2 === 0 ? 'hsl(0 0% 4%)' : 'transparent' }}
              >
                <div className="px-8 py-4 flex items-center">
                  <span className="text-sm text-white/50">{feature.label}</span>
                </div>
                {plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className="px-8 py-4 flex items-center justify-center"
                    style={{
                      background: plan.highlight ? 'hsl(30 80% 50% / 0.03)' : 'transparent',
                    }}
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
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 20%), transparent)' }} />

            {/* CTA Row */}
            <div className="grid grid-cols-4">
              <div className="p-8" />
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-8"
                  style={{
                    background: plan.highlight ? 'hsl(30 80% 50% / 0.03)' : 'transparent',
                  }}
                >
                  <Button
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
                    style={plan.highlight ? {
                      background: 'linear-gradient(135deg, hsl(30 95% 52%) 0%, hsl(25 90% 46%) 100%)',
                      color: '#000',
                      boxShadow: '0 4px 20px hsl(30 90% 50% / 0.3)',
                    } : {
                      background: 'transparent',
                      color: 'hsl(30 80% 60%)',
                      border: '1px solid hsl(30 80% 50% / 0.4)',
                    }}
                    asChild
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
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
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'hsl(0 0% 6%)',
                border: plan.highlight ? '2px solid hsl(30 80% 50%)' : '1px solid hsl(0 0% 15%)',
                boxShadow: plan.highlight ? '0 0 40px hsl(30 90% 50% / 0.15)' : 'none',
              }}
            >
              {/* Card Header */}
              <div 
                className="p-6 text-center relative"
                style={{
                  background: plan.highlight ? 'hsl(30 80% 50% / 0.08)' : 'transparent',
                }}
              >
                <h3 className={`text-xl font-bold tracking-wide ${plan.highlight ? "mb-1" : "mb-2"}`} style={{ color: plan.highlight ? 'hsl(30 80% 55%)' : 'white' }}>
                  {plan.name}
                  {plan.highlight && <Star className="w-4 h-4 inline-block ml-2" style={{ color: 'hsl(30 80% 55%)', fill: 'hsl(30 80% 55%)' }} />}
                </h3>
                {plan.highlight && (
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
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
                      background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    } : { color: 'white' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/50 font-medium">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 space-y-3">
                {featureLabels.map((feature) => {
                  const value = plan.features[feature.key as keyof typeof plan.features];
                  const isIncluded = value === true || (typeof value === "string" && value !== "—");
                  
                  return (
                    <div key={feature.key} className="flex items-center justify-between gap-4">
                      <span className={`text-sm ${isIncluded ? "text-white" : "text-white/40"}`}>
                        {feature.label}
                      </span>
                      <div className="flex-shrink-0">
                        {typeof value === "boolean" ? (
                          value ? (
                            <div 
                              className="w-6 h-6 rounded-full flex items-center justify-center"
                              style={{ background: plan.highlight ? 'hsl(30 80% 50% / 0.2)' : 'hsl(142 71% 45% / 0.2)' }}
                            >
                              <Check className="w-4 h-4" style={{ color: plan.highlight ? 'hsl(30 80% 55%)' : 'hsl(142 71% 45%)' }} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'hsl(0 0% 20%)' }}>
                              <X className="w-4 h-4 text-white/30" />
                            </div>
                          )
                        ) : (
                          <span className="text-sm font-semibold" style={{ color: plan.highlight ? 'hsl(30 80% 55%)' : 'white' }}>
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
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
                  style={plan.highlight ? {
                    background: 'linear-gradient(135deg, hsl(30 95% 52%) 0%, hsl(25 90% 46%) 100%)',
                    color: '#000',
                    boxShadow: '0 4px 20px hsl(30 90% 50% / 0.3)',
                  } : {
                    background: 'transparent',
                    color: 'hsl(30 80% 60%)',
                    border: '1px solid hsl(30 80% 50% / 0.4)',
                  }}
                  asChild
                >
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Microcopy */}
        <div className="mt-12 text-center">
          <div 
            className="inline-flex items-start gap-4 p-6 rounded-2xl max-w-3xl"
            style={{
              background: 'hsl(0 0% 6%)',
              border: '1px solid hsl(0 0% 15%)',
            }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'hsl(30 80% 50% / 0.1)',
              }}
            >
              <Check className="w-6 h-6" style={{ color: 'hsl(30 80% 55%)' }} />
            </div>
            <p className="text-white/50 text-left">
              <span className="text-white font-semibold">Você não precisa entender de tecnologia.</span>{" "}
              Nós cuidamos do seu site, design, conteúdo e manutenção para que tudo funcione com segurança e desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
