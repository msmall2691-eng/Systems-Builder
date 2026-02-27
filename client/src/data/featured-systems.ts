import {
  Link2,
  Database,
  Users,
  Zap,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeaturedSystem {
  title: string;
  icon: LucideIcon;
  gradient: string;
  problem: string;
  solution: string;
  highlights: string[];
  tech: string[];
  demoUrl: string;
  codeUrl: string;
  status: "Live" | "In Development";
}

export const featuredSystems: FeaturedSystem[] = [
  {
    title: "JobberBridge",
    icon: Link2,
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2))",
    problem: "Jobber events (new clients, job updates, invoice changes) weren't reaching internal tools in real time.",
    solution: "Built a webhook-driven API bridge that listens for Jobber events and syncs data to internal systems automatically.",
    highlights: [
      "Real-time webhook ingestion with event validation",
      "Auto-sync of client, job, and invoice records",
      "Error handling and retry logic for failed dispatches",
    ],
    tech: ["TypeScript", "Express", "Jobber API", "Webhooks"],
    demoUrl: "https://replit.com/@office277/JobberBridge?s=app",
    codeUrl: "https://replit.com/@office277/JobberBridge",
    status: "Live",
  },
  {
    title: "JobberToFirestore",
    icon: Database,
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(245,158,11,0.2))",
    problem: "Operational data locked inside Jobber with no way to build custom dashboards or cross-platform reports.",
    solution: "Automated pipeline that pulls job, client, and scheduling data from Jobber into Google Firestore for real-time access.",
    highlights: [
      "Structured data pipeline: Jobber → Firestore",
      "Real-time dashboard and reporting layer",
      "Eliminates manual CSV exports and data re-entry",
    ],
    tech: ["TypeScript", "Firestore", "Jobber API", "Express"],
    demoUrl: "https://replit.com/@office277/JobberToFirestore?s=app",
    codeUrl: "https://replit.com/@office277/JobberToFirestore",
    status: "Live",
  },
  {
    title: "Maine Clean Team Hub",
    icon: Users,
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(139,92,246,0.2))",
    problem: "Crew had no single place to check daily assignments, update job statuses, or coordinate schedule changes.",
    solution: "Internal operations dashboard where crew members manage assignments, track job progress, and coordinate schedules.",
    highlights: [
      "Role-based views for crew and operators",
      "Daily assignment board with status tracking",
      "Schedule coordination and team visibility",
    ],
    tech: ["React", "TypeScript", "Express", "Tailwind CSS"],
    demoUrl: "https://replit.com/@office277/Maine-Clean-team-hub?s=app",
    codeUrl: "https://replit.com/@office277/Maine-Clean-team-hub",
    status: "Live",
  },
  {
    title: "CleanSync",
    icon: Zap,
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(244,63,94,0.2))",
    problem: "Data across scheduling, invoicing, and communication platforms kept falling out of sync, causing rework and errors.",
    solution: "Cron-based sync layer that polls platforms on schedule, reconciles records, and keeps data consistent automatically.",
    highlights: [
      "Cron-based polling with configurable intervals",
      "Cross-platform data reconciliation logic",
      "Eliminated manual re-entry across tools",
    ],
    tech: ["TypeScript", "Express", "Cron Jobs", "REST APIs"],
    demoUrl: "https://replit.com/@office277/CleanSync-1?s=app",
    codeUrl: "https://replit.com/@office277/CleanSync-1",
    status: "Live",
  },
  {
    title: "Align",
    icon: Layers,
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
    problem: "No system to match cleaners to properties based on behavioral fit, or handle complex authorize-then-capture payment flows.",
    solution: "Multi-tenant operations platform with behavioral profiling (Cleaner DNA), stream-based work assignment, and Stripe payment integration.",
    highlights: [
      "Behavioral profiling engine for cleaner-property matching",
      "AI-powered property analysis via OpenAI Vision",
      "Stripe authorize-then-capture payment flow",
      "Role-based access for operators, cleaners, and clients",
    ],
    tech: ["TypeScript", "PostgreSQL", "Drizzle ORM", "Stripe", "OpenAI Vision"],
    demoUrl: "https://replit.com/@info10885/Align?s=app",
    codeUrl: "https://replit.com/@info10885/Align",
    status: "In Development",
  },
];
