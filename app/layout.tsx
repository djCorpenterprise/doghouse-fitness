import type { Metadata } from "next";
import { Cormorant, Spectral } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/PromoBar";
import Nav from "@/components/Nav";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dog House Fitness · Faithful to the work.",
  description:
    "Custom training programs and a daily workout, for people who would rather earn the result than market it. Jacksonville, Florida.",
  metadataBase: new URL("https://doghouse.fitness"),
  openGraph: {
    title: "Dog House Fitness",
    description: "Faithful to the work.",
    url: "https://doghouse.fitness",
    siteName: "Dog House Fitness",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spectral.variable}`}>
      <body style={{ background: "#F5EDD8", margin: 0 }}>
        <PromoBar />
        <Nav />
        {children}
      </body>
    </html>
  );
}
