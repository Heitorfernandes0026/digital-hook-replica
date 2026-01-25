import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";

// Lazy load components below the fold for faster initial load
const Services = lazy(() => import("@/components/Services"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const IdealFor = lazy(() => import("@/components/IdealFor"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const HookMethod = lazy(() => import("@/components/HookMethod"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <WhyChooseUs />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <IdealFor />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <AboutUs />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <HookMethod />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Pricing />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        </main>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
