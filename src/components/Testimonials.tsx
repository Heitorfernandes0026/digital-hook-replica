import { Star, Quote } from "lucide-react";

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
    <section id="depoimentos" className="py-24 relative overflow-hidden cosmic-section cosmic-section-2">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(280_60%_40%/0.15)_0%,transparent_60%)]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-[80px] animate-flow-1" />
        <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-gradient-to-l from-pink-600/15 to-transparent rounded-full blur-[60px] animate-flow-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            O que nossos clientes <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Histórias reais de empresários que transformaram seus negócios com nossas landing pages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote className="text-primary" size={18} />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500 drop-shadow-[0_0_4px_hsl(45_92%_50%/0.5)]" size={18} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 italic leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
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
