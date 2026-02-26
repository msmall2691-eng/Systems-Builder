import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GithubSection from "@/components/github-section";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Calendar,
  Users,
  Workflow,
  Code2,
  Database,
  BarChart3,
  Wrench,
  ArrowDown,
} from "lucide-react";

const projects = [
  {
    title: "Scheduling Dashboard",
    description:
      "Built for a service business managing 50+ weekly appointments. Replaced a spreadsheet-based system with a real-time dashboard that reduced scheduling conflicts by 80% and saved 10+ hours per week.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    icon: Calendar,
  },
  {
    title: "Internal CRM Tool",
    description:
      "Designed and developed a lightweight CRM to track client interactions, job history, and follow-ups. Centralized scattered data into one interface, improving client retention through better communication tracking.",
    tech: ["React", "Express", "PostgreSQL", "REST API", "Zod"],
    icon: Users,
  },
  {
    title: "Workflow Automation System",
    description:
      "Created an automation layer that syncs job data across scheduling, invoicing, and communication tools. Eliminated manual data entry across 3 platforms and reduced operational errors by 60%.",
    tech: ["Node.js", "Webhooks", "REST APIs", "Cron Jobs", "TypeScript"],
    icon: Workflow,
  },
];

const skillGroups = [
  {
    label: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
  },
  {
    label: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Authentication"],
  },
  {
    label: "Data",
    icon: BarChart3,
    skills: ["SQL", "Data Modeling", "ETL Pipelines", "Reporting Dashboards"],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Linux", "Figma", "Postman"],
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

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      data-testid="navbar"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-[15px] font-semibold tracking-tight text-[#111827]"
          data-testid="link-home"
        >
          Meg.
        </button>
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[14px] text-[#6B7280] transition-colors duration-200 cursor-pointer"
            data-testid="link-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("github")}
            className="text-[14px] text-[#6B7280] transition-colors duration-200 cursor-pointer"
            data-testid="link-github"
          >
            GitHub
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[14px] text-[#6B7280] transition-colors duration-200 cursor-pointer"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[14px] text-[#6B7280] transition-colors duration-200 cursor-pointer"
            data-testid="link-contact"
          >
            Contact
          </button>
        </div>
      </div>
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
        <div className="max-w-3xl">
          <p
            className="text-[#417D9F] font-medium text-[15px] tracking-wide uppercase mb-6"
            data-testid="text-greeting"
          >
            Hello, I'm Meg
          </p>
          <h1
            className="text-[#111827] font-bold leading-[1.1] mb-6"
            style={{ fontSize: "52px" }}
            data-testid="text-headline"
          >
            Systems Builder &<br />
            Computer Science Student
          </h1>
          <p
            className="text-[#6B7280] mb-10 max-w-xl"
            style={{ fontSize: "18px", lineHeight: "1.6" }}
            data-testid="text-subheading"
          >
            I build automation tools and web applications that simplify complex
            workflows. Focused on turning operational chaos into clean, reliable
            systems.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-[#417D9F] text-white border-[#417D9F] rounded-md"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-[#E5E7EB] text-[#111827] rounded-md"
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
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
        <p className="text-[#417D9F] font-medium text-[14px] tracking-wide uppercase mb-3">
          Portfolio
        </p>
        <h2
          className="text-[#111827] font-bold mb-4"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
          data-testid="text-projects-title"
        >
          Featured Projects
        </h2>
        <p
          className="text-[#6B7280] mb-14 max-w-xl"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          Real tools built to solve real problems. Each project started with a
          pain point and ended with a working system.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-[#F3F4F6] bg-white rounded-md p-0"
              data-testid={`card-project-${index}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-[#F9FAFB] flex items-center justify-center p-10 md:rounded-l-md">
                  <div className="w-full aspect-video bg-[#F3F4F6] rounded-md flex items-center justify-center border border-[#E5E7EB]">
                    <project.icon className="w-12 h-12 text-[#417D9F] opacity-40" />
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h3
                    className="text-[#111827] font-semibold mb-3"
                    style={{ fontSize: "22px" }}
                    data-testid={`text-project-title-${index}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#6B7280] mb-6"
                    style={{ fontSize: "18px", lineHeight: "1.6" }}
                    data-testid={`text-project-desc-${index}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-[#F3F4F6] text-[#374151] border-none font-normal text-[13px]"
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
                      className="border-[#E5E7EB] text-[#111827] rounded-md text-[13px]"
                      data-testid={`button-demo-${index}`}
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#E5E7EB] text-[#111827] rounded-md text-[13px]"
                      data-testid={`button-code-${index}`}
                    >
                      Source Code
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

function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAFA] py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-about"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#417D9F] font-medium text-[14px] tracking-wide uppercase mb-3">
          About
        </p>
        <h2
          className="text-[#111827] font-bold mb-6"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
          data-testid="text-about-title"
        >
          A bit about me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <p
              className="text-[#374151] mb-5"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
              data-testid="text-bio-1"
            >
              I'm a Computer Science student with a background in building and
              running a service business. Before writing my first line of code in
              a classroom, I was already building tools to solve real
              problems — scheduling dashboards, client trackers, and workflow
              automations that kept my operations running smoothly.
            </p>
            <p
              className="text-[#374151] mb-5"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
              data-testid="text-bio-2"
            >
              I think in systems. I look at messy processes and see
              opportunities for clean, structured solutions. My approach combines
              practical business experience with a growing foundation in
              computer science — bridging the gap between what businesses need
              and what technology can deliver.
            </p>
            <p
              className="text-[#374151]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
              data-testid="text-bio-3"
            >
              Right now, I'm focused on deepening my skills in full-stack
              development, data structures, and algorithms while continuing to
              build practical tools. I believe the best software comes from
              understanding the problem deeply before writing any code.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3
              className="text-[#111827] font-semibold mb-8"
              style={{ fontSize: "20px" }}
              data-testid="text-skills-title"
            >
              Skills & Tools
            </h3>
            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.label} data-testid={`skills-group-${group.label.toLowerCase()}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <group.icon className="w-4 h-4 text-[#417D9F]" />
                    <span className="text-[#111827] font-medium text-[14px]">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white text-[#374151] border border-[#E5E7EB] font-normal text-[13px]"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s/]/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-contact"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#417D9F] font-medium text-[14px] tracking-wide uppercase mb-3">
            Contact
          </p>
          <h2
            className="text-[#111827] font-bold mb-4"
            style={{ fontSize: "36px", lineHeight: "1.2" }}
            data-testid="text-contact-title"
          >
            Let's build something together.
          </h2>
          <p
            className="text-[#6B7280] mb-10"
            style={{ fontSize: "18px", lineHeight: "1.6" }}
            data-testid="text-contact-desc"
          >
            I'm always interested in hearing about new projects, collaboration
            opportunities, or just connecting with fellow builders.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              asChild
              className="bg-[#417D9F] text-white border-[#417D9F] rounded-md"
              data-testid="button-email"
            >
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[#E5E7EB] text-[#111827] rounded-md"
              data-testid="button-github"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[#E5E7EB] text-[#111827] rounded-md"
              data-testid="button-linkedin"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#F3F4F6] bg-white" data-testid="footer">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[13px] text-[#9CA3AF]" data-testid="text-copyright">
          Meg &mdash; Systems Builder & CS Student
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@example.com"
            className="text-[#9CA3AF] transition-colors duration-200"
            aria-label="Email"
            data-testid="footer-link-email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] transition-colors duration-200"
            aria-label="GitHub"
            data-testid="footer-link-github"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] transition-colors duration-200"
            aria-label="LinkedIn"
            data-testid="footer-link-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-home">
      <Navbar />
      <Hero />
      <Projects />
      <GithubSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}