import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" path="~/about" title="About">
      <div className="max-w-prose space-y-4">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
