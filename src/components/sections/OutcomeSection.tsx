'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { GapFillAnimation } from '@/components/animations/GapFillAnimation';

export function OutcomeSection() {
  return (
    <section className="py-32 bg-bg">
      <Container>
        <SectionHeading headline="We keep decisions moving." />

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <AnimateOnScroll delay={0.1}>
            <p className="text-text-secondary text-lg">
              Manufacturing doesn&apos;t need disruption. It needs connection.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-text-secondary text-lg">
              CAD, CAM, posts, machines, and people already work — just not
              together.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-text-secondary text-lg">
              We remove the glue work. Decisions carry forward. Experience
              compounds.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <p className="text-text-secondary text-base italic">
              Inspired by lean principles, we mold operations into streamlined
              flows — without overhauls.
            </p>
          </AnimateOnScroll>
        </div>

        <GapFillAnimation />
      </Container>
    </section>
  );
}
