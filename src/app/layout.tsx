import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const newsreader = localFont({
  src: "../fonts/newsreader-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-newsreader",
  display: "swap",
});

const plex = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recouvre — Relance tes factures impayées jusqu'à la mise en demeure",
  description:
    "L'argent est dû, il n'est simplement jamais demandé. Recouvre relance tes clients à 7, 15 et 30 jours, puis prépare la mise en demeure.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f2ea",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${newsreader.variable} ${plex.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
