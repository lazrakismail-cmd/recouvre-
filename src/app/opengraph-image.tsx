import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Recouvre — Tes factures impayées, relancées jusqu'à la mise en demeure.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/newsreader-latin-500-normal.woff")),
    readFile(join(process.cwd(), "src/assets/ibm-plex-sans-latin-500-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f2ea",
          color: "#15233b",
          padding: "64px 80px",
          fontFamily: "Plex",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "Newsreader", fontSize: 44 }}>Recouvre</div>
          <div
            style={{
              display: "flex",
              border: "4px solid #d9441c",
              color: "#d9441c",
              padding: "8px 18px",
              fontSize: 24,
              letterSpacing: 4,
              transform: "rotate(-4deg)",
            }}
          >
            MISE EN DEMEURE PRÊTE
          </div>
        </div>
        <div style={{ fontFamily: "Newsreader", fontSize: 76, lineHeight: 1.05, maxWidth: 980 }}>
          Tes factures impayées, relancées jusqu&apos;à la mise en demeure.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#4a4f57" }}>
          Relances automatiques à 7, 15 et 30 jours.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 500, style: "normal" },
        { name: "Plex", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
