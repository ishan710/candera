'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const viewport = { once: true, margin: '-72px' as const };

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Load on mount (hero) vs when scrolled into view */
  onView?: boolean;
};

export function FadeUp({ children, className, delay = 0, onView = false }: FadeUpProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  if (onView) {
    return (
      <motion.div
        className={className}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  onView?: boolean;
};

export function Stagger({ children, className, onView = true }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const motionProps = onView
    ? { initial: 'hidden' as const, whileInView: 'visible' as const, viewport }
    : { initial: 'hidden' as const, animate: 'visible' as const };

  return (
    <motion.div className={className} variants={stagger} {...motionProps}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
