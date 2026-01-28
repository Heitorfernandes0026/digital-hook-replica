import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const cases = [
    {
      title: "Clínica Dental Premium",
      category: "Saúde",
      result: "+280%",
      metric: "em agendamentos",
      description: "Landing page focada em conversão para clínica odontológica premium.",
    },
    {
      title: "Academia FitLife",
      category: "Fitness",
      result: "+450%",
      metric: "novos alunos/mês",
      description: "Site institucional com sistema de matrícula integrado.",
    },
    {
      title: "Consultoria Empresarial",
      category: "B2B",
      result: "+320%",
      metric: "leads qualificados",
      description: "Landing page para captação de leads de alto ticket.",
    },
    {
      title: "Curso de Marketing Digital",
      category: "Educação",
      result: "+180%",
      metric: "em vendas",
      description: "Página de vendas para infoproduto de marketing.",
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="portfolio-heading"
    >
      {/* Subtle orange glow accents - no filter:blur */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[30%] right-[5%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.08) 0%, hsl(30 100% 50% / 0.02) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.06) 0%, hsl(25 90% 50% / 0.01) 40%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              background: 'hsl(30 70% 50% / 0.1)',
              color: 'hsl(30 85% 65%)', /* Improved contrast */
              border: '1px solid hsl(30 60% 50% / 0.2)',
            }}
          >
            Nosso Portfólio
          </span>
          <h2 
            id="portfolio-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Cases de{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              sucesso
            </span>
          </h2>
          <p style={{ color: 'hsl(0 0% 70%)' }} className="max-w-2xl mx-auto text-lg">
            Resultados reais de clientes que confiaram em nossa metodologia.
          </p>
        </header>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12" role="list" aria-label="Lista de cases de sucesso">
          {cases.map((item, index) => (
            <article
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)',
              }}
              role="listitem"
            >
              {/* Hover glow - using opacity transition */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, hsl(30 90% 50% / 0.05) 0%, transparent 50%)',
                }}
                aria-hidden="true"
              />
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3"
                      style={{
                        background: 'hsl(30 70% 50% / 0.1)',
                        color: 'hsl(30 85% 65%)', /* Improved contrast */
                        border: '1px solid hsl(30 60% 50% / 0.2)',
                      }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-shadow duration-300"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
                      boxShadow: '0 4px 16px hsl(30 90% 50% / 0.3)',
                    }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} aria-hidden="true" />
                  </div>
                </div>
                
                <p className="text-sm mb-6" style={{ color: 'hsl(0 0% 70%)' }}>
                  {item.description}
                </p>
                
                <div className="pt-6 border-t" style={{ borderColor: 'hsl(0 0% 20%)' }}>
                  <div 
                    className="text-4xl font-bold group-hover:scale-105 transition-transform origin-left"
                    style={{
                      background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    aria-label={`Resultado: ${item.result} ${item.metric}`}
                  >
                    {item.result}
                  </div>
                  <div className="text-sm mt-1" style={{ color: 'hsl(0 0% 70%)' }}>
                    {item.metric}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="group relative overflow-hidden px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
              color: '#000',
              boxShadow: '0 4px 20px hsl(30 90% 50% / 0.4)',
            }}
            asChild
          >
            <a 
              href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20ver%20modelos%20de%20landing%20pages" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ver modelos de landing pages via WhatsApp"
            >
              <span className="relative z-10 flex items-center font-bold">
                Ver modelos
                <ArrowUpRight className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} aria-hidden="true" />
              </span>
            </a>
          </Button>
          <Button 
            className="group relative overflow-hidden px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300"
            style={{
              background: 'transparent',
              color: 'hsl(30 85% 65%)', /* Improved contrast */
              border: '1px solid hsl(30 80% 50% / 0.5)',
            }}
            asChild
          >
            <a 
              href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20ver%20todos%20os%20cases" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ver todos os cases de sucesso via WhatsApp"
            >
              <span className="relative z-10 flex items-center">
                Ver todos os cases
                <ArrowUpRight className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} aria-hidden="true" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
