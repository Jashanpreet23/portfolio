import type { MetadataRoute } from "next";
import { content } from "@/content/profile";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${content.profile.siteUrl}/sitemap.xml`,
  };
}
