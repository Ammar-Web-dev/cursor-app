import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Northline Studio is a small full-stack practice for AI-backed websites, n8n automations, and careful SEO.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="About"
          title="A studio, not a staffing bench."
          description="Northline started as one developer tired of handing over slides instead of software. It is still small on purpose."
        />
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeIn>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              We build for operators: founded teams, in-house ops, and agencies
              that need a technical partner without a twelve-person account
              structure. Most of the work is Next.js, TypeScript, n8n, and the
              unglamorous SEO that makes a page findable.
            </p>
            <p>
              AI is in the toolkit, not the brand. We use models where they save
              time and keep a person responsible for anything that reaches a
              customer. If a problem does not need a model, we will not add one
              so the proposal sounds current.
            </p>
            <p>
              Engagements are scoped in writing. You get the repository, the
              environments, and a short note on how to keep the system healthy.
              We would rather finish and leave you able to run it than stay
              indispensable.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <aside className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-7">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
              How we work
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6">
              <li>
                <strong className="text-[var(--foreground)]">Discovery, one week.</strong>{" "}
                A call, a written brief, a yes or a no.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Build in the open.</strong>{" "}
                Weekly notes. No surprise demos.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Handover, not hostage.</strong>{" "}
                Access, docs, and a last session together.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex text-sm text-[var(--accent)] hover:underline"
            >
              Work with us
            </Link>
          </aside>
        </FadeIn>
      </div>
    </div>
  );
}
