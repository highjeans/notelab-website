import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteLab | Chrome Note Taking Extension",
  description:
    "Capture, organize, and export educational notes faster with NoteLab for Chrome.\n\nSee the latest updates - https://youtu.be/O21IualkOSg",
  metadataBase: new URL("https://notelab.vercel.app"),
  openGraph: {
    title: "NoteLab | Chrome Note Taking Extension",
    description:
      "Capture text and media, auto-save notes, and export to Word with NoteLab.",
    url: "https://notelab.vercel.app",
    siteName: "NoteLab",
    images: {
      url: "https://notelab.vercel.app/logo.png",
      alt: "NoteLab Logo",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 font-sans dark:bg-slate-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
