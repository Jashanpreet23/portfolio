import { ImageResponse } from "next/og";
import { content } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${content.profile.name} — ${content.profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered once at build time into a static PNG. This is what LinkedIn,
// Twitter and Slack show when the site URL is shared.
export default function OpengraphImage() {
  const { profile } = content;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0b0b0d",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#f0a94e",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          {profile.location}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#f2f0ee",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#a5a1ac",
            marginTop: 20,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#8b8794",
            marginTop: 48,
          }}
        >
          React · TypeScript · Node.js · GraphQL · SQL Server · Docker
        </div>
      </div>
    ),
    size,
  );
}
