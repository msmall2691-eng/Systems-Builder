import {
  CodeXml,
  Layers,
  User,
  Cpu,
  Grid3x3,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  id: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  { label: "Home", id: "hero", icon: CodeXml },
  { label: "Featured", id: "featured", icon: Layers },
  { label: "About", id: "about", icon: User },
  { label: "Systems", id: "systems", icon: Cpu },
  { label: "Platforms", id: "platforms", icon: Grid3x3 },
  { label: "Experience", id: "experience", icon: Briefcase },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Contact", id: "contact", icon: Mail },
];
