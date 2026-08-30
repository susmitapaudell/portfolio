import Section from "./Section";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" path="~/skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
