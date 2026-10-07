import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
  alternates: { canonical: "/home" },
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <FadeIn>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Independent studio · Est. 2021
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Websites, automations, and search — built to be used, not admired.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {site.name} is a small practice for teams who need working software:
            a site that loads, a workflow that files, and pages that match how
            people actually look for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Tell us what is stuck
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="text-sm text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              Recent work
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          {[
            ["Three services", "Web, automations, and basic SEO — not a catalogue of 20 offerings."],
            ["Small by design", "You work with the people who write the code and the workflows."],
            ["Handover included", "Repos, runbooks, and a system your team can keep."],
          ].map(([label, copy]) => (
            <div key={label}>
              <p className="font-serif text-xl">{label}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Three kinds of work we actually take."
            description="If it is not one of these, we will say so. That is cheaper than a polite maybe."
          />
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(28,27,24,0.04)]">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-snug">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">
                  {service.summary}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  How we run it <ArrowRight size={14} />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects, written like reports."
          />
        </FadeIn>
        <ul className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {projects.slice(0, 3).map((project) => (
            <li key={project.slug}>
              <Link
                href="/projects"
                className="grid gap-2 py-6 transition-colors hover:bg-[var(--surface)] sm:grid-cols-[1fr_auto] sm:items-baseline sm:px-3"
              >
                <div>
                  <p className="font-serif text-2xl">{project.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.client} · {project.service}
                  </p>
                </div>
                <p className="text-sm text-[var(--muted)]">{project.year}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
