"use client";

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 'normal',
}: MarqueeProps) => {
  const speedClass = {
    slow: '[--duration:60s]',
    normal: '[--duration:30s]',
    fast: '[--duration:15s]',
  }[speed];

  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:1rem] gap-[--gap]',
        speedClass,
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 justify-around gap-[--gap] animation-duration-(--duration)',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:paused'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 justify-around gap-[--gap] animation-duration-(--duration)',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:paused'
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};
