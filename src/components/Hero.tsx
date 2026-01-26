import neonLogo from "@/assets/neon-logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Full background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={neonLogo} 
          alt="Next Level - Marketing Digital" 
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default Hero;
