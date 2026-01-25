import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "CEO, FitLife Academia",
      content: "A landing page da DigitalPro triplicou nossas matrículas em menos de 30 dias. O investimento se pagou na primeira semana.",
      rating: 5,
    },
    {
      name: "Dra. Marina Costa",
      role: "Diretora, Clínica Dental Premium",
      content: "Profissionalismo impressionante. Entenderam exatamente o que precisávamos e entregaram antes do prazo. Recomendo fortemente.",
      rating: 5,
    },
    {
      name: "Ricardo Santos",
      role: "Consultor Empresarial",
      content: "A metodologia HOOK fez toda diferença. Minha taxa de conversão saltou de 2% para 8% em poucas semanas.",
      rating: 5,
    },
    {
      name: "Ana Paula Mendes",
      role: "Produtora de Infoprodutos",
      content: "Já tinha tentado outras agências, mas só a DigitalPro entregou resultados reais. Meu faturamento dobrou com a nova página de vendas.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            O que nossos clientes <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de empresários que transformaram seus negócios com nossas landing pages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
