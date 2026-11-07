import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: `Recouvre — ${site.promesse}`,
    template: "%s · Recouvre",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Recouvre",
    title: site.promesse,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.promesse,
    description: site.description,
  },
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
      <body className="flex min-h-dvh flex-col antialiased max-sm:has-[.cta-fixe]:pb-24">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
