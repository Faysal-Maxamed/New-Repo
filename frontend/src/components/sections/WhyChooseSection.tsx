"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/content";

export function WhyChooseSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-muted/30 py-24">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Guhaad"
          title="Why Choose Us"
          description="We combine creativity, strategy, and dedication to deliver results that matter."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <StaggerItem key={item}>
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5" />
                </motion.div>
                <span className="font-medium">{item}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-6 py-3 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            Trusted by businesses across Somalia & East Africa
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
