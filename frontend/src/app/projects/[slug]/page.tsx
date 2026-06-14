import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/content";
import { ImageGallery } from "@/components/projects/ImageGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/constants";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Lumina Agency`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">Year:</span>
                  <span className="font-medium">{project.year}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                  <Tag className="h-4 w-4 text-accent" />
                  Services
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={getWhatsAppLink(
                    `Hi! I'm interested in a project like "${project.title}".`
                  )}
                  external
                >
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl shadow-accent/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Project Gallery</h2>
          <ImageGallery images={project.gallery} title={project.title} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
              Related Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
