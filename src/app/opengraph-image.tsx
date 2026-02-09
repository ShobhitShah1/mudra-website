import { ImageResponse } from "next/og";

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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1C1917",
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(187,182,179,0.28), transparent 45%), radial-gradient(circle at 85% 90%, rgba(167,243,208,0.22), transparent 40%)",
          color: "#FAFAF9",
          padding: "72px",
          fontFamily: "Poppins, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: 20,
            color: "#D6D3D1",
            alignSelf: "flex-start",
          }}
        >
          Mudra
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Track smarter.
            <br />
            Save better.
          </div>
          <div style={{ fontSize: 32, color: "#A8A29E", lineHeight: 1.35 }}>
            Privacy-first expense tracking with on-device SMS parsing.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#BBB6B3",
          }}
        >
          <span>Local-first</span>
          <span>No cloud sync</span>
          <span>Smart insights</span>
        </div>
      </div>
    ),
    size,
  );
}
