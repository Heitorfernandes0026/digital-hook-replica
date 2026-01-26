import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Briefcase, Clock, TrendingUp, Users } from "lucide-react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos entregues", icon: Briefcase, color: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:text-cyan-300" },
    { value: "2 dias", label: "Tempo médio de entrega", icon: Clock, color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,1)] group-hover:text-orange-300" },
    { value: "+300%", label: "Aumento em conversões", icon: TrendingUp, color: "text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)] group-hover:text-pink-300" },
    { value: "100%", label: "Clientes satisfeitos", icon: Users, color: "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:text-yellow-300" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ 
        backgroundImage: `url(${neonLogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white max-w-4xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">Domine</span> o seu mercado com{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.8)]">
              sites e landing pages
            </span>{" "}
            de alta conversão
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Transforme visitantes em clientes com páginas que encantam e convertem
          </p>

          {/* CTA Buttons with neon hover effect */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(34,211,238,0.4)] hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.6),0_0_60px_rgba(234,179,8,0.4)] hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5531975911116?text=Olá,%20gostaria%20de%20ver%20os%20cases%20de%20sucesso" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2" size={20} />
                Ver cases de sucesso
              </a>
            </Button>
          </div>

          {/* Stats Grid - Professional cards with icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-black/60 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                
                {/* Value */}
                <div className={`text-2xl md:text-3xl font-bold mb-1 transition-colors ${stat.color}`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
