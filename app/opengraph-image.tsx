import { ImageResponse } from "next/og";

export const alt = "Eryze Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#06101d",
          color: "#f4f7ff",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(180, 190, 255, 0.14)",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 16%, rgba(136,113,255,0.18), transparent 28%), radial-gradient(circle at 84% 12%, rgba(180,190,255,0.12), transparent 24%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 80,
            width: 132,
            height: 132,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(136,113,255,0.18) 0%, rgba(136,113,255,0.02) 62%, transparent 72%)",
            filter: "blur(8px)",
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
              alignItems: "center",
              gap: 16,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontSize: 20,
              color: "#b4beff",
            }}
          >
            <span>Eryze Studio</span>
            <span style={{ color: "rgba(244,247,255,0.66)" }}>Digital systems for ambitious businesses</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 940,
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 94,
                lineHeight: 0.92,
                fontWeight: 600,
                letterSpacing: "-0.06em",
              }}
            >
              <span>Designed for clarity.</span>
              <span style={{ color: "#8871ff" }}>Built for growth.</span>
            </div>
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.35,
                maxWidth: 880,
                color: "rgba(244,247,255,0.8)",
              }}
            >
              Eryze Studio designs and builds websites, platforms, and workflows with technical precision,
              collaborative thinking, and refined control.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 22,
              color: "rgba(244,247,255,0.62)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            <span>Studio</span>
            <span>Labs</span>
            <span>Methods</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
