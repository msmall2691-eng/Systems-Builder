import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { platformGroups } from "@/data/platforms";
import { SectionHeader } from "./shared";

export default function PlatformsExperience() {
  return (
    <section
      id="platforms"
      className="py-24 lg:pr-20"
      data-testid="section-platforms"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ cat platforms.yml" title="Systems & Platforms Experience" />

        <p
          className="text-muted-foreground mb-10 max-w-2xl"
          style={{ fontSize: "15px", lineHeight: "1.7" }}
          data-testid="text-platforms-intro"
        >
          Over several years I've built operational software across cloud, low-code, and full-stack environments — selecting tools based on constraints like speed, scalability, and integration surface area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          {platformGroups.map((group, index) => (
            <Card
              key={index}
              className="border border-border bg-card rounded-md p-0"
              data-testid={`card-platform-${index}`}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <group.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground text-[13px] font-mono font-semibold">{group.title}</span>
              </div>
              <div className="p-5 space-y-3">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-foreground text-[13px] font-semibold">{item.name}</span>
                      <span className="text-muted-foreground text-[12px] ml-2">— {item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
