import {
  Layers,
  Link2,
  Database,
  Users,
  Zap,
  Brain,
  RefreshCw,
  Layout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  status: "Live" | "In Development";
  demoUrl: string;
  codeUrl: string;
  embedUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Align",
    description: "Multi-tenant operations platform that matches cleaners to properties using behavioral profiling (Cleaner DNA). Handles stream-based work assignment, AI-powered property analysis via OpenAI Vision, Stripe authorize-then-capture payments, and role-based access for operators, cleaners, and clients.",
    tech: ["TypeScript", "PostgreSQL", "Drizzle ORM", "Stripe", "OpenAI Vision", "Google Calendar API"],
    icon: Layers,
    status: "In Development",
    demoUrl: "https://replit.com/@info10885/Align?s=app",
    codeUrl: "https://replit.com/@info10885/Align",
    embedUrl: "https://replit.com/@info10885/Align?embed=true",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
  },
  {
    title: "JobberBridge",
    description: "Real-time API bridge between Jobber field service management and internal business tools. Listens for webhook events and syncs client, job, and invoice data automatically so nothing falls through the cracks.",
    tech: ["TypeScript", "Express", "Jobber API", "Webhooks"],
    icon: Link2,
    status: "Live",
    demoUrl: "https://replit.com/@office277/JobberBridge?s=app",
    codeUrl: "https://replit.com/@office277/JobberBridge",
    embedUrl: "https://replit.com/@office277/JobberBridge?embed=true",
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2))",
  },
  {
    title: "JobberToFirestore",
    description: "Automated data pipeline that pulls job, client, and scheduling data from Jobber into Google Firestore. Powers real-time dashboards and cross-platform reporting without manual exports.",
    tech: ["TypeScript", "Firestore", "Jobber API", "Express"],
    icon: Database,
    status: "Live",
    demoUrl: "https://replit.com/@office277/JobberToFirestore?s=app",
    codeUrl: "https://replit.com/@office277/JobberToFirestore",
    embedUrl: "https://replit.com/@office277/JobberToFirestore?embed=true",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(245,158,11,0.2))",
  },
  {
    title: "Maine Clean Team Hub",
    description: "Internal operations dashboard for The Maine Cleaning Company. Crew members check daily assignments, update job statuses, and coordinate schedules from a single shared interface.",
    tech: ["React", "TypeScript", "Express", "Tailwind CSS"],
    icon: Users,
    status: "Live",
    demoUrl: "https://replit.com/@office277/Maine-Clean-team-hub?s=app",
    codeUrl: "https://replit.com/@office277/Maine-Clean-team-hub",
    embedUrl: "https://replit.com/@office277/Maine-Clean-team-hub?embed=true",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(139,92,246,0.2))",
  },
  {
    title: "CleanSync",
    description: "Automated sync layer that connects scheduling, invoicing, and client communication tools. Runs on cron-based polling to keep data consistent across platforms and eliminate manual re-entry.",
    tech: ["TypeScript", "Express", "Cron Jobs", "REST APIs"],
    icon: Zap,
    status: "Live",
    demoUrl: "https://replit.com/@office277/CleanSync-1?s=app",
    codeUrl: "https://replit.com/@office277/CleanSync-1",
    embedUrl: "https://replit.com/@office277/CleanSync-1?embed=true",
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(244,63,94,0.2))",
  },
  {
    title: "Knowledge Extractor",
    description: "AI-powered tool that processes documents and unstructured text to build structured, searchable knowledge bases. Extracts key concepts, relationships, and summaries automatically.",
    tech: ["TypeScript", "React", "OpenAI API", "Express"],
    icon: Brain,
    status: "In Development",
    demoUrl: "",
    codeUrl: "",
    embedUrl: "",
    gradient: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(249,115,22,0.2))",
  },
];

export interface ReplitApp {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  url: string;
  account: string;
  pinned: boolean;
}

export const replitApps: ReplitApp[] = [
  {
    name: "Align",
    description: "Multi-tenant operations platform with AI-powered property analysis",
    icon: Layers,
    color: "#3B82F6",
    url: "https://replit.com/@info10885/Align",
    account: "@info10885",
    pinned: true,
  },
  {
    name: "Knowledge Extractor",
    description: "AI-powered document processing and knowledge base builder",
    icon: Brain,
    color: "#EAB308",
    url: "https://replit.com/@info10885/Knowledge-Extractor",
    account: "@info10885",
    pinned: true,
  },
  {
    name: "Developer Portfolio",
    description: "This portfolio site — built with React, TypeScript & Tailwind",
    icon: Layout,
    color: "#8B5CF6",
    url: "https://replit.com/@info10885/Developer-Portfolio",
    account: "@info10885",
    pinned: false,
  },
  {
    name: "JobberBridge",
    description: "Real-time API bridge between Jobber and internal tools",
    icon: Link2,
    color: "#22C55E",
    url: "https://replit.com/@office277/JobberBridge",
    account: "@office277",
    pinned: true,
  },
  {
    name: "JobberToFirestore",
    description: "Automated data pipeline from Jobber into Google Firestore",
    icon: Database,
    color: "#F97316",
    url: "https://replit.com/@office277/JobberToFirestore",
    account: "@office277",
    pinned: true,
  },
  {
    name: "Maine Clean Team Hub",
    description: "Internal operations dashboard for crew scheduling and coordination",
    icon: Users,
    color: "#A855F7",
    url: "https://replit.com/@office277/Maine-Clean-team-hub",
    account: "@office277",
    pinned: true,
  },
  {
    name: "CleanSync",
    description: "Automated sync layer connecting scheduling and invoicing tools",
    icon: RefreshCw,
    color: "#EC4899",
    url: "https://replit.com/@office277/CleanSync-1",
    account: "@office277",
    pinned: true,
  },
];
