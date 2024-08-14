import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    <html lang="en" className="h-full relative">
      <body className={`relative h-full overflow-x-hidden ${inter.className}`}>
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-black bg-gradient-radial bg-[size:20px_20px]"></div>
        <Navbar />
        <main className="pt-8 sm:pt-20 min-h-screen">
          {children}
          <ToastContainer theme="colored" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
