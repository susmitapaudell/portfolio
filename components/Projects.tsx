import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" path="~/projects" title="Projects">
      <ul>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </Section>
  );
}
