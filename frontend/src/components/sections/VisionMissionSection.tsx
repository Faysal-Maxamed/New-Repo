"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { companyInfo } from "@/data/content";

export function VisionMissionSection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-24">
      <AnimatedBackground variant="section" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Purpose"
          title="Vision & Mission"
          description={companyInfo.whoWeAre}
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {companyInfo.vision}
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl" />
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {companyInfo.mission}
                </p>
              </div>
              <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
