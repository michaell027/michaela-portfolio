import type React from "react";
import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Portfolio | Michaela",
  description:
    "Modern portfolio showcasing fullstack development projects and skills",
  generator: "Next.js",
  applicationName: "Portfolio",
  keywords: [
    "Portfolio",
    "Fullstack Developer",
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Frontend",
    "Backend",
    "Programming",
    "Software Engineer",
  ],
  authors: [{ name: "Michaela Majorosova", url: "https://www.michaelamajorosova.xyz" }],
  creator: "Michaela Majorosova",
  publisher: "Michaela Majorosova",
  openGraph: {
      title: "Portfolio | Michaela",
      description: "Modern portfolio showcasing fullstack development projects and skills",
      type: "website",
      url: "https://www.michaelamajorosova.xyz",
      siteName: "Fullstack Developer Portfolio",
      locale: "en_US",
      images: [
          {
              url: "https://www.michaelamajorosova.xyz/api/og",
              width: 1200,
              height: 630,
              alt: "Portfolio Preview",
              type: "image/png",
          },
      ],
  },
  twitter: {
     card: "summary_large_image",
      title: "Portfolio | Fullstack Developer",
      description: "Explore my fullstack development projects, skills, and experience",
      images: ["https://www.michaelamajorosova.xyz/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        suppressHydrationWarning={true}
        className={`font-sans antialiased ${inter.className} ${dancingScript.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
