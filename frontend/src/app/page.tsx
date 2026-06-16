import { HeroSection } from "@/components/sections/HeroSection";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FutureGoalsSection } from "@/components/sections/FutureGoalsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsMarquee />
      <AboutPreviewSection />
      <VisionMissionSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseSection />
      <ProjectsPreview />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FutureGoalsSection />
      <CTASection />
    </>
  );
}
