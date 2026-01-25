const AboutUs = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Especialistas em <span className="gradient-text">conversão digital</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              A DigitalPro nasceu da necessidade de criar landing pages e sites que realmente funcionam. Depois de anos trabalhando com marketing digital, percebemos que a maioria das páginas não converte porque falta estratégia por trás do design.
            </p>
            <p>
              Desenvolvemos uma metodologia própria que une copy persuasiva, design focado em conversão e tecnologia de ponta. O resultado? Páginas e sites que transformam visitantes em clientes de forma consistente.
            </p>
            <p>
              Cada projeto é tratado de forma única, com análise profunda do seu negócio, público-alvo e objetivos. Não fazemos páginas genéricas — criamos <span className="text-foreground font-semibold">máquinas de conversão personalizadas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
