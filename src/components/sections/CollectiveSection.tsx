'use client';

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CollectiveSection() {
  return (
    <section className="py-28 bg-bg">
      <Container>
        <SectionHeading headline="Built by people who have done the work." />

        <div className="max-w-3xl mx-auto space-y-6">
          <AnimateOnScroll delay={0.1}>
            <p className="text-lg text-text-secondary">
              WorkmanWise is not a software startup.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-text-secondary">
              It is a collective of machinists and designers who got tired of
              friction.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-lg text-text-secondary">
              We use the same tools you do. We remove the parts that waste your
              time.
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
