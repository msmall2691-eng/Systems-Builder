import { useState } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress,
  SiPostgresql, SiHtml5, SiCss3, SiTailwindcss, SiPython,
  SiGit, SiLinux, SiVite, SiPostman,
  SiZod, SiStripe, SiFirebase, SiOpenai, SiDrizzle,
  SiReplit, SiShadcnui, SiReactquery, SiGithub,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Database, Globe, Webhook, Clock, LayoutGrid, Code2, Cpu, Workflow, Cog, BrainCircuit, Cloud, HardDrive } from "lucide-react";

interface Skill {
  label: string;
  icon: IconType | null;
  lucideIcon?: typeof Database;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Development",
    skills: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { label: "Express", icon: SiExpress, color: "#8899AA" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS3", icon: SiCss3, color: "#1572B6" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    name: "Systems & Data",
    skills: [
      { label: "SQL", icon: null, lucideIcon: Database, color: "#4FC3F7" },
      { label: "Drizzle ORM", icon: SiDrizzle, color: "#C5F74F" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { label: "REST APIs", icon: null, lucideIcon: Globe, color: "#66BB6A" },
      { label: "Webhooks", icon: null, lucideIcon: Webhook, color: "#AB47BC" },
      { label: "Data Modeling", icon: null, lucideIcon: LayoutGrid, color: "#26A69A" },
      { label: "Cron Jobs", icon: null, lucideIcon: Clock, color: "#78909C" },
      { label: "Database Design", icon: null, lucideIcon: HardDrive, color: "#5C6BC0" },
    ],
  },
  {
    name: "Platforms",
    skills: [
      { label: "Jobber", icon: null, lucideIcon: Cog, color: "#2ECC71" },
      { label: "GoHighLevel", icon: null, lucideIcon: Cloud, color: "#4285F4" },
      { label: "Connecteam", icon: null, lucideIcon: Cpu, color: "#FF6F00" },
      { label: "Stripe", icon: SiStripe, color: "#635BFF" },
      { label: "Replit", icon: SiReplit, color: "#F26207" },
      { label: "GitHub", icon: SiGithub, color: "#ADBAC7" },
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      { label: "OpenAI", icon: SiOpenai, color: "#412991" },
      { label: "Workflow Automation", icon: null, lucideIcon: Workflow, color: "#66BB6A" },
      { label: "Process Optimization", icon: null, lucideIcon: Cog, color: "#78909C" },
      { label: "AI-assisted Dev", icon: null, lucideIcon: BrainCircuit, color: "#AB47BC" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "Linux", icon: SiLinux, color: "#FCC624" },
      { label: "Python", icon: SiPython, color: "#3776AB" },
      { label: "Zod", icon: SiZod, color: "#3068B7" },
      { label: "Postman", icon: SiPostman, color: "#FF6C37" },
      { label: "VS Code", icon: null, lucideIcon: Code2, color: "#007ACC" },
      { label: "Shadcn UI", icon: SiShadcnui, color: "#FFFFFF" },
      { label: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
];

function SkillTile({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = skill.icon;
  const LucideIcon = skill.lucideIcon;

  const iconColor = hovered ? skill.color : `${skill.color}99`;
  const iconFilter = hovered ? `drop-shadow(0 0 6px ${skill.color}40)` : "none";

  return (
    <div
      className="group relative flex flex-col items-center gap-2.5 rounded-md border border-border bg-card p-4 transition-all duration-300 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      data-testid={`skill-tile-${skill.label.toLowerCase().replace(/[\s/.]/g, "-")}`}
    >
      <div
        className="absolute inset-0 rounded-md transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${skill.color}50, 0 0 20px ${skill.color}15`,
        }}
      />
      <div
        className="absolute inset-0 rounded-md transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at center, ${skill.color}08 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative z-10 transition-transform duration-300"
        style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
      >
        {IconComponent ? (
          <IconComponent
            size={24}
            className="transition-all duration-300"
            style={{ color: iconColor, filter: iconFilter }}
          />
        ) : LucideIcon ? (
          <LucideIcon
            className="w-6 h-6 transition-all duration-300"
            style={{ color: iconColor, filter: iconFilter }}
          />
        ) : null}
      </div>
      <span className={`relative z-10 font-mono text-[12px] transition-colors duration-300 text-center leading-tight ${hovered ? "text-foreground" : "text-muted-foreground"}`}>
        {skill.label}
      </span>
    </div>
  );
}

export default function SkillsGraph() {
  return (
    <div className="w-full space-y-10" data-testid="skills-graph">
      {skillCategories.map((category) => (
        <div key={category.name}>
          <p
            className="font-mono text-muted-foreground text-[12px] mb-4 tracking-wider uppercase"
            data-testid={`skills-category-${category.name.toLowerCase().replace(/[\s&]/g, "-")}`}
          >
            {category.name}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {category.skills.map((skill) => (
              <SkillTile key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
