import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syeda Hoorain Ali",
  description: "Syeda Hoorain Ali's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full relative scroll-smooth"
      suppressHydrationWarning={true}
      data-qb-installed="true"
    >
      <body className={`relative h-full overflow-x-hidden ${inter.className}`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
