import Section from "./Section";
import { profile, contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" path="~/contact" title={contact.heading}>
      <p className="max-w-prose leading-relaxed text-muted">{contact.body}</p>

      <ul className="mt-6 space-y-2 font-mono text-sm">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {profile.socials.github.replace("https://", "")}
          </a>
        </li>
        <li>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {profile.socials.linkedin.replace("https://", "")}
          </a>
        </li>
      </ul>
    </Section>
  );
}
