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
    <section id="servicos" className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.05) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.04) 0%, transparent 60%)',
            filter: 'blur(50px)',
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
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Tudo que você precisa para{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              converter mais
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Soluções completas em landing pages e sites, do planejamento à entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 15%)',
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 40px hsl(30 90% 50% / 0.1)',
                }}
              />
              
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
                  boxShadow: '0 8px 24px hsl(30 90% 50% / 0.3)',
                }}
              >
                <service.icon className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
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
