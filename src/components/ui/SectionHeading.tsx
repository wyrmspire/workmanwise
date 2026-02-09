'use client';

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';

interface SectionHeadingProps {
  headline: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  headline,
  subtext,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <AnimateOnScroll animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {headline}
        </h2>
      </AnimateOnScroll>
      {subtext && (
        <AnimateOnScroll animation="fade-up" delay={0.15}>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            {subtext}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}
