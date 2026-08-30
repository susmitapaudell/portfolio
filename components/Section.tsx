import { ReactNode } from "react";

type SectionProps = {
  id: string;
  path: string; // e.g. "~/about" — shown as the section's eyebrow label
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  path,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-border py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-content px-6">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2
            id={`${id}-heading`}
            className="text-xl font-semibold tracking-tight text-text sm:text-2xl"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="hidden font-mono text-xs text-muted sm:inline"
          >
            {path}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
