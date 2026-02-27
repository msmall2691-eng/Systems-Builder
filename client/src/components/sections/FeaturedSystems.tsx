import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Code2, CircleDot, CheckCircle2 } from "lucide-react";
import { featuredSystems } from "@/data/featured-systems";
import { SectionHeader } from "./shared";

export default function FeaturedSystems() {
  return (
    <section
      id="featured"
      className="py-24 lg:pr-20"
      data-testid="section-featured"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ cat featured_systems.md" title="Featured Systems" />

        <div className="space-y-6 animate-on-scroll">
          {featuredSystems.map((system, index) => (
            <Card
              key={index}
              className="border border-border bg-card rounded-md overflow-hidden"
              data-testid={`card-featured-${index}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0">
                <div
                  className="flex flex-col items-center justify-center p-8 relative"
                  style={{ background: system.gradient }}
                >
                  <system.icon className="w-10 h-10 text-foreground/70 mb-3" />
                  <h3 className="text-foreground font-semibold text-[17px] font-mono text-center" data-testid={`text-featured-title-${index}`}>
                    {system.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`font-mono text-[10px] mt-2 no-default-hover-elevate no-default-active-elevate ${
                      system.status === "Live"
                        ? "text-green-400 border-green-400/30 bg-green-400/10"
                        : "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
                    }`}
                    data-testid={`badge-featured-status-${index}`}
                  >
                    <CircleDot className="w-2.5 h-2.5 mr-1" />
                    {system.status}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-muted-foreground text-[12px] font-mono uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-foreground text-[14px]" style={{ lineHeight: "1.6" }}>{system.problem}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-muted-foreground text-[12px] font-mono uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-foreground text-[14px]" style={{ lineHeight: "1.6" }}>{system.solution}</p>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {system.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-[13px]">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {system.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[10px]">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {system.demoUrl && (
                      <Button asChild variant="outline" size="sm" className="rounded-md text-[12px] font-mono" data-testid={`button-featured-demo-${index}`}>
                        <a href={system.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {system.codeUrl && (
                      <Button asChild variant="outline" size="sm" className="rounded-md text-[12px] font-mono" data-testid={`button-featured-code-${index}`}>
                        <a href={system.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Code2 className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
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
