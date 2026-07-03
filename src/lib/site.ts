/**
 * Central content model for the MassLogix site.
 * Keeping copy here makes the section components thin and easy to edit.
 */

export const site = {
  name: "MassLogix",
  legalName: "MassLogix",
  domain: "masslogix.com",
  url: "https://masslogix.com",
  tagline: "From idea to execution — we build what's next.",
  description:
    "MassLogix is a software engineering studio building scalable, AI-native products across web, mobile, cloud, and Web3 — plus FBR IRIS e-invoicing for Pakistani businesses.",
  email: "masslogix@gmail.com",
  phone: "+92 321 1410122",
  phoneHref: "+923211410122",
  calendly: "https://calendly.com/masslogixx/60min",
  /** Absolute URLs used in structured data / social cards. */
  logo: "/images/main.png", // square-ish brand mark, shown by Google in results
  ogImage: "/opengraph-image", // generated 1200x630 card
  socials: {
    linkedin: "https://www.linkedin.com/company/mass-logix/",
    instagram: "https://www.instagram.com/masslogix?igsh=Y2x2YmN4b2VmeGFu",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "FBR e-Invoicing", href: "#fbr-iris" },
  { label: "Work", href: "#industries" },
  { label: "Stack", href: "#technologies" },
  { label: "Process", href: "#process" },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 5, suffix: "+", label: "Clients across industries" },
  { value: 95, suffix: "%", label: "Client satisfaction" },
  { value: 40, suffix: "K+", label: "Engineering hours" },
] as const;

/** Business reassurances shown as a trust strip under the hero. */
export const trustPoints = [
  { title: "Fixed scope & timeline", copy: "You get a clear plan, price, and delivery date up front — no surprise bills.", icon: "CalendarCheck" },
  { title: "You own everything", copy: "The code, accounts, and data are yours. No lock-in, ever.", icon: "KeyRound" },
  { title: "Direct, senior team", copy: "You talk to the engineers building it — not a call centre.", icon: "Users" },
  { title: "Support after launch", copy: "We stick around to maintain, fix, and improve what we ship.", icon: "LifeBuoy" },
] as const;

export type Service = {
  id: string;
  title: string;
  blurb: string;
  bullets: string[];
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    blurb:
      "Secure, scalable systems engineered around your business logic — not a template.",
    bullets: ["Domain-driven design", "Type-safe APIs", "Automated testing"],
    icon: "Boxes",
  },
  {
    id: "web-apps",
    title: "Web Applications",
    blurb:
      "High-performance web apps with instant loads and a UI that feels native.",
    bullets: ["Next.js / React", "Edge rendering", "Design systems"],
    icon: "LayoutDashboard",
  },
  {
    id: "ai-ml",
    title: "AI / ML Engineering",
    blurb:
      "Ship intelligent features — RAG, agents, and models wired into real products.",
    bullets: ["LLM & RAG pipelines", "Agents & tooling", "MLOps"],
    icon: "BrainCircuit",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    blurb:
      "Cross-platform iOS & Android apps backed by a resilient cloud backend.",
    bullets: ["Flutter / React Native", "Offline-first", "Push & realtime"],
    icon: "Smartphone",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    blurb:
      "Ship faster with automated pipelines, observability, and infra as code.",
    bullets: ["AWS / GCP / Azure", "Kubernetes & CI/CD", "Cost & uptime SLAs"],
    icon: "Cloud",
  },
  {
    id: "web3",
    title: "Blockchain & Web3",
    blurb:
      "Audited smart contracts, dApps, and token systems built to production standards.",
    bullets: ["Solidity contracts", "dApp frontends", "Wallet & chain infra"],
    icon: "Blocks",
  },
];

