const AboutUs = () => {
  return (
    <section 
      id="sobre"
      className="py-24 relative overflow-hidden" 
      style={{ background: '#0B0B0B' }}
      aria-labelledby="about-heading"
    >
      {/* Subtle orange glow accents - no filter:blur */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[40%] right-[15%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, hsl(30 100% 50% / 0.06) 0%, hsl(30 100% 50% / 0.01) 40%, transparent 70%)',
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
            Sobre Nós
          </span>
          <h2 
            id="about-heading"
            className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Especialistas em{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 50%, hsl(25 90% 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              conversão digital
            </span>
          </h2>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'hsl(0 0% 75%)' }}>
            <p 
              className="p-6 rounded-xl transition-all duration-500 hover:border-orange-500/30"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)',
              }}
            >
              A NextLevel nasceu da necessidade de criar landing pages e sites que realmente funcionam. Depois de anos trabalhando com marketing digital, percebemos que a maioria das páginas não converte porque falta estratégia por trás do design.
            </p>
            <p 
              className="p-6 rounded-xl transition-all duration-500 hover:border-orange-500/30"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)',
              }}
            >
              Desenvolvemos uma metodologia própria que une copy persuasiva, design focado em conversão e tecnologia de ponta. O resultado? Páginas e sites que transformam visitantes em clientes de forma consistente.
            </p>
            <p 
              className="p-6 rounded-xl transition-all duration-500 hover:border-orange-500/30"
              style={{
                background: 'hsl(0 0% 6%)',
                border: '1px solid hsl(0 0% 18%)',
              }}
            >
              Cada projeto é tratado de forma única, com análise profunda do seu negócio, público-alvo e objetivos. Não fazemos páginas genéricas — criamos{' '}
              <span 
                className="font-semibold"
                style={{
                  background: 'linear-gradient(135deg, hsl(30 95% 55%) 0%, hsl(35 100% 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                máquinas de conversão personalizadas
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
