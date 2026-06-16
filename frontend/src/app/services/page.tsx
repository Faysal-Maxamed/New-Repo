"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import {
  Palette,
  Megaphone,
  Monitor,
  Camera,
  PenTool,
  Share2,
  Video,
  Film,
  FileText,
  Target,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import {
  services,
  featuredServices,
  oneTimeServices,
  freeServices,
} from "@/data/content";
import { getWhatsAppLink } from "@/lib/constants";

type Tab = "onetime" | "free";

interface ServiceCard {
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}

const iconMap = {
  Palette,
  Megaphone,
  Monitor,
  Camera,
  PenTool,
  Share2,
  Video,
  Film,
  FileText,
  Target,
};

function PricingCard({ service, index }: { service: ServiceCard; index: number }) {
  const whatsappMessage = `Hi! I'm interested in the "${service.title}" plan (${service.price}). Can you tell me more?`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-2xl border p-8 ${
        service.popular ? "border-accent bg-card glow" : "border-border bg-card"
      }`}
    >
      {service.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold gradient-text">{service.price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{service.duration}</p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={getWhatsAppLink(whatsappMessage)}
        external
        variant={service.popular ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
      </Button>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("onetime");

  const tabs = [
    {
      id: "onetime" as Tab,
      label: "One-Time",
      icon: Zap,
      description: "Pay once, get it done",
    },
    {
      id: "free" as Tab,
      label: "Free",
      icon: Sparkles,
      description: "Start at no cost",
    },
  ];

  const currentServices = activeTab === "onetime" ? oneTimeServices : freeServices;

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <AnimatedBackground variant="section" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Services
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you need a one-time project or want to start for free, we
              have the perfect solution for your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tabs — primary section */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-md rounded-2xl border border-border bg-muted/50 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="service-tab"
                    className="absolute inset-0 rounded-xl bg-card shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-sm text-muted-foreground"
          >
            {tabs.find((t) => t.id === activeTab)?.description}
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "onetime" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "onetime" ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {currentServices.map((service, i) => (
                <PricingCard key={service.title} service={service} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Featured"
            title="Our Core Services"
            description="Specialized solutions designed to elevate your brand and drive growth."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featuredServices.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="mt-6">
                      <Button
                        href={getWhatsAppLink(`Hi! I'm interested in your ${service.title} service.`)}
                        external
                        variant="secondary"
                      >
                        Inquire Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="All Services"
            title="Everything We Offer"
            description="A comprehensive range of creative and marketing services."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <ProcessSection />
      <CTASection />
    </>
  );
}
