"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ShinyButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, variant = 'primary', onClick, disabled, type = 'button' }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary/20 text-secondary border border-secondary/50 hover:bg-secondary/30',
      ghost: 'bg-transparent text-foreground border border-border hover:bg-muted',
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'relative px-6 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300',
          'group inline-flex items-center justify-center gap-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer"
        />
      </motion.button>
    );
  }
);

ShinyButton.displayName = 'ShinyButton';
