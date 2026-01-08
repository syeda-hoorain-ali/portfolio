"use client";

import { motion } from 'framer-motion';
import { Marquee } from '@/components/magic-ui/marquee';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const SkillPill = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.1, y: -2 }}
    className="px-4 py-2 rounded-full glass glow-border text-sm font-medium text-foreground whitespace-nowrap cursor-default"
  >
    {skill}
  </motion.div>
);

const SkillCategory = ({
  title,
  skills,
  color,
}: {
  title: string;
  skills: string[];
  color: string;
}) => (
  <div className="mb-6">
    <h4 className={`text-sm font-semibold mb-3 ${color}`}>{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const { data: portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) {
    return <div className="py-24 px-4"><div className="max-w-6xl mx-auto">Loading...</div></div>;
  }

  if (error || !portfolioData) {
    return <div className="py-24 px-4"><div className="max-w-6xl mx-auto">Error loading data</div></div>;
  }

  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.ai,
    ...portfolioData.skills.databases,
    ...portfolioData.skills.tools,
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Skill Marquee */}
        <div className="relative mb-16 -mx-4">
          <Marquee className="py-4" speed="slow">
            {allSkills.map((skill, index) => (
              <SkillPill key={skill} skill={skill} index={index} />
            ))}
          </Marquee>
          <Marquee className="py-4" reverse speed="slow">
            {[...allSkills].reverse().map((skill, index) => (
              <SkillPill key={skill} skill={skill} index={index} />
            ))}
          </Marquee>

          <div className='absolute inset-0' style={{
            backgroundImage: 'linear-gradient(to right, var(--background), transparent 10%, transparent 90%, var(--background) 100%)'
          }} />
        </div>

        {/* Skill Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="glass rounded-2xl p-6">
            <SkillCategory
              title="Frontend"
              skills={portfolioData.skills.frontend}
              color="text-primary"
            />
            <SkillCategory
              title="Backend"
              skills={portfolioData.skills.backend}
              color="text-secondary"
            />
          </div>

          <div className="glass rounded-2xl p-6">
            <SkillCategory
              title="Agentic AI"
              skills={portfolioData.skills.ai}
              color="text-accent"
            />
          </div>

          <div className="glass rounded-2xl p-6">
            <SkillCategory
              title="Databases"
              skills={portfolioData.skills.databases}
              color="text-neon-purple"
            />
            <SkillCategory
              title="Tools & Services"
              skills={portfolioData.skills.tools}
              color="text-muted-foreground"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
