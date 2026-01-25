import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import IdealFor from "@/components/IdealFor";
import AboutUs from "@/components/AboutUs";
import HookMethod from "@/components/HookMethod";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import cosmicBackground from "@/assets/cosmic-background.jpeg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{ '--cosmic-bg-image': `url(${cosmicBackground})` } as React.CSSProperties}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <IdealFor />
          <AboutUs />
          <HookMethod />
          <Pricing />
          <Portfolio />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
