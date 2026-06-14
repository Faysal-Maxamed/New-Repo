"use client";

import { motion } from "framer-motion";
import { trustedBrands } from "@/data/content";

export function BrandsMarquee() {
  const doubled = [...trustedBrands, ...trustedBrands];

  return (
    <section className="overflow-hidden border-y border-border bg-muted/40 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by leading brands
      </p>
      <div className="relative">
        <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-12 px-6"
        >
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-accent"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
