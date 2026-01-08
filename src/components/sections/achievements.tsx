"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Code, Users, ExternalLink, ChevronDown } from 'lucide-react';
import { MagicCard } from '@/components/magic-ui/magic-card';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { AchievementData } from '@/types/portfolio';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  code: Code,
  users: Users,
};

const AchievementCard = (
  { achievement, index }: { achievement: AchievementData; index: number; }
) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[achievement.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <MagicCard className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Icon className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-foreground">
                {achievement.title}
              </h3>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Repository
                      </a>
                    )}
                    {achievement.organizerPost && (
                      <a
                        href={achievement.organizerPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/20 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Organizer's Post
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
                {achievement.description}
              </p>
            )}
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
};

export const Achievements = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return <div className="py-24 px-4"><div className="max-w-4xl mx-auto">Loading...</div></div>;
  }

  if (error || !portfolioData) {
    return <div className="py-24 px-4"><div className="max-w-4xl mx-auto">Error loading data</div></div>;
  }

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Journey & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Milestones that shaped my development journey
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-6">
          {portfolioData.achievements.map((achievement: { id: number; title: string; description: string; icon: string; link?: string; organizerPost?: string; }, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
