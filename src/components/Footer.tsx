import { content } from "@/content/profile";

export function Footer() {
  const { profile } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-fg-subtle">
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-sm text-fg-muted transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
          <a
            href="#top"
            className="text-sm text-fg-muted transition-colors hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
