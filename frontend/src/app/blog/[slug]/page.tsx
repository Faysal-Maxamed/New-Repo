import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { getBlogBySlug, blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | Lumina Agency Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const related = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      <article>
        <section className="relative pt-28 pb-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {blog.category}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{blog.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent" />
                <span>
                  <span className="font-medium text-foreground">{blog.author}</span>
                  {" · "}
                  {blog.authorRole}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                {blog.readTime}
              </span>
              <time>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl border border-border shadow-xl shadow-accent/5">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          <div className="prose-custom mx-auto max-w-3xl">
            {blog.content.map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2">
            <Tag className="mr-1 h-4 w-4 text-accent" />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-lg font-bold text-white">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{blog.author}</p>
                <p className="text-sm text-muted-foreground">{blog.authorRole}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Passionate about creating impactful brand experiences. Follow our
              blog for more insights on advertising and design.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
