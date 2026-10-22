import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Belle Maison Properties S.A – Construction, BTP, Infrastructures, Immobilier",
  description:
    "Belle Maison Properties S.A : construction, BTP, infrastructures et immobilier en République de Guinée, aux États-Unis et en Afrique de l’Ouest. Kipé, Conakry.",
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Belle Maison Properties S.A",
    description:
      "Construisons ensemble vos projets de demain. Construction · BTP · Infrastructures · Immobilier.",
    images: ["/images/logo.png"],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = { themeColor: "#1F3D6F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoni.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
