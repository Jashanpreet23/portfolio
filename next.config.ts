import type { NextConfig } from "next";

/**
 * `output: "export"` emits a fully static site to `out/`, so this deploys to
 * Vercel, Netlify, GitHub Pages, or any static host without a Node server.
 *
 * If you host under a repo subpath (e.g. github.io/portfolio), set
 * BASE_PATH=/portfolio at build time.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // The static export target has no image optimization server.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
