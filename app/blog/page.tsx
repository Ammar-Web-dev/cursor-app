import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short writing on shipping software, automations, and SEO.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Notes"
          title="What we keep learning on the job."
          description="Short pieces. No newsletter gate. Written after shipping something, not before."
        />
      </FadeIn>

      <ul className="mt-14 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block py-8 transition-colors hover:bg-[var(--surface)] sm:px-3"
            >
              <p className="text-sm text-[var(--muted)]">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 font-serif text-2xl">{post.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
