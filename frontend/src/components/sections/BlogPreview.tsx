"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export function BlogPreview() {
  const featured = blogs.slice(0, 3);

  return (
    <AnimatedSection className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Latest Insights"
          description="Stay ahead with expert tips on branding, design, and digital marketing."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((blog) => (
            <StaggerItem key={blog.id}>
              <BlogCard blog={blog} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="secondary">
            Read All Articles
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
