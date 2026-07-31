import { content } from "@/content/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03 / Skills"
      title="What I work with"
      lede="Grouped by what I reach for rather than by how confident I feel — everything here has been used on a project on this page or in my degree."
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {content.skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 50}>
            <div className="border-t border-border pt-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm text-fg-muted"
                  >
                    {item}
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
