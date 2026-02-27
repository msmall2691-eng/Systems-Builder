import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, FilePlus, FileMinus, Star } from "lucide-react";
import { experiences } from "@/data/experiences";
import type { ExperienceEntry } from "@/data/experiences";
import { SectionHeader } from "./shared";

function DateBadge({ dateRange }: { dateRange: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
      <Calendar className="w-3.5 h-3.5 text-primary" />
      <span className="font-mono text-[12px] text-foreground whitespace-nowrap">{dateRange}</span>
    </div>
  );
}

function ExperienceCard({ exp, index }: { exp: ExperienceEntry; index: number }) {
  return (
    <Card className="border border-border bg-card rounded-md p-6" data-testid={`card-experience-${index}`}>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-primary text-[12px]">{exp.hash}</span>
        <Badge variant="secondary" className="font-mono text-[11px]">
          <GitBranch className="w-3 h-3 mr-1" />
          {exp.branch}
        </Badge>
      </div>
      <h3 className="text-foreground font-semibold mb-1" style={{ fontSize: "18px" }} data-testid={`text-exp-title-${index}`}>
        {exp.title}
      </h3>
      <p className="text-muted-foreground font-mono text-[13px] mb-3">@ {exp.company}</p>
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
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:pr-20"
      data-testid="section-experience"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ git log --stat --oneline" title="Experience" />

        <div className="relative animate-on-scroll">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative" data-testid={`experience-entry-${index}`}>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div
                      className="w-5 h-5 rounded-full border-[3px] border-background"
                      style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                    />
                  </div>

                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
                    />
                    <DateBadge dateRange={exp.dateRange} />
                  </div>

                  <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                    {isEven ? (
                      <>
                        <div className="pr-4">
                          <ExperienceCard exp={exp} index={index} />
                        </div>
                        <div className="pl-4 flex items-start pt-4">
                          <DateBadge dateRange={exp.dateRange} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pr-4 flex items-start justify-end pt-4">
                          <DateBadge dateRange={exp.dateRange} />
                        </div>
                        <div className="pl-4">
                          <ExperienceCard exp={exp} index={index} />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="md:hidden">
                    <ExperienceCard exp={exp} index={index} />
                  </div>
                </div>
              );
            })}

            <div className="relative">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 z-10">
                <div className="w-5 h-5 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-muted-foreground" />
                </div>
              </div>
              <div className="md:hidden flex items-center gap-3 mb-1">
                <div className="w-4 h-4 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0">
                  <Star className="w-2 h-2 text-muted-foreground" />
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                <div className="pr-4 flex justify-end">
                  <p className="font-mono text-muted-foreground text-[13px] pt-1">Initial Commit (Hello World)</p>
                </div>
                <div />
              </div>
              <div className="md:hidden">
                <p className="font-mono text-muted-foreground text-[13px]">Initial Commit (Hello World)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