export type Solution = {
  id: string;
  name: string;
  tag: string;
  headline: string;
  blurb: string;
  /** Short benefit chips — the business "why". */
  outcomes: string[];
  features: { title: string; copy: string }[];
  /** Plain-language "how it works" for non-technical buyers. */
  steps: { no: string; title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  terminal: string[];
};

/**
 * Flagship, productized web solutions (not bespoke one-offs).
 * FBR IRIS e-invoicing is the lead offering — copy is written
 * outcome-first for business buyers, with technical proof underneath.
 */
export const solutions: Solution[] = [
  {
    id: "fbr-iris",
    name: "FBR IRIS e-Invoicing",
    tag: "FBR digital invoicing · Pakistan",
    headline: "Get FBR-compliant — without changing how you work.",
    blurb:
      "New FBR rules require sales invoices to be reported digitally in real time. We connect your business to FBR IRIS so every invoice is filed automatically, on time, and penalty-free — while you keep using the system you already have.",
    outcomes: [
      "Avoid FBR penalties",
      "Go live in days, not months",
      "Keep your current billing system",
      "Real-time, hands-off filing",
    ],
    features: [
      {
        title: "Stay penalty-free",
        copy: "Every sales invoice is filed with FBR the moment it's issued — no missed submissions, no late fines, no manual data entry.",
      },
      {
        title: "Keep your current system",
        copy: "Works with your existing POS, ERP, or accounting software — or use our ready-made invoicing portal. No need to switch tools.",
      },
      {
        title: "Legally valid invoices",
        copy: "Each invoice comes back with an official FBR IRN number and QR code, so it's verifiable and compliant on the spot.",
      },
      {
        title: "Always audit-ready",
        copy: "A complete record of every submission is kept for you — so if FBR ever asks, everything is already in order.",
      },
    ],
    steps: [
      {
        no: "01",
        title: "Connect",
        copy: "We register you with FBR and link your billing system to IRIS — you don't touch any code.",
      },
      {
        no: "02",
        title: "Test",
        copy: "We validate everything in FBR's sandbox so your invoices are correct before going live.",
      },
      {
        no: "03",
        title: "Go live",
        copy: "Every invoice now files itself in real time. We monitor it and support you through FBR rule changes.",
      },
    ],
    faqs: [
      {
        q: "Is this officially FBR-compliant?",
        a: "Yes. We integrate directly with FBR's IRIS platform, so every invoice is validated, assigned an official IRN, and reported to FBR in real time — exactly as the digital invoicing regulations require.",
      },
      {
        q: "Do I have to replace my current billing software?",
        a: "No. In most cases we connect to your existing POS, ERP, or accounting system. If you don't have one, we can provide a simple invoicing portal instead.",
      },
      {
        q: "How long does setup take?",
        a: "For standard setups, most businesses are live within a few days. Timelines depend on your current system and how quickly FBR registration is completed.",
      },
      {
        q: "What happens if FBR changes the rules?",
        a: "We maintain the integration for you. When FBR updates its schema or requirements, we handle the changes so your invoicing keeps working without interruption.",
      },
    ],
    terminal: [
      "$ masslogix invoice --submit INV-2041",
      "→ validating against FBR schema ....... ok",
      "→ posting to IRIS .................... ok",
      "✓ IRN 7A1C-… issued · QR generated",
    ],
  },
];

export type Industry = {
  id: string;
  name: string;
  copy: string;
};

export const industries: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    copy: "Secure transactions, digital wallets, KYC, lending, and on-chain settlement.",
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    copy: "Logistics platforms, inventory tracking, and AI-powered demand forecasting.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    copy: "Storefronts with secure payments, personalized UX, and multi-channel commerce.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    copy: "HIPAA-ready platforms for telemedicine, EHR, and AI-assisted diagnostics.",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    copy: "Listing automation, virtual tours, CRM integration, and lead engines.",
  },
  {
    id: "insurance",
    name: "Insurance",
    copy: "Policy management, claims automation, and fraud detection at scale.",
  },
  {
    id: "energy",
    name: "Energy",
    copy: "Smart-grid management, IoT monitoring, and sustainability analytics.",
  },
];

export type TechGroup = {
  label: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Vue", "Svelte"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Go", "Python", "Django", ".NET"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    label: "Cloud / DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Snowflake"],
  },
  {
    label: "Web3",
    items: ["Solidity", "Ethereum", "Polygon", "Foundry", "wagmi", "IPFS"],
  },
];

/** Names used in the scrolling logo marquee. */
export const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Rust",
  "PostgreSQL",
  "AWS",
  "Kubernetes",
  "Docker",
  "GraphQL",
  "Solidity",
  "TensorFlow",
  "Flutter",
  "Redis",
];

export type Step = {
  no: string;
  title: string;
  copy: string;
};

export const process: Step[] = [
  {
    no: "01",
    title: "Discovery & scoping",
    copy: "We map the problem, constraints, and success metrics before writing a line of code.",
  },
  {
    no: "02",
    title: "Architecture & design",
    copy: "System design, data models, and a clickable UI so there are no surprises later.",
  },
  {
    no: "03",
    title: "Build in sprints",
    copy: "Weekly, shippable increments with demos — you see progress, not status reports.",
  },
  {
    no: "04",
    title: "Launch & scale",
    copy: "Hardening, observability, and a handover (or ongoing partnership) for growth.",
  },
];
