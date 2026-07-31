import { content } from "@/content/profile";
import { withBasePath } from "@/lib/paths";
import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const { profile } = content;

  return (
    <Section
      id="contact"
      index="05 / Contact"
      title="Let's talk"
      lede="I am looking for a graduate software engineering role starting in 2027, and I am happy to talk about internships or part-time work before then."
    >
      <Reveal>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-card sm:p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                Email
              </dt>
              <dd className="mt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  {profile.email}
                </a>
                <CopyButton value={profile.email} label="email address" />
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                Phone
              </dt>
              <dd className="mt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  {profile.phone}
                </a>
                <CopyButton value={profile.phone} label="phone number" />
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                GitHub
              </dt>
              <dd className="mt-2">
                <a
                  href="https://github.com/Jashanpreet23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  github.com/Jashanpreet23
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                Resume
              </dt>
              <dd className="mt-2">
                <a
                  href={withBasePath(profile.resumePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Download PDF
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-border pt-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Email me
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
