import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});

const siteUrl = "https://tusharparmar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tushar Parmar — Frontend Developer",
    template: "%s | Tushar Parmar",
  },
  description:
    "Tushar Parmar is a Frontend Developer building fast, accessible, production-ready interfaces with React, Next.js, and TypeScript.",
  keywords: [
    "Tushar Parmar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Tushar Parmar" }],
  creator: "Tushar Parmar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tushar Parmar — Frontend Developer",
    description:
      "Frontend Developer building fast, accessible, production-ready interfaces with React, Next.js, and TypeScript.",
    siteName: "Tushar Parmar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Parmar — Frontend Developer",
    description:
      "Frontend Developer building fast, accessible, production-ready interfaces with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushar Parmar",
  jobTitle: "Frontend Developer",
  url: siteUrl,
  sameAs: ["https://github.com/", "https://linkedin.com/"],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Technical SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </Link>
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html >
  );
}