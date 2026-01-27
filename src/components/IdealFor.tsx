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
    <section className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.04) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute bottom-[30%] right-[5%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.05) 0%, transparent 60%)',
            filter: 'blur(60px)',
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
            Clareza
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            É{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              pra você?
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Nossa metodologia funciona melhor para perfis específicos. Veja se você se encaixa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ideal For */}
          <div 
            className="p-8 rounded-2xl transition-all duration-500"
            style={{
              background: 'hsl(0 0% 6%)',
              border: '1px solid hsl(142 71% 45% / 0.3)',
            }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'hsl(142 71% 45% / 0.15)',
                }}
              >
                <Check className="text-green-500" size={24} />
              </div>
              Ideal para quem
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div 
            className="p-8 rounded-2xl transition-all duration-500"
            style={{
              background: 'hsl(0 0% 6%)',
              border: '1px solid hsl(0 84% 60% / 0.3)',
            }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'hsl(0 84% 60% / 0.15)',
                }}
              >
                <X className="text-red-500" size={24} />
              </div>
              Não indicado para quem
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-lg text-white/50 mb-6">
            Se você se identificou, estamos prontos para ajudar.
          </p>
          <Button 
            className="group px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, hsl(30 95% 52%) 0%, hsl(25 90% 46%) 100%)',
              color: '#000',
              boxShadow: '0 4px 24px hsl(30 90% 50% / 0.3)',
            }}
            asChild
          >
            <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20ter%20uma%20langind%20page%20que%20converta" target="_blank" rel="noopener noreferrer">
              Quero uma landing page que converta
            </a>
          </Button>
        </div>

        {/* Mission Card */}
        <div 
          className="relative p-8 md:p-12 rounded-2xl overflow-hidden"
          style={{
            background: 'hsl(0 0% 6%)',
            border: '1px solid hsl(0 0% 15%)',
          }}
        >
          <div className="relative">
            <h3 className="text-xl font-semibold mb-4 text-white">Nossa Missão</h3>
            <p className="text-white/50 mb-8 max-w-2xl text-lg">
              Transformar negócios através de landing pages e sites estratégicos que realmente convertem, utilizando design, copy e tecnologia de forma integrada.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'hsl(30 80% 50% / 0.1)',
                      border: '1px solid hsl(30 70% 50% / 0.2)',
                    }}
                  >
                    <point.icon className="text-orange-400" size={20} />
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors">{point.text}</span>
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
