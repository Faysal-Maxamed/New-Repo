"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 text-center sm:p-16 lg:p-20"
        >
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Brand?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Let&apos;s create something extraordinary together. Get in touch
              and start your creative journey today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/contact"
                className="!bg-white !text-violet-700 !shadow-none hover:!brightness-95"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
              >
                View Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
