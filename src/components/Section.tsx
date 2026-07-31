import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Small monospace label above the heading, e.g. "01 / Projects". */
  index: string;
  title: string;
  /** Optional supporting line under the heading. */
  lede?: string;
  children: ReactNode;
}

export function Section({ id, index, title, lede, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {index}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {lede}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
