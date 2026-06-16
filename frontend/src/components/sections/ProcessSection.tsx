"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="A proven 7-step process that delivers exceptional creative results every time."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-8">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <span className="text-sm font-bold text-accent">{item.step}</span>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-bg text-lg font-bold text-white shadow-lg shadow-accent/25"
                >
                  {item.step}
                </motion.div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
