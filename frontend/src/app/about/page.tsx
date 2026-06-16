"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Eye,
  Target,
  Sparkles,
  Heart,
  Shield,
  Lightbulb,
  Users,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import {
  ScrollProgress,
  ScrollIndicator,
  TextReveal,
  MarqueeText,
} from "@/components/ui/ScrollAnimations";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { companyInfo, coreValues, team, whyChooseUs } from "@/data/content";
import { getWhatsAppLink } from "@/lib/constants";

const valueIcons = [Sparkles, Heart, Shield, Lightbulb, Users, CheckCircle2];

const guarantees = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "On-Time Delivery", value: "Always" },
  { label: "Creative Quality", value: "Premium" },
];

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(storyProgress, [0, 1], [80, -80]);
  const storyOpacity = useTransform(storyProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <>
      <ScrollProgress />
      <ScrollIndicator />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <AnimatedBackground variant="hero" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              Our Story
            </motion.span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              <TextReveal text="Empowering" />
              <br />
              <span className="gradient-text">
                <TextReveal text="Creative Excellence" delay={0.2} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {companyInfo.overview} With every project, we strive to push
              boundaries, overdeliver, and create experiences that leave a
              lasting impact across Somalia and East Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <Button
                href={getWhatsAppLink("Hi! I'd like to learn more about Guhaad Creatives & Advert.")}
                external
              >
                Work With Us
              </Button>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      <MarqueeText text="GUHAAD CREATIVES & ADVERT" />

      {/* Story */}
      <section ref={storyRef} className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div style={{ y: storyY, opacity: storyOpacity }}>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Who We Are
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Driving Brands Forward with{" "}
                <span className="gradient-text">Purpose</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {companyInfo.whoWeAre}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our aim is to make professional creative services accessible to
                businesses of all sizes. Join us on our journey and ignite your
                brand&apos;s potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />
              <div className="glass relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                  alt="Guhaad Creatives team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-3xl font-bold text-white">GC&A</p>
                  <p className="text-sm text-white/80">Creatives & Advert</p>
                </div>
                <div className="absolute inset-0 shimmer opacity-30" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative bg-muted/30 py-32">
        <AnimatedBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              { icon: Eye, title: "Our Vision", text: companyInfo.vision },
              { icon: Target, title: "Our Mission", text: companyInfo.mission },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 lg:p-12"
              >
                <motion.div
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i }}
                />
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg text-white shadow-lg shadow-accent/25">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Our Values
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Illuminate Your Brand with{" "}
              <span className="gradient-text">Guhaad</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Transforming brands with innovative design and marketing solutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {coreValues.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 lg:flex-row lg:items-center lg:p-10">
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <span className="text-5xl font-bold text-accent/20 lg:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="lg:flex-1">
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                    <motion.div
                      className="hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent lg:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <MarqueeText text="WITH CREATIVITY AND PASSION" />

      {/* Guarantees */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {guarantees.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <p className="text-4xl font-bold gradient-text sm:text-5xl">{item.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Why Businesses Choose{" "}
              <span className="gradient-text">Guhaad</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <CheckCircle2 className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-muted/30 py-32">
        <AnimatedBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Our Team
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Meet the <span className="gradient-text">Creatives</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Creative thinkers, designers, marketers, videographers, and digital
              strategists committed to your success.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-6 aspect-[3/4] max-w-[240px] overflow-hidden rounded-3xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.image} transition-transform duration-500 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <motion.div
                    className="absolute inset-0 shimmer opacity-0 group-hover:opacity-40"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center sm:p-20"
          >
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 50%, rgba(37,99,235,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              <TextReveal text="Let Us Join Your Journey" />
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              If you found yourself nodding along, it&apos;s time to connect.
              Work with us hand in hand to create something limitless.
            </p>
            <div className="mt-10">
              <Button
                href={getWhatsAppLink("Hi! I'd like to connect with Guhaad Creatives & Advert.")}
                external
              >
                Let&apos;s Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
