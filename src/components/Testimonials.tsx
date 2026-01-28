import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Fernando Almeida",
      role: "Advogado Trabalhista",
      content: "A landing page da NextLevel triplicou meus atendimentos em menos de 30 dias. O investimento se pagou na primeira semana.",
      rating: 5,
    },
    {
      name: "Dra. Marina Costa",
      role: "Diretora, Clínica Dental Premium",
      content: "Profissionalismo impressionante. Entenderam exatamente o que precisávamos e entregaram antes do prazo. Recomendo fortemente.",
      rating: 5,
    },
    {
      name: "Juliana Ferreira",
      role: "Esteticista, Studio Beleza & Estética",
      content: "A metodologia HOOK fez toda diferença. Minha taxa de conversão saltou de 2% para 8% em poucas semanas.",
      rating: 5,
    },
    {
      name: "Dra. Camila Rodrigues",
      role: "Médica Dermatologista",
      content: "Já tinha tentado outras agências, mas só a NextLevel entregou resultados reais. Meu consultório dobrou o número de pacientes com a nova página.",
      rating: 5,
    },
  ];

  return (
    <section 
      id="depoimentos" 
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle orange glow accents - no filter:blur */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[20%] left-[5%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.06) 0%, hsl(30 100% 50% / 0.01) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(25 90% 50% / 0.08) 0%, hsl(25 90% 50% / 0.02) 40%, transparent 70%)',
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
            Depoimentos
          </span>
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            O que nossos clientes{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              dizem
            </span>
          </h2>
          <p style={{ color: 'hsl(0 0% 70%)' }} className="max-w-2xl mx-auto text-lg">
            Histórias reais de empresários que transformaram seus negócios com nossas landing pages.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6" role="list" aria-label="Depoimentos de clientes">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)',
              }}
              role="listitem"
            >
              {/* Quote icon */}
              <div 
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: 'hsl(30 70% 50% / 0.1)' }}
                aria-hidden="true"
              >
                <Quote style={{ color: 'hsl(30 80% 55%)' }} size={18} aria-hidden="true" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} aria-hidden="true" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-white mb-6 italic leading-relaxed text-lg">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <footer className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
                    boxShadow: '0 4px 16px hsl(30 90% 50% / 0.3)',
                  }}
                  aria-hidden="true"
                >
                  <span className="text-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="font-semibold text-white not-italic">
                    {testimonial.name}
                  </cite>
                  <div className="text-sm" style={{ color: 'hsl(0 0% 70%)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
