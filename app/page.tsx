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
      <main id="main-content" aria-label="Main content">
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
