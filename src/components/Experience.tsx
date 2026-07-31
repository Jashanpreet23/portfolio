import { content } from "@/content/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04 / Experience"
      title="Where I have worked"
      lede="Not a software role, but two years of owning a team, a budget and a set of numbers that get reviewed every month."
    >
      <div className="space-y-10">
        {content.experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.position}`} delay={i * 80}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-fg">
                  {role.position}
                </h3>
                <p className="font-mono text-xs text-fg-subtle">
                  {role.period}
                </p>
              </div>
              <p className="mt-1 text-sm text-accent">
                {role.company}
                {role.location ? (
                  <span className="text-fg-subtle"> · {role.location}</span>
                ) : null}
              </p>

              <ul className="mt-6 space-y-2.5">
                {role.highlights.map((highlight) => (
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
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
