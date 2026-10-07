import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl">This page is not here.</h1>
      <p className="mt-4 max-w-md text-[var(--muted)]">
        It may have moved, or the link is wrong. The rest of the studio is still up.
      </p>
      <Link
        href="/home"
        className="mt-8 inline-flex text-sm text-[var(--accent)] hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
