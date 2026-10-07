import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { posts, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Note" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <FadeIn>
        <p className="text-sm text-[var(--muted)]">
          <Link href="/blog" className="hover:text-[var(--foreground)]">
            Notes
          </Link>
          <span aria-hidden> · </span>
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight">{post.title}</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{post.excerpt}</p>
      </FadeIn>
      <div className="mt-10 space-y-5 text-base leading-8 text-[var(--foreground)]">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-12 text-sm text-[var(--muted)]">
        — {site.shortName}
      </p>
    </article>
  );
}
