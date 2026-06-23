import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// OSMX marka fontları — KORUNDU
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osmx.com.tr"),
  title: "OSMX — Dijital Dönüşümde Akıllı Çözümler",
  description:
    "Yazılım geliştirme, otomasyon, yapay zeka ve dijital danışmanlık. İşletmenizi geleceğe taşıyan çözümler.",
  openGraph: {
    title: "OSMX — Dijital Dönüşümde Akıllı Çözümler",
    description:
      "Yazılım geliştirme, otomasyon, yapay zeka ve dijital danışmanlık.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-text font-body antialiased">
        {/* Arka plan katmanları — sayfa boyunca sabit */}
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise-bg" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}