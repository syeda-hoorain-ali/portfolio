"use client";

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Loader2 } from 'lucide-react';

import { MagicCard } from '@/components/magic-ui/magic-card';
import { ShinyButton } from '@/components/magic-ui/shiny-button';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { ProjectData } from '@/types/portfolio';

const TechStack = ({ tech }: { tech: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(tech.length);

  useEffect(() => {
    const calculateVisibleItems = () => {
      const container = containerRef.current;
      const measureContainer = measureRef.current;
      if (!container || !measureContainer) return;

      const containerWidth = container.offsetWidth;
      const gap = 8;
      const maxRows = 2;

      const pillElements = measureContainer.children;
      const pillWidths: number[] = [];
      for (let i = 0; i < pillElements.length; i++) {
        pillWidths.push((pillElements[i] as HTMLElement).offsetWidth);
      }

      let currentRowWidth = 0;
      let currentRow = 1;
      let count = 0;
      const plusBadgeWidth = 32;

      for (let i = 0; i < tech.length; i++) {
        const pillWidth = pillWidths[i] || 60;
        const widthNeeded = pillWidth + (currentRowWidth > 0 ? gap : 0);

        const remainingItems = tech.length - (i + 1);
        const isLastFitting = remainingItems > 0;
        const availableWidth = isLastFitting ? containerWidth - plusBadgeWidth - gap : containerWidth;

        if (currentRowWidth + widthNeeded <= availableWidth) {
          currentRowWidth += widthNeeded;
          count++;
        } else if (currentRow < maxRows) {
          currentRow++;
          currentRowWidth = pillWidth;
          count++;
        } else {
          break;
        }
      }

      setVisibleCount(Math.max(1, count));
    };

    calculateVisibleItems();

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(calculateVisibleItems);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', calculateVisibleItems);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateVisibleItems);
    };
  }, [tech]);

  const visibleTech = tech.slice(0, visibleCount);
  const hiddenCount = tech.length - visibleCount;

  return (<>
    <div
      ref={measureRef}
      className="flex flex-wrap gap-2 absolute opacity-0 pointer-events-none"
      aria-hidden="true"
    >
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-muted-foreground whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </div>

    <div ref={containerRef} className="flex flex-wrap gap-2 mb-6">
      {visibleTech.map((t) => (
        <span
          key={t}
          className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-muted-foreground whitespace-nowrap"
        >
          {t}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-muted-foreground whitespace-nowrap">
          +{hiddenCount}
        </span>
      )}
    </div>
  </>);
};

const ProjectCard = (
  { project, index, }: { project: ProjectData; index: number; }
) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <MagicCard
      className="h-full overflow-hidden group"
      gradientColor={project.featured ? 'var(--primary)' : 'var(--secondary)'}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <TechStack tech={project.tech} />

        <div className="flex gap-3">
          <ShinyButton
            variant="ghost"
            className="flex-1 text-sm py-2"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4" />
            Code
          </ShinyButton>
          <ShinyButton
            variant="secondary"
            className="flex-1 text-sm py-2"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </ShinyButton>
        </div>
      </div>
    </MagicCard>
  </motion.div>
);

export const Projects = () => {
  const { data: portfolioData, isLoading } = usePortfolioData();

  if (isLoading || !portfolioData) {
    return (
      <section id="projects" className="py-24 px-4 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    );
  }

  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Meteor effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-32 bg-linear-to-r from-primary to-transparent animate-meteor"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my best work showcasing full-stack and AI capabilities
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 text-center"
            >
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </>
        )}

        {/* Mini Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Mini projects section coming soon
          </div>
        </motion.div>
      </div>
    </section>
  );
};
