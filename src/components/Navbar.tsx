"use client";

import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hash, setHash] = useState('');

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to track URL hash for active link
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  // Effect to close mobile menu on navigation
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [hash]);

  const navigation = [
    { name: "Home", href: "#", current: hash === "" || hash === "#" },
    { name: "About", href: "#about", current: hash === "#about" },
    { name: "Contact", href: "#contact", current: hash === "#contact" },
  ];

  // Animation variants for the scrolled navbar
  const scrolledNavVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    },
    exit: { y: -100, opacity: 0 }
  };

  // Animation variants for the initial full-width navbar
  const initialNavVariants = {
    visible: { opacity: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <>
      <AnimatePresence>
        {scrolled ? (
          // Scrolled Navbar (Compact, Centered, Glassmorphism)
          <motion.nav
            key="scrolled-nav"
            variants={scrolledNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto rounded-full border border-white/20 bg-black/60 shadow-lg backdrop-blur-lg"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-12 items-center justify-center">
                {/* Desktop Navigation */}
                <div className="hidden sm:flex sm:items-center">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} /* ...props */ 
                        aria-current={item.current ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          item.current
                            ? "text-primary underline underline-offset-4 font-bold decoration-2"
                            : "text-gray-300 hover:text-secondary-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Mobile Menu Button */}
                <div className="flex items-center sm:hidden">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} /* ...props */>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : (
          // Initial Full-Width Navbar
          <motion.nav
            key="initial-nav"
            variants={initialNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 z-50 w-full bg-black/90"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Link href="#" className="text-2xl font-black text-primary">
                    Hoorain ✨
                  </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                       <Link key={item.name} href={item.href} /* ...props */ 
                        aria-current={item.current ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          item.current
                            ? "text-primary underline underline-offset-4 font-bold decoration-2"
                            : "text-gray-300 hover:text-secondary-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Mobile Menu Button */}
                <div className="flex items-center sm:hidden">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} /* ...props */>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel - Unchanged but works with the new setup */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} 
            className="fixed top-16 left-0 z-40 w-full sm:hidden"
          >
            <div className="space-y-1 bg-black/90 backdrop-blur-lg px-2 pb-3 pt-2 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    item.current
                      ? "text-primary underline underline-offset-4 font-bold decoration-2"
                      : "text-gray-300 hover:text-secondary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
