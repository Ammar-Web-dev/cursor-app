import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected websites, automations, and SEO work from Northline Studio.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="A short list. Names changed where we have to."
          description="We publish work we can stand behind. Where a client asked for discretion, the industry stays and the brand does not."
        />
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(28,27,24,0.04)]">
              <div className="flex items-center justify-between gap-4 text-sm text-[var(--muted)]">
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-4 font-serif text-2xl leading-snug">
                {project.title}
              </h2>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                {project.service}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                {project.summary}
              </p>
              <p className="mt-6 border-t border-[var(--border)] pt-4 text-sm text-[var(--foreground)]">
                {project.result}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
