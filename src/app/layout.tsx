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
  //TODO: replace url after deployment
  authors: [{ name: "Michaela Majorosova", url: "https://yourwebsite.com" }],
  creator: "Michaela Majorosova",
  publisher: "Michaela Majorosova",
  openGraph: {
    title: "Portfolio | Michaela",
    description:
      "Modern portfolio showcasing fullstack development projects and skills",
    //TODO: replace url after deployment
    url: "https://yourwebsite.com",
    siteName: "Portfolio",
    images: [
      {
        //TODO: replace url after deployment
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
