"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { TextReveal } from "@/components/ui/ScrollAnimations";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { getWhatsAppLink } from "@/lib/constants";
import { companyInfo } from "@/data/content";

const services = [
  { label: "Branding", emoji: "✦" },
  { label: "Marketing", emoji: "◈" },
  { label: "Video", emoji: "▶" },
  { label: "Web Design", emoji: "◇" },
  { label: "Photography", emoji: "◎" },
];

const quickStats = [
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "5+", label: "Years" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <AnimatedBackground variant="hero" />

      {/* Side accent beams */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8 lg:py-20">
        {/* Content */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-card/60 px-5 py-2 text-sm shadow-lg shadow-accent/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-medium text-foreground/90">
              Full-Service Creative Agency
            </span>
            <span className="hidden text-muted-foreground sm:inline">·</span>
            <span className="hidden text-muted-foreground sm:inline">Mogadishu, Somalia</span>
          </motion.div>

          <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <span className="gradient-text animate-gradient-shift bg-[length:200%_auto]">
              <TextReveal text="Guhaad" />
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-block"
            >
              Creatives & Advert
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full gradient-bg opacity-60 lg:-bottom-3"
              />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            {companyInfo.overview}
          </motion.p>

          {/* Quick stats — mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex justify-center gap-6 lg:hidden"
          >
            {quickStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  className="text-2xl font-bold gradient-text"
                >
                  {stat.value}
                </motion.p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {services.map((tag, i) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.07 }}
                whileHover={{ scale: 1.06, y: -3 }}
                className="group flex items-center gap-1.5 rounded-full border border-border/80 bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <span className="text-accent/70 transition-colors group-hover:text-accent">
                  {tag.emoji}
                </span>
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              href={getWhatsAppLink("Hi! I'd like to start a project with Guhaad Creatives & Advert.")}
              external
              className="min-w-[200px] shadow-lg shadow-accent/25"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="secondary" className="min-w-[180px]">
              View Our Work
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <div className="flex -space-x-2">
              {["from-violet-500", "from-blue-500", "from-rose-500", "from-amber-500"].map((color, i) => (
                <motion.div
                  key={color}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${color} to-purple-700 text-[10px] font-bold text-white`}
                >
                  {String.fromCharCode(65 + i)}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                Trusted by <strong className="font-semibold text-foreground">50+</strong> businesses
              </span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <div className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
              <Zap className="h-3.5 w-3.5 text-accent" />
              <span>Fast delivery guaranteed</span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/70">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
