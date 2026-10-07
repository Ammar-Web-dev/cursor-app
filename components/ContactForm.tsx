"use client";

import { useState } from "react";

const initial = {
  name: "",
  email: "",
  company: "",
  service: "Full Stack AI Web Development",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please add your name, email, and a short note about the work.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("That email does not look quite right.");
      return;
    }
    setError(null);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8">
        <h2 className="font-serif text-2xl">We have the brief.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
          Thank you, {values.name}. We read every note and reply within two working
          days — usually with a few clarifying questions, not a pitch deck.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Name</span>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-[var(--muted)]">Company (optional)</span>
        <input
          name="company"
          value={values.company}
          onChange={onChange}
          autoComplete="organization"
          className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="text-[var(--muted)]">What do you need?</span>
        <select
          name="service"
          value={values.service}
          onChange={onChange}
          className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        >
          <option>Full Stack AI Web Development</option>
          <option>AI Automations & n8n Workflows</option>
          <option>Basic SEO & Website Optimization</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-[var(--muted)]">Tell us about the work</span>
        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          rows={6}
          className="mt-2 w-full resize-y rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>
      {error ? (
        <p role="alert" className="text-sm text-[var(--accent)]">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
      >
        Send the note
      </button>
    </form>
  );
}
