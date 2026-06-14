"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@luminaagency.com",
    href: "mailto:hello@luminaagency.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "0614388477",
    href: "tel:+252614388477",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Mogadishu, Somalia",
    href: "#",
  },
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
        "Could not connect to server. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        </div>
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
              Have a project in mind? Send us a message and it will arrive
              directly in our Gmail inbox.
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
                Fill out the form and your message will be sent directly to
                our Gmail. We&apos;ll respond within 24 hours.
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
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
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
                    Your message has been sent to our Gmail. We&apos;ll get back
                    to you soon.
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
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
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
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
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
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                      />
                    ) : (
                      <>
                        Send to Gmail
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
