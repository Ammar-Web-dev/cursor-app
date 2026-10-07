import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-[var(--foreground)]">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Studio
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{site.location}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-[var(--muted)] sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
