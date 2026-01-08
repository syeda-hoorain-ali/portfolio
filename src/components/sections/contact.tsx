"use client";

import { motion } from 'framer-motion';
import { Mail, MessageCircle, FileDown, Github, Linkedin, Twitter, Instagram, Facebook, BookOpen, Copy, Check, Loader2 } from 'lucide-react';
import { ShinyButton } from '@/components/magic-ui/shiny-button';
import { useState } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export const Contact = () => {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const [copied, setCopied] = useState(false);

  if (isLoading || !portfolioData) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    )
  }

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolioData.social.twitter, label: 'Twitter' },
    { icon: BookOpen, href: portfolioData.social.medium, label: 'Medium' },
    { icon: Instagram, href: portfolioData.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: portfolioData.social.facebook, label: 'Facebook' },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-linear-to-t from-primary/20 via-secondary/10 to-transparent blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Build Something Amazing
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Together
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href={portfolioData.social.discord} target='_blank'>
            <ShinyButton
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </ShinyButton>
          </a>

          <a href={`mailto:${portfolioData.personal.email}`}>
            <ShinyButton
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={copyEmail}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Email me: {portfolioData.personal.email}
                  <Copy className="w-4 h-4 ml-1" />
                </>
              )}
            </ShinyButton>
          </a>

          <a href={portfolioData.personal.resumeUrl} download>
            <ShinyButton variant="ghost" className="w-full sm:w-auto">
              <FileDown className="w-5 h-5" />
              Download Resume
            </ShinyButton>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center gap-2 p-3 rounded-2xl glass">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 py-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with 💚 using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};
