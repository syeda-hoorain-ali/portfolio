"use client";

import { motion } from 'framer-motion';
import { MapPin, Mail, FileDown } from 'lucide-react';
import { NumberTicker } from '@/components/magic-ui/number-ticker';
import { MagicCard } from '@/components/magic-ui/magic-card';
import { ShinyButton } from '@/components/magic-ui/shiny-button';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export const About = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return <div className="py-24 px-4"><div className="max-w-6xl mx-auto">Loading...</div></div>;
  }

  if (error || !portfolioData) {
    return <div className="py-24 px-4"><div className="max-w-6xl mx-auto">Error loading data</div></div>;
  }

  const stats = [
    { label: 'Projects', value: portfolioData.stats.projects, suffix: '+' },
    { label: 'Hackathons', value: portfolioData.stats.hackathons, suffix: '' },
    { label: 'Days Coded', value: portfolioData.stats.daysCoded, suffix: '+' },
    { label: 'Contributions', value: portfolioData.stats.contributions, suffix: '+' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <MagicCard className="p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {portfolioData.personal.bio}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>🇵🇰 {portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagicCard className="p-8 h-full" gradientColor="var(--secondary)">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      <NumberTicker
                        value={stat.value}
                        suffix={stat.suffix}
                        delay={index * 200}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <MagicCard className="p-8" gradientColor="var(--accent)">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Want to know more?
                  </h3>
                  <p className="text-muted-foreground">
                    Download my resume to get the full picture of my experience and skills.
                  </p>
                </div>
                <a href={portfolioData.personal.resumeUrl} download>
                  <ShinyButton className="shrink-0">
                    <FileDown className="w-4 h-4" />
                    Download Resume
                  </ShinyButton>
                </a>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
