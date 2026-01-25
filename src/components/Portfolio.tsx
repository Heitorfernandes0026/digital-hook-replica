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
      gradient: "from-primary to-secondary",
    },
    {
      title: "Academia FitLife",
      category: "Fitness",
      result: "+450%",
      metric: "novos alunos/mês",
      description: "Site institucional com sistema de matrícula integrado.",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Consultoria Empresarial",
      category: "B2B",
      result: "+320%",
      metric: "leads qualificados",
      description: "Landing page para captação de leads de alto ticket.",
      gradient: "from-accent to-primary",
    },
    {
      title: "Curso de Marketing Digital",
      category: "Educação",
      result: "+180%",
      metric: "em vendas",
      description: "Página de vendas para infoproduto de marketing.",
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(280_80%_60%/0.08)_0%,transparent_60%)]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-[100px] animate-flow-2" />
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

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer hover:shadow-[0_0_50px_hsl(var(--primary)/0.15)]"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex items-start justify-between mb-6 relative">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <ArrowUpRight className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 relative">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-border/50 relative">
                <div className="text-4xl font-bold gradient-text group-hover:scale-105 transition-transform origin-left">
                  {item.result}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg" className="group">
            Ver todos os cases
            <ArrowUpRight className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
