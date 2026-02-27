import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronRight, CheckCircle2, Wrench, Compass, GitCommit, GitBranch } from "lucide-react";
import { systemsExperience, systemsBuilt, currentlyExploring, timeline } from "@/data/systems";
import { SectionHeader } from "./shared";

export default function SystemsAndTechnical() {
  return (
    <section
      id="systems"
      className="py-24 lg:pr-20"
      data-testid="section-systems"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ cat systems_experience.md" title="Systems & Technical Experience" />

        <p
          className="text-muted-foreground mb-10 max-w-2xl"
          style={{ fontSize: "15px", lineHeight: "1.7" }}
          data-testid="text-systems-intro"
        >
          Many of my projects originate from operational challenges encountered while running and scaling a service business. Identifying inefficiencies and translating them into technical solutions led me to pursue Computer Science and systems development formally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-on-scroll">
          {systemsExperience.map((category, index) => (
            <Card
              key={index}
              className="border border-border bg-card rounded-md p-0"
              data-testid={`card-systems-${index}`}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <category.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground text-[13px] font-mono font-semibold">{category.title}</span>
              </div>
              <div className="p-5 space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-[13px]" style={{ lineHeight: "1.6" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-on-scroll">
          <Card className="border border-border bg-card rounded-md p-0 md:col-span-1" data-testid="card-systems-built">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Wrench className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground text-[13px] font-mono font-semibold">Systems Built or Prototyped</span>
            </div>
            <div className="p-5 space-y-2.5">
              {systemsBuilt.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground text-[13px] font-mono">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border border-border bg-card rounded-md p-0 md:col-span-1" data-testid="card-exploring">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Compass className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground text-[13px] font-mono font-semibold">Currently Exploring</span>
            </div>
            <div className="p-5 space-y-2.5">
              {currentlyExploring.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-[13px] font-mono">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border border-border bg-card rounded-md p-0 md:col-span-1" data-testid="card-timeline">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <GitCommit className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground text-[13px] font-mono font-semibold">Timeline</span>
            </div>
            <div className="p-5">
              <div className="relative space-y-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                {timeline.map((entry, i) => (
                  <div key={i} className="flex items-start gap-4 relative" data-testid={`timeline-entry-${i}`}>
                    <div
                      className="w-4 h-4 rounded-full border-2 border-background flex-shrink-0 z-10"
                      style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                    />
                    <div>
                      <p className="text-foreground text-[13px] font-semibold">{entry.label}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant="secondary" className="font-mono text-[10px]">
                          <GitBranch className="w-2.5 h-2.5 mr-1" />
                          {entry.branch}
                        </Badge>
                        <span className="text-muted-foreground text-[11px] font-mono">{entry.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
