import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser-tab / search favicon: lime monogram on a dark rounded chip so it
// stays visible on any tab background.
export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ height: 9, background: "#dbff00", width: "100%" }} />
          <div style={{ display: "flex", gap: 5, flex: 1 }}>
            <div style={{ width: 9, background: "#dbff00" }} />
            <div style={{ flex: 1, background: "#dbff00" }} />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
