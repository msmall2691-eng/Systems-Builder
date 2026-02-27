import {
  Cog,
  Network,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SystemsCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const systemsExperience: SystemsCategory[] = [
  {
    title: "Systems Design & Operations Engineering",
    icon: Cog,
    items: [
      "Designed workflow systems supporting scheduling, dispatching, and reporting across service operations",
      "Modeled real-world business processes into scalable digital architectures",
      "Built internal dashboards and automation workflows to eliminate manual coordination",
    ],
  },
  {
    title: "Automation & Integration",
    icon: Network,
    items: [
      "Implemented API-driven workflows between Jobber, Firestore, and internal tools",
      "Tested and deployed CRM, scheduling, and communication platform integrations",
      "Built automation prototypes using AI-assisted development on Replit",
    ],
  },
  {
    title: "Software Development Practice",
    icon: Rocket,
    items: [
      "Rapid prototyping of production tools using Replit and GitHub",
      "Database modeling and structured data workflows with PostgreSQL and Drizzle ORM",
      "Iterative UI and system design with React, TypeScript, and Tailwind",
    ],
  },
];

export const systemsBuilt = [
  "Scheduling & dispatch automation",
  "Internal CRM concepts",
  "Job synchronization tools",
  "Operational dashboards",
  "Workflow tracking systems",
  "AI-assisted process tools",
];

export const currentlyExploring = [
  "Backend architecture",
  "Database systems",
  "Automation tooling",
  "Scalable workflow design",
  "Software engineering fundamentals",
];

export const timeline = [
  { year: "2017–Present", label: "Founder & Operator", branch: "main" },
  { year: "2023–Present", label: "Systems & Automation Development", branch: "dev" },
  { year: "2025–Present", label: "Computer Science Studies", branch: "cs" },
];
