import { content } from "@/content/profile";
import { withBasePath } from "@/lib/paths";
import { HeroScene } from "./HeroScene";
import { Reveal } from "./Reveal";

export function Hero() {
  const { profile } = content;

  return (
    <section id="top" className="hero-section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(55%_80%_at_62%_12%,var(--accent-soft),transparent_72%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,.88fr)] lg:gap-4">
        <div className="relative z-10">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-xs text-fg-muted shadow-card backdrop-blur-md">
              <span
                aria-hidden="true"
                className="availability-dot h-1.5 w-1.5 rounded-full bg-accent"
              />
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-fg sm:text-7xl lg:text-[5.25rem]">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
              <p className="text-xl text-fg-muted sm:text-2xl">{profile.title}</p>
              <p className="text-base text-fg-subtle sm:text-xl">
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
                className="cta-primary rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
              >
                View my work
              </a>
              <a
                href={withBasePath(profile.resumePath)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border-strong bg-surface/60 px-5 py-2.5 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:bg-surface-2"
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

        <Reveal delay={140} className="relative z-0">
          <HeroScene />
        </Reveal>
      </div>
    </section>
  );
}
