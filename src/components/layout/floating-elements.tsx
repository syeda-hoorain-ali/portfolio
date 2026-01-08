"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Bot } from 'lucide-react';

export const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Coming Soon Badge - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass animate-pulse-glow">
          <div className="p-2 rounded-xl bg-primary/20">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Coming Soon</p>
            <p className="text-sm font-medium text-foreground">AI Chat Assistant</p>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button - Bottom Right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass glow hover:glow-cyan transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
