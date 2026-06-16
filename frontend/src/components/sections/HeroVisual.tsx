"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Palette,
  Megaphone,
  Video,
  Monitor,
  Camera,
  Sparkles,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

const orbitItems = [
  { icon: Palette, label: "Branding", angle: 0, color: "from-violet-500 to-purple-600" },
  { icon: Megaphone, label: "Marketing", angle: 72, color: "from-blue-500 to-indigo-600" },
  { icon: Video, label: "Video", angle: 144, color: "from-rose-500 to-pink-600" },
  { icon: Monitor, label: "Web", angle: 216, color: "from-cyan-500 to-blue-600" },
  { icon: Camera, label: "Photo", angle: 288, color: "from-amber-500 to-orange-600" },
];

const floatingStats = [
  { value: "100+", label: "Projects", icon: Layers, position: "top-6 right-4 lg:-top-2 lg:-right-4" },
  { value: "50+", label: "Clients", icon: Users, position: "bottom-8 left-2 lg:-bottom-4 lg:-left-10" },
  { value: "10+", label: "Services", icon: TrendingUp, position: "top-1/2 -right-2 lg:-right-14" },
];

const RADIUS = 145;

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[520px] perspective-[1200px] lg:mx-0 lg:max-w-none"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="hero-float"
      >
        <div className="hero-gradient-border relative overflow-hidden p-1 shadow-2xl shadow-accent/10">
          <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-[1.9rem] sm:h-[460px] lg:h-[520px]">
            {/* Inner aurora */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/10" />
            <motion.div
              className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[80px]"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-blue-500/15 blur-[70px]"
              animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="hero-shine pointer-events-none absolute inset-0" />

            {/* SVG orbit path */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
              <motion.circle
                cx="200"
                cy="200"
                r={RADIUS * 0.72}
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="1"
                strokeDasharray="6 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>

            {/* Rotating orbit group */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {orbitItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${item.angle}deg) translateY(-${RADIUS}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.12 }}
                      className="group -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative">
                        <div
                          className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 blur-md transition-opacity group-hover:opacity-60`}
                        />
                        <div className="relative flex flex-col items-center gap-1.5">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="rounded-full border border-border/50 bg-card/90 px-2.5 py-0.5 text-[10px] font-semibold text-foreground shadow-sm backdrop-blur-md">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Static rings */}
            <motion.div
              className="absolute h-[280px] w-[280px] rounded-full border border-accent/10"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute h-[220px] w-[220px] rounded-full border border-blue-500/10"
              animate={{ scale: [1.03, 1, 1.03] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Pulse waves */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-accent/25"
                initial={{ width: 90, height: 90, opacity: 0.5 }}
                animate={{ width: [90, 320], height: [90, 320], opacity: [0.35, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: i * 1.1 }}
              />
            ))}

            {/* Central hub */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-6 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[2rem] gradient-bg shadow-2xl shadow-accent/40 sm:h-36 sm:w-36">
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-[2rem]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.35), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <Sparkles className="relative h-8 w-8 text-white sm:h-9 sm:w-9" />
                <span className="relative mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
                  GC
                </span>
                <span className="relative text-[9px] font-medium uppercase tracking-[0.2em] text-white/80">
                  &amp; Advert
                </span>
              </div>
            </motion.div>

            {/* Sparkle particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 3 === 0 ? 4 : 2,
                  height: i % 3 === 0 ? 4 : 2,
                  left: `${10 + (i * 7) % 80}%`,
                  top: `${8 + (i * 11) % 84}%`,
                  background: i % 2 === 0 ? "var(--accent)" : "#2563eb",
                }}
                animate={{
                  y: [0, -15 - (i % 3) * 5, 0],
                  opacity: [0.15, 0.9, 0.15],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: 2.5 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        {floatingStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.15, type: "spring", stiffness: 200 }}
              className={`absolute z-20 ${stat.position}`}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none gradient-text lg:text-xl">{stat.value}</p>
                  <p className="text-[10px] font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
