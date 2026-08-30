import type { Project } from "@/data/portfolio";

const statusLabel: Record<Project["status"], string> = {
  active: "in progress",
  concept: "concept",
  archived: "archived",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <li className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="font-mono text-xs text-muted sm:w-14 sm:pt-1">
          {num}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-text">
              {project.title}
            </h3>
            <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {statusLabel[project.status]}
            </span>
          </div>

          <p className="mt-2 max-w-2xl leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[11px] text-muted before:mr-1.5 before:content-['#']"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                GitHub ↗
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
