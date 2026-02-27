import {
  Database,
  Monitor,
  BarChart3,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PlatformGroup {
  title: string;
  icon: LucideIcon;
  items: { name: string; label: string }[];
}

export const platformGroups: PlatformGroup[] = [
  {
    title: "Cloud & Backend",
    icon: Database,
    items: [
      { name: "Firestore / Firebase", label: "Real-time data + reporting" },
      { name: "PostgreSQL + Drizzle", label: "Relational modeling" },
      { name: "Express APIs", label: "Backend routes + middleware" },
      { name: "Webhooks", label: "Event-driven updates" },
    ],
  },
  {
    title: "App Development",
    icon: Monitor,
    items: [
      { name: "React + TypeScript", label: "UI + component systems" },
      { name: "Vite", label: "Dev/build tooling" },
      { name: "Replit", label: "Deployment workflow" },
      { name: "Wouter", label: "Client-side routing" },
    ],
  },
  {
    title: "Data & Ops Systems",
    icon: BarChart3,
    items: [
      { name: "Jobber", label: "Ops CRM + scheduling data source" },
      { name: "Internal Dashboards", label: "Workflow modeling + visibility" },
      { name: "GoHighLevel", label: "Marketing + pipeline automation" },
      { name: "Connecteam", label: "Team coordination + scheduling" },
    ],
  },
  {
    title: "Automation & Integration",
    icon: Workflow,
    items: [
      { name: "Jobber Webhooks", label: "Real-time event ingestion" },
      { name: "Cron Sync Processes", label: "Scheduled data reconciliation" },
      { name: "API Bridge Patterns", label: "Platform-to-platform routing" },
      { name: "Data Pipelines", label: "Jobber → Firestore transforms" },
    ],
  },
];
