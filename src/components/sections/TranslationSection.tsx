'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { ConveyorAnimation } from '@/components/animations/ConveyorAnimation';

export function TranslationSection() {
  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <Container>
        <SectionHeading headline="Where Things Break Down" />

        <ConveyorAnimation />

        <div className="max-w-3xl mx-auto mt-16 space-y-6">
          <AnimateOnScroll delay={0.1}>
            <p className="text-text-secondary text-lg">
              Design hands off to programming.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-text-secondary text-lg">
              Programming hands off to the floor.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-text-secondary text-lg">
              The floor adapts in real time.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <p className="text-text-primary text-xl font-medium">
              None of that intelligence flows back upstream.
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
