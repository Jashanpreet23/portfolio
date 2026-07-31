import { content } from "@/content/profile";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  const featured = content.projects.filter((project) => project.featured);
  const others = content.projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      index="02 / Projects"
      title="Things I have built"
      lede="Four projects from my degree, described by what I personally worked on. Where a project was built with a team, it says so."
    >
      <div className="space-y-6">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {others.length > 0 ? (
        <>
          <Reveal>
            <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              Also worth a look
            </h3>
          </Reveal>
          <div className="mt-6 space-y-6">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}
