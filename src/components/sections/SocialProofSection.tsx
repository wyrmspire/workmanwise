'use client';

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const quotes = [
  {
    quote: 'This feels like it was built by people who have stood at a machine.',
    role: 'Shop Foreman',
  },
  {
    quote: 'It fixed the annoying stuff we have lived with for years.',
    role: 'Operations Lead',
  },
  {
    quote: 'I did not have to touch the post once.',
    role: 'Senior Machinist',
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <SectionHeading
          headline="Proof from people in the work."
          subtext="Identity before logos. Experience before claims."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quotes.map((item, index) => (
            <AnimateOnScroll
              key={item.quote}
              delay={index * 0.1}
              animation="fade-up"
            >
              <blockquote className="h-full rounded-lg border border-border bg-card-bg p-6">
                <p className="text-lg text-text-primary leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs font-mono uppercase tracking-wide text-accent">
                  {item.role}
                </footer>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
