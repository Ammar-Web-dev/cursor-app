import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.name} about a website, automation, or SEO project.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what is actually stuck."
            description="A paragraph is enough. If we are not the right studio, we will say so quickly."
          />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-[var(--muted)]">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Studio</dt>
              <dd className="mt-1 text-[var(--foreground)]">{site.location}</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Hours</dt>
              <dd className="mt-1 text-[var(--foreground)]">
                Replies within two working days.
              </dd>
            </div>
          </dl>
        </FadeIn>
        <FadeIn delay={0.06}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
