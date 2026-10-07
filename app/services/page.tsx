import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full stack AI web development, n8n automations, and basic SEO from Northline Studio.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Services"
          title="The work we take, and how we run it."
          description="Each engagement has a named owner, a written scope, and a handover. We do not sell retainers that exist to stay on a call."
        />
      </FadeIn>

      <div className="mt-16 space-y-16">
        {services.map((service, i) => (
          <FadeIn key={service.slug}>
            <article
              id={service.slug}
              className="grid gap-8 border-t border-[var(--border)] pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Service 0{i + 1}
                </p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {service.outcome}
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-[var(--foreground)]">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.details.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-[var(--accent)]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 rounded-lg border border-[var(--border)] bg-[var(--card)] p-8">
        <h2 className="font-serif text-2xl">Not a fit?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          We do not do paid social, brand films, or “AI strategy offsites” with no
          deliverable. If you need those, we will say so and, when we can, point
          you to someone who does.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm text-[var(--accent-fg)] hover:bg-[var(--accent-hover)]"
        >
          Request a scope
        </Link>
      </FadeIn>
    </div>
  );
}
