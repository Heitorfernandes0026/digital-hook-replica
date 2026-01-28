import { lazy, Suspense, memo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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

// Minimal loading placeholder - memoized for performance
const SectionLoader = memo(() => (
  <div 
    className="py-24 flex items-center justify-center content-auto" 
    style={{ minHeight: '200px', contain: 'layout paint' }}
  >
    <div 
      className="w-8 h-8 rounded-full animate-spin gpu-accelerated"
      style={{
        border: '2px solid hsl(142 90% 50% / 0.2)',
        borderTopColor: 'hsl(142 90% 50%)',
      }}
      aria-label="Carregando seção..."
    />
  </div>
));

SectionLoader.displayName = "SectionLoader";

const Index = memo(() => {
  return (
    <div className="min-h-screen min-h-[100dvh] relative overflow-x-hidden bg-black">
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
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Pricing />
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
});

Index.displayName = "Index";

export default Index;
