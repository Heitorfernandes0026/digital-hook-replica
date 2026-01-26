import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Briefcase, Clock, TrendingUp, Users } from "lucide-react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos entregues", icon: Briefcase, color: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
    { value: "2 dias", label: "Tempo médio de entrega", icon: Clock, color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,1)]" },
    { value: "+300%", label: "Aumento em conversões", icon: TrendingUp, color: "text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" },
    { value: "100%", label: "Clientes satisfeitos", icon: Users, color: "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px]" />
      </div>

      {/* Logo Image - Fully visible */}
      <div className="relative z-10 w-full max-w-4xl px-4 mb-12">
        <img 
          src={neonLogo} 
          alt="Next Level - Marketing Digital" 
          className="w-full h-auto"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Content below the logo */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white max-w-4xl">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Domine</span> o seu mercado com{" "}
          <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            sites e landing pages
          </span>{" "}
          de alta conversão
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
          Transforme visitantes em clientes com páginas que encantam e convertem
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:scale-105"
            asChild
          >
            <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
          <Button 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:scale-105"
            asChild
          >
            <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20ver%20os%20cases%20de%20sucesso" target="_blank" rel="noopener noreferrer">
              <Play className="mr-2" size={20} />
              Ver cases de sucesso
            </a>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
