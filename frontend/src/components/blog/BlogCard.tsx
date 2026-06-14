"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, User } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${blog.slug}`}>
        <motion.article
          whileHover={{ y: -6 }}
          className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent/5 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
            <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {blog.category}
            </span>
            <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-accent lg:text-3xl">
              {blog.title}
            </h3>
            <p className="mt-4 line-clamp-3 text-muted-foreground leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${blog.slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm dark:bg-black/60 dark:text-white">
            {blog.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time className="text-xs text-muted-foreground">
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
            {blog.title}
          </h3>
          <p className="mt-2 flex-1 line-clamp-2 text-sm text-muted-foreground">
            {blog.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {blog.readTime}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
