'use client';

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTASection() {
  return (
    <section className="py-28 bg-surface border-y border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              See what streamlined work feels like.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <p className="mt-4 text-lg text-text-secondary">
              Start with one handoff. Keep decisions moving from there.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.25}>
            <div className="mt-8">
              <Button href="/contact">Get started</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
