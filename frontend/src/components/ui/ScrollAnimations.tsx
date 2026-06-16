"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left gradient-bg"
      style={{ scaleX }}
    />
  );
}

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed right-6 bottom-8 z-40 hidden flex-col items-center gap-2 lg:flex"
    >
      <span className="text-[10px] font-bold tracking-widest text-muted-foreground">
        {progress}%
      </span>
      <div className="relative h-24 w-px bg-border">
        <motion.div
          className="absolute top-0 left-0 w-full gradient-bg"
          style={{ height: `${progress}%` }}
        />
      </div>
      <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground [writing-mode:vertical-lr]">
        SCROLL
      </span>
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface MarqueeTextProps {
  text: string;
  className?: string;
}

export function MarqueeText({ text, className = "" }: MarqueeTextProps) {
  const doubled = `${text} · ${text} · ${text} · `;

  return (
    <div className={`overflow-hidden border-y border-border py-6 ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max whitespace-nowrap"
      >
        <span className="px-4 text-4xl font-bold tracking-tight text-muted-foreground/30 sm:text-6xl lg:text-7xl">
          {doubled}
        </span>
        <span className="px-4 text-4xl font-bold tracking-tight text-muted-foreground/30 sm:text-6xl lg:text-7xl">
          {doubled}
        </span>
      </motion.div>
    </div>
  );
}
