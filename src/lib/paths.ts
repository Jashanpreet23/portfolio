// Next handles basePath for routes, but /public files aren't routes so they
// need prefixing by hand.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}

export { basePath };
