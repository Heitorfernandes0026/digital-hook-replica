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
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Cases de <span className="gradient-text">sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de clientes que confiaram em nossa metodologia.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ArrowUpRight className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-border">
                <div className="text-3xl font-bold gradient-text">
                  {item.result}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            Ver todos os cases
            <ArrowUpRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
