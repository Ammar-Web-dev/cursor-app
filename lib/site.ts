export const site = {
  name: "Northline Studio",
  shortName: "Northline",
  tagline: "Applied software for operators, not decks.",
  description:
    "Northline Studio builds production websites, AI-backed automations, and careful SEO for teams that need software they can actually run.",
  url: "https://northline.studio",
  email: "hello@northline.studio",
  phone: "+1 (415) 555-0148",
  location: "Remote · San Francisco & London",
} as const;

export const nav = [
  { href: "/home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Notes" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "full-stack-ai-web-development",
    title: "Full Stack AI Web Development",
    summary:
      "Product-grade Next.js applications with the right amount of AI — search, drafting, and decision support that your team will use next week, not next quarter.",
    outcome: "Shipped product, documented, and owned by you.",
    details: [
      "App Router sites and internal tools in TypeScript",
      "Auth, data models, and admin surfaces that stay maintainable",
      "AI features with clear failure modes, not chat widgets glued on",
      "Handover: repo, environments, and a short operating guide",
    ],
  },
  {
    slug: "ai-automations-n8n",
    title: "AI Automations & n8n Workflows",
    summary:
      "Quiet systems that move work between the tools you already pay for. Lead routing, document intake, reporting, and follow-ups that do not need a new dashboard.",
    outcome: "Hours returned each week, with logs you can audit.",
    details: [
      "n8n, webhooks, and API integrations designed as operations, not demos",
      "Human-in-the-loop steps where a wrong send would hurt",
      "Error handling, retries, and a simple way to see what ran",
      "Training so your team can change a step without calling us",
    ],
  },
  {
    slug: "seo-website-optimization",
    title: "Basic SEO & Website Optimization",
    summary:
      "The unglamorous work that makes a site findable and fast: metadata, structure, Core Web Vitals, and copy that matches how people actually search.",
    outcome: "A site search engines can understand and people can finish using.",
    details: [
      "Technical SEO: titles, canonicals, sitemap, structured data",
      "Performance: images, fonts, and layout that stay out of the way",
      "On-page structure for the queries you already win or should",
      "A punch list, not a 40-page audit that nobody implements",
    ],
  },
] as const;

export const projects = [
  {
    slug: "harbor-intake",
    client: "Harbor Legal",
    title: "Client intake that files itself",
    year: "2025",
    service: "Automations",
    summary:
      "Replaced a shared inbox and three spreadsheets with an n8n pipeline: form to matter record, conflict check, and a partner digest every morning.",
    result: "Intake time dropped from half a day to under an hour.",
  },
  {
    slug: "atlas-catalog",
    client: "Atlas Supply",
    title: "A catalog operators can trust",
    year: "2025",
    service: "Web development",
    summary:
      "Rebuilt a brittle product site on Next.js with search that understands SKUs, regional stock, and the language warehouse staff actually type.",
    result: "Support tickets about “where is this SKU” fell by 40%.",
  },
  {
    slug: "kiln-notes",
    client: "Kiln Education",
    title: "Course pages that rank for the right intent",
    year: "2024",
    service: "SEO",
    summary:
      "Reworked information architecture, titles, and internal links so program pages matched search intent instead of competing with each other.",
    result: "Organic sign-ups up 28% in four months, without paid ads.",
  },
  {
    slug: "north-ops",
    client: "Internal · Northline",
    title: "Proposal drafts from a structured brief",
    year: "2025",
    service: "AI + web",
    summary:
      "A small internal app that turns a one-page brief into a first-pass proposal. A person still edits every line. The model never sends email.",
    result: "First drafts in 20 minutes instead of an afternoon.",
  },
] as const;

export const posts = [
  {
    slug: "ai-that-ships-on-tuesday",
    title: "AI that ships on Tuesday",
    date: "2026-03-12",
    excerpt:
      "Most AI projects stall because they try to replace judgment. The ones that last sit next to a workflow that already exists.",
    body: [
      "A useful AI feature has a job, a fallback, and an owner. If the model is wrong, someone still knows what to do. That sounds obvious until you watch a team wait three months for a “platform” that never touches a real ticket.",
      "We start with the Tuesday problem: a document that has to be classified, a reply that has to be drafted, a record that has to be updated. Then we put the model in that slot, log the output, and keep a person in the loop until the error rate is boring.",
      "Chat is a terrible default. Search, extraction, and structured drafts are better defaults. They fail in ways you can see.",
    ],
  },
  {
    slug: "n8n-is-an-operations-tool",
    title: "n8n is an operations tool, not a toy",
    date: "2026-01-28",
    excerpt:
      "Workflows fail in production for ordinary reasons: auth expires, a field is empty, someone renamed a sheet. Design for that.",
    body: [
      "The first version of an automation is usually a happy path. Production is everything else. Tokens expire on weekends. A CRM field that was required last month is optional this month. The person who understood the Zap left.",
      "We treat n8n like any other system: named environments, retries that do not duplicate work, and a place to read what happened. If you cannot explain a failed run in two minutes, you do not have an automation — you have a mystery.",
      "The goal is not more nodes. The goal is fewer surprises for the people who run the company.",
    ],
  },
  {
    slug: "seo-without-the-theatre",
    title: "SEO without the theatre",
    date: "2025-11-04",
    excerpt:
      "Basic SEO is titles, structure, speed, and honesty about what the page is for. Most sites skip those and buy a content mill.",
    body: [
      "If two pages argue over the same query, neither will win. If the title tag describes a vibe instead of a page, crawlers shrug. If the largest image is 4MB, the rest of the strategy can wait.",
      "We do the boring list: unique titles, a sitemap that matches reality, internal links that follow how people decide, and copy that uses the words customers already use. Then we stop, measure, and only then talk about more pages.",
      "You do not need a “content engine.” You need a site that is clear, fast, and not competing with itself.",
    ],
  },
] as const;
