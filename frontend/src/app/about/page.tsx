"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { team } from "@/data/content";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every campaign starts with a clear purpose and measurable goals.",
  },
  {
    icon: Eye,
    title: "Visionary",
    description:
      "We see beyond trends to create timeless, impactful creative work.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description:
      "We pour our hearts into every project, treating your brand as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We never settle for good enough — only exceptional results matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We Are <span className="gradient-text">Lumina Agency</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2010, Lumina Agency has grown from a small creative
              studio into a global advertising powerhouse. We partner with
              ambitious brands to create campaigns that don&apos;t just get
              noticed — they get remembered.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Story"
                title="15 Years of Creative Excellence"
                description="What started as a passion project between two designers has evolved into a full-service agency trusted by Fortune 500 companies and innovative startups alike."
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed">
                Our team of strategists, designers, and marketers work
                collaboratively to push creative boundaries. We believe great
                advertising isn&apos;t just about selling products — it&apos;s
                about telling stories that resonate and inspire action.
              </p>
            </div>
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-purple-800/30"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text">15+</div>
                  <p className="mt-2 text-muted-foreground">Years of Impact</p>
                </div>
              </div>
              <div className="absolute inset-0 shimmer opacity-20" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision we make."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-border bg-card p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the Creatives"
            description="The talented minds behind every great campaign."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group text-center"
                >
                  <div
                    className={`mx-auto mb-4 aspect-square max-w-[200px] overflow-hidden rounded-2xl bg-gradient-to-br ${member.image} transition-transform group-hover:scale-105`}
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
