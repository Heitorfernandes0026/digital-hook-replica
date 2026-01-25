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
    <section id="portfolio" className="py-24 relative overflow-hidden cosmic-section cosmic-section-1">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(280_60%_40%/0.15)_0%,transparent_60%)]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-pink-600/20 to-transparent rounded-full blur-[100px] animate-flow-2" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/15 to-transparent rounded-full blur-[80px] animate-flow-1" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Cases de <span className="gradient-text">sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Resultados reais de clientes que confiaram em nossa metodologia.
          </p>
        </div>

        {/* Cases Grid with Neon Border Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl neon-card cursor-pointer transition-all duration-500"
            >
              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_16px_hsl(var(--primary)/0.4)] group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)] transition-shadow duration-300">
                    <ArrowUpRight className="text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {item.description}
                </p>
                
                <div className="pt-6 border-t border-border/30">
                  <div 
                    className="text-4xl font-bold group-hover:scale-105 transition-transform origin-left"
                    style={{
                      background: 'linear-gradient(90deg, hsl(217 91% 60%), hsl(280 80% 60%), hsl(320 80% 55%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 8px hsl(217 91% 60% / 0.4))'
                    }}
                  >
                    {item.result}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with neon glow */}
        <div className="text-center">
          <Button 
            variant="heroOutline" 
            size="lg" 
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Ver todos os cases
              <ArrowUpRight className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;