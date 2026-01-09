import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/query-provider";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  title: "Syeda Hoorain Ali | Full Stack Developer & AI Engineer",
  description: "Full Stack Web Developer & Agentic AI Engineer specializing in building intelligent, scalable web applications. Expert in React, Next.js, TypeScript, Python, and AI agent development.",
  keywords: ["Full Stack Developer, AI Engineer, React, Next.js, TypeScript, Python, Web Development, Karachi, Pakistan"],
  authors: {
    name: "Syeda Hoorain Ali"
  },
  openGraph: {
    type: "website",
    title: "Syeda Hoorain Ali | Full Stack Developer & AI Engineer",
    description: "Architecting Intelligence, One Agent at a Time. Full Stack Web Developer & Agentic AI Engineer.",
    images: `${baseUrl}/assets/open-graph-image.png`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Syeda Hoorain Ali | Full Stack Developer & AI Engineer",
    description: "Architecting Intelligence, One Agent at a Time. Full Stack Web Developer & Agentic AI Engineer.",
    images: `${baseUrl}/assets/open-graph-image.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}