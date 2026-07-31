import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-border-strong sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
          {project.name}
        </h3>
        <p className="font-mono text-xs text-fg-subtle">{project.year}</p>
      </div>

      <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent">
        {project.kind}
        {project.context ? (
          <span className="text-fg-subtle"> · {project.context}</span>
        ) : null}
      </p>

      <p className="mt-5 text-base leading-relaxed text-fg-muted">
        {project.summary}
      </p>

      <div className="mt-5 rounded-lg border border-border bg-surface-2 px-4 py-3">
        <p className="text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">My role: </span>
          {project.role}
        </p>
      </div>

      <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
        What I built
      </h4>
      <ul className="mt-3 space-y-2.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight.slice(0, 40)}
            className="flex gap-3 text-sm leading-relaxed text-fg-muted"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links && project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {link.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
