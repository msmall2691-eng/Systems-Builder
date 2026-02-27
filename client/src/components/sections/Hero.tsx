import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import avatarImg from "@assets/IMG_2049_1772134195061.png";
import { Terminal, ChevronRight } from "lucide-react";
import { scrollToSection } from "./shared";

export default function Hero() {
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
            <div className="flex items-center gap-6 mb-6">
              <div className="profile-ring-container w-28 h-28 flex-shrink-0" data-testid="hero-avatar-container">
                <div className="profile-ring-outer" />
                <div className="profile-ring-middle" />
                <div className="profile-ring-inner">
                  <img
                    src={avatarImg}
                    alt="Meg"
                    className="w-20 h-20 rounded-full object-cover"
                    data-testid="img-hero-avatar"
                  />
                </div>
              </div>
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
              Meg — Systems Engineer
            </h1>
            <p className="text-primary font-mono text-sm mb-2" data-testid="text-role-tag">
              &lt;AutomationBuilder /&gt;
            </p>
            <p
              className="text-muted-foreground mb-5 max-w-md"
              style={{ fontSize: "17px", lineHeight: "1.7" }}
              data-testid="text-subheading"
            >
              I build software systems that automate real-world operations — dispatch & scheduling workflows, CRM/data integrations, and internal dashboards.
            </p>
            <div className="space-y-2 mb-8 max-w-md" data-testid="hero-proof-bullets">
              <div className="flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-[14px]">Founder → engineer transition — built systems from live operational constraints</p>
              </div>
              <div className="flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-[14px]">Production-minded automation + integrations (webhooks, pipelines, sync)</p>
              </div>
              <div className="flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-[14px]">Cloud-backed tooling (Replit + Firestore + Postgres patterns)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection("featured")}
                className="rounded-md"
                data-testid="button-view-projects"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Featured Systems
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
                  <span>{"      "}<span className="text-blue-300">role</span>=<span className="text-green-400">"Systems Engineer"</span></span>
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
