import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { ServicePills } from "@/components/sections/ServicePills";
import { CourseCarousel } from "@/components/sections/CourseCarousel";
import { Steps } from "@/components/sections/Steps";
import { PlacementGrid } from "@/components/sections/PlacementGrid";
import { ProjectCards } from "@/components/sections/ProjectCards";
import { TestimonialGallery } from "@/components/sections/TestimonialGallery";
import { EventsList } from "@/components/sections/EventsList";

export default function Home() {
  return (
    <>
      <MainNav />
      <main id="main-content" aria-label="Main content" className="relative">
        {/* Light gradient background pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-accent/[0.03]" />
          
          {/* Modern mesh gradient pattern - creates organic flowing effect */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(14, 122, 230, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 122, 61, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, rgba(14, 122, 230, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(255, 122, 61, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(14, 122, 230, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 60% 10%, rgba(255, 122, 61, 0.05) 0%, transparent 50%)
              `,
              backgroundSize: '100% 100%',
            }}
          />
          
          {/* Subtle animated shimmer effect */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(14, 122, 230, 0.05) 25%, transparent 50%, rgba(255, 122, 61, 0.05) 75%, transparent 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient 15s ease infinite',
            }}
          />
          
          {/* Noise texture for depth */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <Hero />
        <ServicePills />
        <CourseCarousel />
        <Steps />
        <PlacementGrid />
        <ProjectCards />
        <TestimonialGallery />
        <EventsList />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
