import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Briefcase, Clock, TrendingUp, Users } from "lucide-react";
import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos entregues", icon: Briefcase, color: "text-white group-hover:text-purple-300" },
    { value: "2 dias", label: "Tempo médio de entrega", icon: Clock, color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,1)] drop-shadow-[0_0_20px_rgba(249,115,22,0.8)] drop-shadow-[0_0_40px_rgba(249,115,22,0.5)] group-hover:text-orange-300" },
    { value: "+300%", label: "Aumento em conversões", icon: TrendingUp, color: "text-white group-hover:text-purple-300" },
    { value: "100%", label: "Clientes satisfeitos", icon: Users, color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,1)] drop-shadow-[0_0_20px_rgba(249,115,22,0.8)] drop-shadow-[0_0_40px_rgba(249,115,22,0.5)] group-hover:text-orange-300" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black contain-layout contain-paint">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a12] to-black" />
      
      {/* Subtle neon glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          {/* Neon Logo */}
          <div className="mb-10 w-full max-w-3xl">
            <img 
              src={neonLogo} 
              alt="Next Level - Marketing Digital" 
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white max-w-4xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.7)]">Domine</span> o seu mercado com{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,146,60,0.7)]">
              sites e landing pages
            </span>{" "}
            de alta conversão
          </h1>

          {/* CTA Buttons with neon hover effect */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(236,72,153,0.4)] hover:scale-105"
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
                className="group p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
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
