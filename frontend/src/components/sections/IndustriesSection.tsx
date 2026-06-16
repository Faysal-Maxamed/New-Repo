"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  HandHeart,
  Landmark,
  Cpu,
  Hotel,
  Store,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/content";

const industryIcons = [
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  HandHeart,
  Landmark,
  Cpu,
  Hotel,
  Store,
];

export function IndustriesSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-muted/30 py-24">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(124,58,237,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(37,99,235,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(124,58,237,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Industries"
          title="Industries We Serve"
          description="We partner with organizations across diverse sectors to deliver tailored creative solutions."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industryIcons[i];
            return (
              <StaggerItem key={industry}>
                <motion.div
                  whileHover={{ y: -6, rotateY: 5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-medium">{industry}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
