"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();
  const [navbarHeight, setNavbarHeight] = React.useState(0)

  React.useEffect(() => {
    const navbar = document.getElementById("navbar");
    console.log(navbar)
    setNavbarHeight(navbar ? navbar.offsetHeight : 0);
  }, []);

  console.log("Navbarheight", navbarHeight)

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-fuchsia-500",
        // "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
        top: `${navbarHeight}px`
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
