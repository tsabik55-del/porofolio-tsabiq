import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

// Body font — ultra clean & modern
const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Heading accent font — bold geometric
const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Tsabiq Riyu Kautsar - Web Developer & Designer",
  description:
    "Portfolio profesional Tsabiq Riyu Kautsar - Web Developer dengan keahlian React, Next.js, Node.js, dan TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${syne.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
