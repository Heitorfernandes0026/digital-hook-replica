import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos\nentregues", color: "text-purple-400" },
    { value: "7 dias", label: "Tempo médio de\nentrega", color: "text-orange-400" },
    { value: "+300%", label: "Aumento em\nconversões", color: "text-purple-400" },
    { value: "100%", label: "Clientes\nsatisfeitos", color: "text-orange-400" },
  ];

  const features = [
    "Entrega em até 7 dias",
    "100% personalizada",
    "+50 projetos entregues",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a12] contain-layout contain-paint">
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            <span className="text-sm font-medium text-white/90">
              Metodologia validada em +50 projetos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Domine</span> o seu mercado com{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              sites e landing pages
            </span>{" "}
            de alta conversão
          </h1>

          {/* Subheadline - Enhanced visibility */}
          <div className="relative mb-8 p-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-medium">
              Cada seção tem um motivo. Cada botão tem um objetivo.{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Estratégia, copy e design
              </span>{" "}
              pensados para conversão desde o primeiro scroll.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Button 
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold px-8 py-6 text-base rounded-lg"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 bg-white/5 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Ver cases de sucesso
            </Button>
          </div>

          {/* Features row - Enhanced visibility */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
              >
                <Check className="text-green-400 drop-shadow-[0_0_4px_rgba(74,222,128,0.6)]" size={16} />
                <span className="text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm hover:border-white/40 hover:from-white/15 hover:to-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} drop-shadow-[0_0_10px_currentColor]`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 whitespace-pre-line font-medium">
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
