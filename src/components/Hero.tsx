import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos\nentregues", color: "text-purple-400" },
    { value: "2 dias", label: "Tempo médio de\nentrega", color: "text-orange-400" },
    { value: "+300%", label: "Aumento em\nconversões", color: "text-purple-400" },
    { value: "100%", label: "Clientes\nsatisfeitos", color: "text-orange-400" },
  ];

  const features = [
    "Entrega em até 2 dias",
    "100% personalizada",
    "+50 projetos entregues",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a0a12] contain-layout contain-paint">
      {/* Background with lion image - optimized loading */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-right"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Domine</span> o seu mercado com{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              sites e landing pages
            </span>{" "}
            de alta conversão
          </h1>

          {/* CTA Buttons with neon hover effect */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Button 
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(236,72,153,0.4)] hover:scale-105"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 bg-white/5 text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_50px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <Play className="mr-2" size={20} />
              Ver cases de sucesso
            </Button>
          </div>

          {/* Features row - Neon border effect */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3),inset_0_0_10px_rgba(168,85,247,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_40px_rgba(236,72,153,0.3)]"
              >
                <Check className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" size={16} />
                <span className="text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid - Neon filled cards like lion's mane */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-5 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_80px_rgba(236,72,153,0.3)]"
                style={{
                  background: index % 2 === 0 
                    ? 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, rgba(139,92,246,0.35) 100%)'
                    : 'linear-gradient(135deg, rgba(236,72,153,0.35) 0%, rgba(168,85,247,0.4) 50%, rgba(192,38,211,0.3) 100%)',
                  boxShadow: '0 0 25px rgba(168,85,247,0.4), 0 0 50px rgba(236,72,153,0.25), inset 0 0 30px rgba(168,85,247,0.2)'
                }}
              >
                {/* Animated glow overlay */}
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 whitespace-pre-line font-medium drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
                    {stat.label}
                  </div>
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
