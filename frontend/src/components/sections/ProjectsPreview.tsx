"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/content";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Our Work"
          description="Explore our completed projects, campaigns, and creative work."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="secondary">
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
