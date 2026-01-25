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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a12]">
      {/* Background with lion image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/80 to-transparent z-10" />
        <img 
          src={heroBackground} 
          alt="Background" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">
              Metodologia validada em +50 projetos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Domine o seu mercado com{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              landing pages
            </span>{" "}
            de alta conversão
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-400 max-w-xl mb-8">
            Cada seção tem um motivo. Cada botão tem um objetivo. Estratégia, copy e design pensados para conversão desde o primeiro scroll.
          </p>

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
              className="border-white/20 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-6 text-base rounded-lg"
            >
              <Play className="mr-2" size={20} />
              Ver cases de sucesso
            </Button>
          </div>

          {/* Features row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-gray-400" size={16} />
                {feature}
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 whitespace-pre-line">
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
