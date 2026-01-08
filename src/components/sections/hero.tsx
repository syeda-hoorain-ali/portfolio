"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Facebook, BookOpen, ChevronDown, MessageCircle } from 'lucide-react';
import { TypingAnimation } from '@/components/magic-ui/typing-animation';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const taglines = [
  'Architecting Intelligence, One Agent at a Time',
  'Building Tomorrow\'s Web, Today',
  'Where Full Stack Meets Artificial Intelligence',
];

export const Hero = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error || !portfolioData) {
    return <div className="min-h-screen flex items-center justify-center">Error loading data</div>;
  }

  const socialIcons = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolioData.social.twitter, label: 'Twitter' },
    { icon: BookOpen, href: portfolioData.social.medium, label: 'Medium' },
    { icon: Instagram, href: portfolioData.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: portfolioData.social.facebook, label: 'Facebook' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflowhidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text text-glow"
        >
          {portfolioData.personal.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium mb-6"
        >
          {portfolioData.personal.title}
        </motion.h2>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-8 mb-12"
        >
          <TypingAnimation
            texts={taglines}
            className="text-lg md:text-xl text-secondary font-mono"
          />
        </motion.div>

        {/* Social Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 p-2 rounded-2xl glass mx-auto w-fit"
        >
          {socialIcons.map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
          <div className="w-px h-8 bg-border mx-2" />
          <motion.button
            className="p-3 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigator.clipboard.writeText(portfolioData.social.discord)}
            aria-label="Copy Discord"
          >
            <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};
