import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import avatarImg from "@assets/IMG_2049_1772134195061.png";
import { Terminal, MapPin, CircleDot } from "lucide-react";
import { SectionHeader } from "./shared";

export default function About() {
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
                <div className="profile-ring-container w-36 h-36 mb-4" data-testid="about-avatar-container">
                  <div className="profile-ring-outer" />
                  <div className="profile-ring-middle" />
                  <div className="profile-ring-inner">
                    <img
                      src={avatarImg}
                      alt="Meg"
                      className="w-28 h-28 rounded-full object-cover"
                      data-testid="img-avatar"
                    />
                  </div>
                </div>
                <div className="space-y-2 w-full mt-2">
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">OPERATOR</span>
                    <span className="text-foreground font-medium">MEG</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-muted-foreground font-mono">ROLE</span>
                    <span className="text-foreground font-medium text-right">SYSTEMS_ENGINEER</span>
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
                    With a background in business operations and systems design, I began building internal tools to automate scheduling, data tracking, and workflows. This hands-on experience led me to pursue Computer Science formally while continuing to design and prototype real-world software systems.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-primary text-[13px] mb-2" data-testid="text-mission">
                    <span className="text-green-400">&#10140;</span> cat mission.txt
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "15px", lineHeight: "1.7" }} data-testid="text-bio-2">
                    Deepening software engineering practice through Computer Science studies at USM while building production tools that solve real operational problems — from dispatch automation to API integrations and data pipelines.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="border border-border bg-card rounded-md p-4 text-center">
                <p className="text-primary font-bold text-2xl font-mono" data-testid="stat-experience">3+</p>
                <p className="text-muted-foreground text-[12px] font-mono mt-1">YRS BUILDING</p>
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
