import { ImageResponse } from "next/og";

export const alt =
  "Prova — stop retyping the same numbers into four different tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f7",
          padding: "72px",
          color: "#14171a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#f5a300",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 38, fontWeight: 700 }}>Prova</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, color: "#4f555c", marginBottom: 18 }}>
            Stop retyping the same numbers into
          </div>
          <div style={{ fontSize: 86, fontWeight: 700, lineHeight: 1.05, color: "#a75409" }}>
            four different tools.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 24, color: "#656b73" }}>
          <span>Estimate</span>
          <span>→</span>
          <span>Contract</span>
          <span>→</span>
          <span>Budget</span>
          <span>→</span>
          <span>Job cost</span>
          <span>→</span>
          <span>Pay app</span>
        </div>
      </div>
    ),
    size,
  );
}
