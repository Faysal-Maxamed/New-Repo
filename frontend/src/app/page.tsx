import { HeroSection } from "@/components/sections/HeroSection";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsMarquee />
      <StatsSection />
      <ServicesPreview />
      <ProjectsPreview />
      <BlogPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
