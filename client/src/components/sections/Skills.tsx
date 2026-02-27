import SkillsGraph from "@/components/skills-graph";
import { SectionHeader } from "./shared";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-skills"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="# Technologies.json" title="Technologies & Systems" />
        <SkillsGraph />
      </div>
    </section>
  );
}
