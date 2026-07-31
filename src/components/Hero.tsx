import { content } from "@/content/profile";
import { withBasePath } from "@/lib/paths";
import { Reveal } from "./Reveal";

export function Hero() {
  const { profile } = content;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,var(--accent-soft),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            {profile.availability}
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
            <p className="text-xl text-fg-muted sm:text-2xl">{profile.title}</p>
            <p className="text-base text-fg-subtle sm:text-2xl">
              <span aria-hidden="true" className="hidden sm:inline">
                ·{" "}
              </span>
              {profile.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              View my work
            </a>
            <a
              href={withBasePath(profile.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
