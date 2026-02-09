'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { DecisionCarryAnimation } from '@/components/animations/DecisionCarryAnimation';

export function AIExplanationSection() {
  return (
    <section className="py-32 bg-surface">
      <Container>
        <SectionHeading headline="Experience-aware, not artificial." />

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <AnimateOnScroll delay={0.1}>
            <p className="text-text-secondary text-lg">
              Our systems don&apos;t make decisions. They carry them.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-text-secondary text-lg">
              They remember machines. They connect tools. They finish the work
              between steps.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-text-primary text-xl font-medium">
              The authority stays with the person.
            </p>
          </AnimateOnScroll>
        </div>

        <DecisionCarryAnimation />
      </Container>
    </section>
  );
}
