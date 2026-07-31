/**
 * Next.js rewrites `basePath` into routed links automatically, but files served
 * straight out of /public (the resume, icons, OG image) are not routes, so
 * their URLs need prefixing by hand when the site is hosted under a subpath.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}

export { basePath };
