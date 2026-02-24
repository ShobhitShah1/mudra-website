import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            "radial-gradient(circle at 10% 10%, rgba(187,182,179,0.28), transparent 40%), radial-gradient(circle at 100% 100%, rgba(167,243,208,0.2), transparent 45%)",
          color: "#FAFAF9",
          padding: "56px",
          fontFamily: "Poppins, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#D6D3D1" }}>EverySpend</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.08,
            }}
          >
            Expense tracking
            <br />
            built for privacy.
          </div>
          <div style={{ fontSize: 30, color: "#A8A29E" }}>
            On-device parsing. No cloud dependency.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#BBB6B3" }}>
          Track smarter. Save better.
        </div>
      </div>
    ),
    size,
  );
}
