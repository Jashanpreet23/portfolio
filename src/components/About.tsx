import { content } from "@/content/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const { profile, education } = content;

  return (
    <Section id="about" index="01 / About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Reveal className="space-y-5">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-fg-muted"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((credential) => (
                <li key={credential.qualification}>
                  <p className="text-sm font-medium text-fg">
                    {credential.qualification}
                  </p>
                  {credential.institution ? (
                    <p className="mt-0.5 text-sm text-fg-muted">
                      {credential.institution}
                    </p>
                  ) : null}
                  {credential.detail ? (
                    <p className="mt-0.5 text-sm text-fg-muted">
                      {credential.detail}
                    </p>
                  ) : null}
                  <p className="mt-1 font-mono text-xs text-fg-subtle">
                    {credential.period}
                  </p>
                </li>
              ))}
            </ul>

            <hr className="my-6 border-border" />

            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              Based in
            </h3>
            <p className="mt-3 text-sm text-fg-muted">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
