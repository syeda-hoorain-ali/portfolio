"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface NumberTickerProps {
  value: number;
  className?: string;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export const NumberTicker = ({
  value,
  className = '',
  delay = 0,
  suffix = '',
  prefix = '',
}: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        spring.set(value);
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, spring, value, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};
