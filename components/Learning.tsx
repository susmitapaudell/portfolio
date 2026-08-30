import Section from "./Section";
import { learning } from "@/data/portfolio";

export default function Learning() {
  return (
    <Section id="learning" path="~/learning" title="Currently learning">
      <ul className="space-y-6">
        {learning.map((entry) => (
          <li
            key={entry.title}
            className="border-l-2 border-accent-soft pl-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-sm font-semibold text-text">
                {entry.title}
              </h3>
              <span className="font-mono text-[11px] text-muted">
                {entry.timeframe}
              </span>
            </div>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
              {entry.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
