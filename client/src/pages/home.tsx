import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GithubSection from "@/components/github-section";
import avatarImg from "@assets/IMG_2049_1772134195061.png";
import {
  ArrowUpRight,
  Github,
  Mail,
  Calendar,
  Users,
  Workflow,
  Code2,
  Database,
  BarChart3,
  Wrench,
  Terminal,
  MapPin,
  CircleDot,
  GitCommit,
  GitBranch,
  FilePlus,
  FileMinus,
  Star,
  Send,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "GitHub", id: "github" },
  { label: "Contact", id: "contact" },
];

const skills = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express",
  "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", "Python",
  "REST APIs", "Git", "Linux", "Figma", "SQL",
  "Webhooks", "Cron Jobs", "Zod", "Vite", "Postman",
  "Data Modeling", "Responsive Design", "VS Code",
];

const experiences = [
  {
    hash: "f7a3c1d",
    branch: "founder",
    dateRange: "2023 - Present",
    title: "Founder & Systems Builder",
    company: "The Maine Cleaning Company",
    description: "Built internal workflow tools and dashboards to manage operations. Created scheduling systems, CRM tools, and automation pipelines that replaced manual processes across the business.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    filesChanged: 24,
    insertions: 340,
    deletions: 45,
  },
  {
    hash: "a2b9e4f",
    branch: "student",
    dateRange: "2024 - Present",
    title: "Computer Science Student",
    company: "University of Southern Maine",
    description: "Studying Computer Science with a Software Engineering concentration. Applying theoretical knowledge to practical projects and deepening full-stack development skills.",
    tech: ["Python", "Java", "SQL", "Data Structures", "Algorithms"],
    filesChanged: 18,
    insertions: 220,
    deletions: 30,
  },
];

