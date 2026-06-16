"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo, coreValues } from "@/data/content";

export function AboutPreviewSection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Company Overview"
              title="Who We Are"
              description={companyInfo.overview}
              align="left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {coreValues.slice(0, 4).map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-2 text-2xl font-bold gradient-text">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
