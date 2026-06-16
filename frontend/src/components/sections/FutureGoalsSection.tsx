"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/content";

export function FutureGoalsSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 sm:p-16"
        >
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-[80px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/15 blur-[80px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl gradient-bg shadow-xl shadow-accent/25 lg:mb-0 lg:mr-10"
            >
              <Rocket className="h-10 w-10 text-white" />
            </motion.div>

            <div className="flex-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Future Goals
              </span>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Building the Future of{" "}
                <span className="gradient-text">Creative Excellence</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                {companyInfo.futureGoals}
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
