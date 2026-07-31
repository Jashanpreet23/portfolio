import type { NextConfig } from "next";

// Set BASE_PATH=/repo-name when hosting under a subpath (GitHub Pages).
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // No optimization server on a static export.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
