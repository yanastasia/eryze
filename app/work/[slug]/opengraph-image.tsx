import { ImageResponse } from "next/og";

import { getProjectBySlug } from "@/data/projects";

export const alt = "Eryze Studio case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type WorkOpenGraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkOpenGraphImage({ params }: WorkOpenGraphImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#050b16",
          color: "#f8faff",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(169, 139, 255, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 68,
            right: 80,
            width: 240,
            height: 240,
            borderRadius: 9999,
            background: "rgba(122, 63, 255, 0.24)",
            filter: "blur(42px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontSize: 22,
              color: "#a98bff",
            }}
          >
            <span>Case study</span>
            <span style={{ color: "rgba(248,250,255,0.68)" }}>Eryze Studio</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 900,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                fontSize: 24,
                color: "rgba(248,250,255,0.68)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              <span>{project?.category ?? "Project"}</span>
              <span style={{ color: "#a98bff" }}>{project?.status ?? "Case study"}</span>
            </div>
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.92,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              {project?.title ?? "Eryze project"}
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.32,
                maxWidth: 860,
                color: "rgba(248,250,255,0.82)",
              }}
            >
              {project?.tagline ?? "Structured product and platform delivery."}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            {(project?.tags ?? ["Web", "Platform"]).slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid rgba(169, 139, 255, 0.24)",
                  borderRadius: 9999,
                  padding: "10px 18px",
                  fontSize: 20,
                  color: "rgba(248,250,255,0.78)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
