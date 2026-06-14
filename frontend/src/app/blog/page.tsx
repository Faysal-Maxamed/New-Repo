"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { blogs, blogCategories } from "@/data/blogs";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featured = blogs[0];
  const rest = filtered.filter((b) => b.id !== featured.id);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-violet-400/20 blur-[120px] dark:bg-accent/15" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-400/15 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Blog
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Insights & <span className="gradient-text">Ideas</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Expert perspectives on branding, design, and digital marketing
              to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-bg text-white shadow-md shadow-accent/20"
                    : "border border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {activeCategory === "All" && (
        <AnimatedSection className="pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <BlogCard blog={featured} featured />
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {(activeCategory === "All" ? rest : filtered).map((blog) => (
                  <StaggerItem key={blog.id}>
                    <BlogCard blog={blog} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
