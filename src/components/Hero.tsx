import heroBg from "@/assets/hero-bg-extended.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
    </section>
  );
};

export default Hero;
