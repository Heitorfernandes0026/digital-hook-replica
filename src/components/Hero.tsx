import heroBg from "@/assets/hero-bg-nextlevel.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
    </section>
  );
};

export default Hero;
