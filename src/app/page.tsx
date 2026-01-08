import { ParticleBackground } from '@/components/particles/particle-background';
import { Navigation } from '@/components/layout/navigation';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { FloatingElements } from '@/components/layout/floating-elements';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-[0.02] pointer-events-none" />

      {/* Navigation */}
      <ScrollProgress />
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Floating Elements */}
      <FloatingElements />
    </div>
  );
};