const projects = [
  {
    title: "Scheduling Dashboard",
    description: "Built for a service business managing 50+ weekly appointments. Replaced a spreadsheet-based system with a real-time dashboard that reduced scheduling conflicts by 80% and saved 10+ hours per week.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    icon: Calendar,
  },
  {
    title: "Internal CRM Tool",
    description: "Designed and developed a lightweight CRM to track client interactions, job history, and follow-ups. Centralized scattered data into one interface, improving client retention through better communication tracking.",
    tech: ["React", "Express", "PostgreSQL", "REST API", "Zod"],
    icon: Users,
  },
  {
    title: "Workflow Automation System",
    description: "Created an automation layer that syncs job data across scheduling, invoicing, and communication tools. Eliminated manual data entry across 3 platforms and reduced operational errors by 60%.",
    tech: ["Node.js", "Webhooks", "REST APIs", "Cron Jobs", "TypeScript"],
    icon: Workflow,
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-primary text-sm mb-3" data-testid={`tag-${tag.toLowerCase().replace(/[^a-z]/g, "")}`}>
        {tag}
      </p>
      <h2
        className="text-foreground font-bold"
        style={{ fontSize: "36px", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      data-testid="navbar"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 font-mono text-[15px] font-semibold tracking-tight text-primary"
          data-testid="link-home"
        >
          <img src={avatarImg} alt="Meg" className="w-7 h-7 rounded-full object-cover border border-primary/40" />
          &lt;Meg /&gt;
        </button>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              data-testid={`link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setMobileOpen(false); }}
              className="block text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer w-full text-left"
              data-testid={`mobile-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 pb-28"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-hero"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={avatarImg}
                alt="Meg"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/40"
                data-testid="img-hero-avatar"
              />
              <div>
                <p className="font-mono text-primary text-sm" data-testid="text-system-init">
                  &lt;System.Init /&gt;
                </p>
                <p className="font-mono text-muted-foreground text-xs tracking-wider">
                  PORTLAND, ME :: v1.0.0 ONLINE
                </p>
              </div>
            </div>
            <h1
              className="text-foreground font-bold leading-[1.1] mb-4"
              style={{ fontSize: "48px" }}
              data-testid="text-headline"
            >
              Hello, I'm Meg
            </h1>
            <p className="text-primary font-mono text-sm mb-2" data-testid="text-role-tag">
              &lt;SystemsBuilder /&gt;
            </p>
            <p
              className="text-muted-foreground mb-8 max-w-md"
              style={{ fontSize: "17px", lineHeight: "1.7" }}
              data-testid="text-subheading"
            >
              CS student and systems thinker turning messy workflows into simple, usable software. From running a business to building the tools that power them.
            </p>
            <div className="flex items-center gap-3 flex-wrap mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="rounded-md"
                data-testid="button-view-projects"
              >
                <Terminal className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="rounded-md"
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind"].map((mod) => (
                <Badge key={mod} variant="secondary" className="font-mono text-[11px]" data-testid={`badge-module-${mod.toLowerCase().replace(/[.\s]/g, "")}`}>
                  {mod.toUpperCase()}
                </Badge>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Card className="border border-border bg-card rounded-md p-0">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-muted-foreground text-[12px] font-mono ml-2">portfolio.tsx</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed" data-testid="code-block">
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">1</span>
                  <span className="text-muted-foreground">{"// Welcome to my workspace"}</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">2</span>
                  <span><span className="text-purple-400">import</span> {"{ "}<span className="text-primary">Developer</span>{" }"} <span className="text-purple-400">from</span> <span className="text-green-400">'./universe'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">3</span>
                  <span />
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">4</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-400">Portfolio</span> = () =&gt; {"{"}</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">5</span>
                  <span>{"  "}<span className="text-purple-400">return</span> (</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">6</span>
                  <span>{"    "}&lt;<span className="text-primary">Developer</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">7</span>
                  <span>{"      "}<span className="text-blue-300">name</span>=<span className="text-green-400">"Meg"</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">8</span>
                  <span>{"      "}<span className="text-blue-300">role</span>=<span className="text-green-400">"Systems Builder"</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">9</span>
                  <span>{"      "}<span className="text-blue-300">focus</span>=<span className="text-green-400">"Automation & Operations"</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">10</span>
                  <span>{"    "}/&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">11</span>
                  <span>{"  "})</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4 select-none">12</span>
                  <span>{"};"}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-about"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="# About.system" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <Card className="border border-border bg-card rounded-md p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src={avatarImg}
                  alt="Meg"
                  className="w-24 h-24 rounded-full border-2 border-primary/40 object-cover mb-4"
                  data-testid="img-avatar"
                />
                <div className="space-y-2 w-full mt-2">
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">OPERATOR</span>
                    <span className="text-foreground font-medium">MEG</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">ROLE</span>
                    <span className="text-foreground font-medium text-right">SYSTEMS_BUILDER</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">LOCATION</span>
                    <span className="text-foreground font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      PORTLAND, ME
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">SCHOOL</span>
                    <span className="text-foreground font-medium text-right text-[11px]">USM</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">STATUS</span>
                    <Badge variant="secondary" className="text-[11px] font-mono">
                      <CircleDot className="w-2.5 h-2.5 mr-1 text-green-400" />
                      OPEN
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border border-border bg-card rounded-md p-0">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground text-[12px] font-mono">user_profile.log</span>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="font-mono text-primary text-[13px] mb-2" data-testid="text-whoami">
                    <span className="text-green-400">&#10140;</span> whoami
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "15px", lineHeight: "1.7" }} data-testid="text-bio-1">
                    I'm a Computer Science student and systems thinker who enjoys turning messy workflows into simple, usable software. My background running a business led me to build internal tools for scheduling, automation, and operations management — sparking my transition into software development and system design.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-primary text-[13px] mb-2" data-testid="text-mission">
                    <span className="text-green-400">&#10140;</span> cat mission.txt
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "15px", lineHeight: "1.7" }} data-testid="text-bio-2">
                    Studying Computer Science with a Software Engineering concentration at the University of Southern Maine. Bridging real business needs with clean technical solutions through automation, data, and full-stack development.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="border border-border bg-card rounded-md p-4 text-center">
                <p className="text-primary font-bold text-2xl font-mono" data-testid="stat-experience">2+</p>
                <p className="text-muted-foreground text-[12px] font-mono mt-1">YRS EXP</p>
              </Card>
              <Card className="border border-border bg-card rounded-md p-4 text-center">
                <p className="text-primary font-bold text-2xl font-mono" data-testid="stat-projects">10+</p>
                <p className="text-muted-foreground text-[12px] font-mono mt-1">PROJECTS</p>
              </Card>
              <Card className="border border-border bg-card rounded-md p-4 text-center">
                <p className="text-primary font-bold text-2xl font-mono" data-testid="stat-tools">5+</p>
                <p className="text-muted-foreground text-[12px] font-mono mt-1">TOOLS BUILT</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-skills"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="# Skills.json" title="Tech Stack" />
        <div className="flex flex-wrap gap-3" data-testid="skills-grid">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-[13px] font-mono border border-border"
              data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s/.]/g, "-")}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-experience"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ git log --stat --oneline" title="Experience" />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6" data-testid={`experience-entry-${index}`}>
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center z-10">
                    <GitCommit className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-mono text-primary text-[12px]">{exp.hash}</span>
                    <Badge variant="secondary" className="font-mono text-[11px]">
                      <GitBranch className="w-3 h-3 mr-1" />
                      {exp.branch}
                    </Badge>
                    <span className="text-muted-foreground text-[12px] font-mono">{exp.dateRange}</span>
                  </div>

                  <Card className="border border-border bg-card rounded-md p-6">
                    <h3 className="text-foreground font-semibold mb-1" style={{ fontSize: "18px" }} data-testid={`text-exp-title-${index}`}>
                      {exp.title} <span className="text-muted-foreground font-normal">@ {exp.company}</span>
                    </h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: "15px", lineHeight: "1.7" }} data-testid={`text-exp-desc-${index}`}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-[12px] font-mono text-muted-foreground flex-wrap">
                      <span>{exp.filesChanged} files changed</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <FilePlus className="w-3 h-3" />+{exp.insertions}
                      </span>
                      <span className="text-red-400 flex items-center gap-1">
                        <FileMinus className="w-3 h-3" />-{exp.deletions}
                      </span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}

            <div className="relative flex gap-6">
              <div className="hidden md:flex flex-col items-center pt-1">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center z-10">
                  <Star className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <p className="font-mono text-muted-foreground text-[13px]">Initial Commit (Hello World)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-projects"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ ls -la ~/projects" title="Featured Projects" />

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-border bg-card rounded-md p-0 hover-elevate transition-all duration-200"
              data-testid={`card-project-${index}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-accent flex items-center justify-center p-10 md:rounded-l-md">
                  <div className="w-full aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                    <project.icon className="w-12 h-12 text-primary opacity-40" />
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h3
                    className="text-foreground font-semibold mb-3"
                    style={{ fontSize: "20px" }}
                    data-testid={`text-project-title-${index}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-5"
                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                    data-testid={`text-project-desc-${index}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="font-mono text-[11px]"
                        data-testid={`badge-tech-${t.toLowerCase().replace(/[\s/]/g, "-")}`}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-md text-[13px]"
                      data-testid={`button-demo-${index}`}
                    >
                      Demo
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-md text-[13px]"
                      data-testid={`button-code-${index}`}
                    >
                      Code
                      <Github className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactInfo = {
    status: "open_to_work",
    email: "megan.small@maine.edu",
    location: "Portland, ME",
    socials: {
      github: "@msmall2691-eng",
    },
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-contact"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ ./contact.exe" title="Get in Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border border-border bg-card rounded-md p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground text-[12px] font-mono">contact_info.json</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed" data-testid="contact-json">
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">1</span>
                <span className="text-foreground">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">2</span>
                <span>{"  "}<span className="text-primary">"status"</span>: <span className="text-green-400">"{contactInfo.status}"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">3</span>
                <span>{"  "}<span className="text-primary">"email"</span>: <span className="text-green-400">"<a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">4</span>
                <span>{"  "}<span className="text-primary">"location"</span>: <span className="text-green-400">"{contactInfo.location}"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">5</span>
                <span>{"  "}<span className="text-primary">"socials"</span>: {"{"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">6</span>
                <span>{"    "}<span className="text-primary">"github"</span>: <span className="text-green-400">"<a href="https://github.com/msmall2691-eng" target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.socials.github}</a>"</span></span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">7</span>
                <span>{"  }"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">8</span>
                <span className="text-foreground">{"}"}</span>
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card rounded-md p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground text-[12px] font-mono">sendMessage.ts</span>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> name =
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='"Your name"'
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> email =
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='"you@example.com"'
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> message =
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="`Your message here...`"
                    rows={4}
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full rounded-md font-mono"
                  onClick={() => {
                    if (formData.name && formData.email && formData.message) {
                      window.location.href = `mailto:megan.small@maine.edu?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
                    }
                  }}
                  data-testid="button-send"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Run Script
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border" data-testid="footer">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[13px] text-muted-foreground font-mono" data-testid="text-copyright">
          &lt;Meg /&gt; &mdash; Systems Builder
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:megan.small@maine.edu" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Email" data-testid="footer-link-email">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/msmall2691-eng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="GitHub" data-testid="footer-link-github">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="page-home">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubSection />
      <Contact />
      <Footer />
    </div>
  );
}