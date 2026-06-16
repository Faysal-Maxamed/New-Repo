"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Share2, Globe, Link2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/content";
import { getWhatsAppLink } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: companyInfo.phone,
    href: `tel:+252${companyInfo.phone.slice(1)}`,
  },
  {
    icon: MapPin,
    title: "Address",
    value: companyInfo.address,
    href: "#",
  },
  {
    icon: Globe,
    title: "Website",
    value: companyInfo.website,
    href: `https://${companyInfo.website}`,
  },
];

const socialLinks = [
  { icon: Share2, label: "guhaad creatives", href: companyInfo.social.facebook },
  { icon: Globe, label: "Instagram — guhaad advert", href: companyInfo.social.instagram },
  { icon: Link2, label: "LinkedIn — guhaad advert", href: companyInfo.social.linkedin },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError(
        "Could not connect to server. You can reach us via WhatsApp or email directly."
      );
    } finally {
      setLoading(false);
    }
  };

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
              Contact
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind? Reach out to Guhaad Creatives & Advert.
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                Fill out the form or contact us directly. We&apos;ll respond
                within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.title}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-medium">Follow Us</p>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <social.icon className="h-4 w-4 text-accent" />
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={getWhatsAppLink("Hi! I'd like to discuss a project with Guhaad Creatives & Advert.")}
                  external
                  className="w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-16 text-center"
                >
                  <CheckCircle className="mb-4 h-16 w-16 text-accent" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" className="mt-6 w-full sm:w-auto">
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
