import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon (180x180): lime monogram on a dark rounded chip.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05060a",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ height: 24, background: "#dbff00", width: "100%" }} />
          <div style={{ display: "flex", gap: 14, flex: 1 }}>
            <div style={{ width: 24, background: "#dbff00" }} />
            <div style={{ flex: 1, background: "#dbff00" }} />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
