const AboutUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle local overlay for depth variation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-pink-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-purple-600/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Especialistas em <span className="gradient-text">conversão digital</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p className="glass p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-500">
              A DigitalPro nasceu da necessidade de criar landing pages e sites que realmente funcionam. Depois de anos trabalhando com marketing digital, percebemos que a maioria das páginas não converte porque falta estratégia por trás do design.
            </p>
            <p className="glass p-6 rounded-xl border border-border/30 hover:border-secondary/30 transition-all duration-500">
              Desenvolvemos uma metodologia própria que une copy persuasiva, design focado em conversão e tecnologia de ponta. O resultado? Páginas e sites que transformam visitantes em clientes de forma consistente.
            </p>
            <p className="glass p-6 rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-500">
              Cada projeto é tratado de forma única, com análise profunda do seu negócio, público-alvo e objetivos. Não fazemos páginas genéricas — criamos <span className="text-foreground font-semibold gradient-text">máquinas de conversão personalizadas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
