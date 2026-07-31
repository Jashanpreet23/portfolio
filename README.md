# Portfolio — Jashanpreet Singh

Personal portfolio site. Next.js 15 (App Router), TypeScript, Tailwind CSS v4,
exported as a fully static site.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script | What it does |
|--------|--------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build, static export into `out/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run check` | typecheck + lint + build — run this before pushing |

## Editing the content

**Every word on the site lives in [`src/content/profile.ts`](src/content/profile.ts).**
No component contains copy. To add a project, change a job title, or update the
intro, edit that file — the types in [`src/content/types.ts`](src/content/types.ts)
will tell you if a required field is missing.

To swap the resume, replace `public/Jashanpreet_Singh_Resume.pdf` (keep the
filename, or update `profile.resumePath`).

Before going live, change `profile.siteUrl` to the real domain. It feeds the
page metadata, the OpenGraph tags, the sitemap and the JSON-LD.

## Structure

```
src/
  app/
    layout.tsx      Fonts, SEO metadata, JSON-LD, no-flash theme script
    page.tsx        Composes the sections
    globals.css     Design tokens (light + dark) and base styles
    sitemap.ts      Generated sitemap.xml
    robots.ts       Generated robots.txt
  components/       One component per section, plus Nav / Reveal / ThemeToggle
  content/          profile.ts (the copy) and types.ts (its shape)
  lib/              JSON-LD builder, basePath helper
```

## Design notes

- **Theme** is driven by a `data-theme` attribute on `<html>`. An inline script
  in `layout.tsx` resolves the stored or system preference before first paint,
  so there is no flash of the wrong theme.
- **Motion** is opt-in: the `Reveal` component only adds its hiding class after
  mounting, so content is visible with JavaScript off, and it skips animation
  entirely under `prefers-reduced-motion`.
- **Colour** meets WCAG AA contrast in both themes.

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs `typecheck`, `lint`
and `build` on every push to `main` and on pull requests. It does not deploy —
Vercel handles that.

## Deploying

Live at **https://jashanpreet.vercel.app**, deployed from Vercel, which
redeploys automatically on every push to `main`.

The build produces a static `out/` directory, so any static host works if you
ever move. Netlify wants build command `npm run build` and publish directory
`out`. For GitHub Pages you would need to set `BASE_PATH` so assets resolve
under the repo subpath:

```bash
BASE_PATH=/portfolio npm run build
```

A custom domain at the root needs no `BASE_PATH`.

If the URL changes, update `profile.siteUrl` in
[`src/content/profile.ts`](src/content/profile.ts) — it feeds the page
metadata, OpenGraph tags, sitemap and JSON-LD.
