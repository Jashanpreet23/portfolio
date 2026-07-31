"use client";

import { useEffect, useState } from "react";
import { content } from "@/content/profile";
import { withBasePath } from "@/lib/paths";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlights the nav link for whichever section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = inView[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    for (const section of sections) {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Closing on Escape keeps the mobile menu keyboard-dismissable.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-bg"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-fg transition-colors hover:text-accent"
        >
          {content.profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === section.id
                    ? "text-accent"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={withBasePath(content.profile.resumePath)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-border px-3 py-2 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:text-fg md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-border md:hidden">
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={withBasePath(content.profile.resumePath)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
