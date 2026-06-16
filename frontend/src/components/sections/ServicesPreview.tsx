"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Megaphone,
  Monitor,
  Camera,
  PenTool,
  Share2,
  Video,
  Film,
  FileText,
  Target,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/content";

const iconMap = {
  Palette,
  Megaphone,
  Monitor,
  Camera,
  PenTool,
  Share2,
  Video,
  Film,
  FileText,
  Target,
};

export function ServicesPreview() {
  return (
    <AnimatedSection className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="What We Do"
          description="From brand identity to digital campaigns, we offer end-to-end creative solutions for your business."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <motion.div
                    className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/5"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-sm font-semibold leading-tight">{service.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
