import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Software Development & FBR e-Invoicing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card (1200x630). Self-contained: brand mark drawn with shapes,
// no external image fetch, so it renders reliably at build time.
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05060a",
          backgroundImage:
            "radial-gradient(1000px 500px at 80% -10%, rgba(219,255,0,0.18), transparent)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* monogram */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "3px solid #dbff00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div style={{ height: 8, background: "#dbff00", width: "100%" }} />
              <div style={{ display: "flex", gap: 6, flex: 1 }}>
                <div style={{ width: 8, background: "#dbff00" }} />
                <div style={{ flex: 1, background: "#dbff00" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: "#f4f6fb" }}>Mass</span>
            <span style={{ color: "#dbff00" }}>Logix</span>
          </div>
        </div>

        {/* middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              fontWeight: 700,
              color: "#f4f6fb",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            <span>We design &amp; engineer&nbsp;</span>
            <span style={{ color: "#dbff00" }}>production-grade software.</span>
          </div>
          <div style={{ fontSize: 28, color: "#a2acc4", maxWidth: 820 }}>
            Custom software, web & mobile apps, AI/ML, cloud — and FBR IRIS
            e-invoicing for Pakistani businesses.
          </div>
        </div>

        {/* bottom: tags */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Web", "Mobile", "AI/ML", "Cloud", "FBR e-Invoicing"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 22,
                color: "#dbff00",
                border: "1px solid #2a3040",
                background: "#0b0e16",
                borderRadius: 999,
                padding: "8px 18px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
