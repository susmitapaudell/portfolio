import type { SkillGroup as SkillGroupType, SkillLevel } from "@/data/portfolio";

const levelLabel: Record<SkillLevel, string> = {
  learning: "learning",
  working: "working knowledge",
  comfortable: "comfortable",
};

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="border border-border p-5">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-text">{group.title}</h3>
        <span className="font-mono text-[11px] text-muted">{group.path}</span>
      </div>
      <ul className="space-y-2.5">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-baseline justify-between gap-3 text-sm"
          >
            <span className="text-text">{skill.name}</span>
            <span className="whitespace-nowrap font-mono text-[11px] text-muted">
              {levelLabel[skill.level]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
