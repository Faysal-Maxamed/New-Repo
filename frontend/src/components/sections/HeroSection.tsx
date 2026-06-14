"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-400/25 blur-[130px] animate-pulse-glow dark:bg-accent/20" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-blue-400/20 blur-[100px] animate-pulse-glow dark:bg-blue-500/15" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/15 blur-[90px] dark:bg-purple-500/10" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur-sm dark:border-border dark:bg-card/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Award-Winning Creative Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          We Create
          <br />
          <span className="gradient-text">Bold Brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Transform your vision into unforgettable advertising experiences.
          We blend creativity with strategy to deliver results that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href={getWhatsAppLink("Hi! I'd like to start a new project with Lumina Agency.")}
            external
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/projects" variant="secondary">
            <Play className="h-4 w-4" />
            View Our Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
          <div className="glass glow relative overflow-hidden rounded-2xl p-1 shadow-2xl shadow-violet-500/10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop"
                alt="Creative agency showreel"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl gradient-bg shadow-2xl"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </motion.div>
                  <p className="text-sm font-medium text-white/90">
                    Watch our showreel
                  </p>
                </motion.div>
              </div>
              <div className="absolute inset-0 shimmer opacity-20" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-2xl font-bold gradient-text">250+</p>
            <p className="text-xs text-muted-foreground">Projects Done</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-2xl font-bold gradient-text">40+</p>
            <p className="text-xs text-muted-foreground">Awards Won</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
