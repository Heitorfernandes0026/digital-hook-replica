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
    <section id="depoimentos" className="py-24 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Subtle orange glow accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[20%] left-[5%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.04) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px]"
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
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
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
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Histórias reais de empresários que transformaram seus negócios com nossas landing pages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 15%)',
              }}
            >
              {/* Quote icon */}
              <div 
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity"
                style={{
                  background: 'hsl(30 70% 50% / 0.1)',
                }}
              >
                <Quote style={{ color: 'hsl(30 80% 55%)' }} size={18} />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-white mb-6 italic leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(30 90% 50%) 0%, hsl(25 85% 45%) 100%)',
                    boxShadow: '0 4px 16px hsl(30 90% 50% / 0.3)',
                  }}
                >
                  <span className="text-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/50">
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
