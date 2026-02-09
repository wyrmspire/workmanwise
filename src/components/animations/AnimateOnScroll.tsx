'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ANIMATION } from '@/lib/constants';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationType, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = ANIMATION.duration.slow,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });
  const variant = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: ANIMATION.easing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
