"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { oneTimeServices, freeServices } from "@/data/content";
import { getWhatsAppLink } from "@/lib/constants";

type Tab = "onetime" | "free";

interface ServiceCard {
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}

function PricingCard({ service, index }: { service: ServiceCard; index: number }) {
  const whatsappMessage = `Hi! I'm interested in the "${service.title}" plan (${service.price}). Can you tell me more?`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-2xl border p-8 ${
        service.popular
          ? "border-accent bg-card glow"
          : "border-border bg-card"
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
          <span className="text-4xl font-bold gradient-text">
            {service.price}
          </span>
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

  const currentServices =
    activeTab === "onetime" ? oneTimeServices : freeServices;

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Services
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you need a one-time project or want to start for free,
              we have the perfect solution for your brand.
            </p>
          </motion.div>
        </div>
      </section>

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
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground"
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

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Process"
            title="How We Work"
            description="A streamlined process that delivers exceptional results every time."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your brand, goals, and audience." },
              { step: "02", title: "Strategy", desc: "We craft a tailored creative strategy." },
              { step: "03", title: "Creation", desc: "Our team brings the vision to life." },
              { step: "04", title: "Launch", desc: "We deliver and optimize for maximum impact." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-2xl font-bold gradient-text">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
