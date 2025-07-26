import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Toaster } from "react-hot-toast";


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-black bg-gradient-radial bg-size-[20px_20px]"></div>
      <Navbar />
      <ScrollProgress />

      <main className="pt-8 sm:pt-20 min-h-screen">
        {children}
      </main>
      <Toaster />
      <Footer />
    </>
  );
}
