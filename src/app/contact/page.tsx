import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { ContactForm } from '@/components/contact/ContactForm';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact | WorkmanWise',
  description:
    'Contact WorkmanWise to start reducing friction across manufacturing handoffs.',
};

export default function ContactPage() {
  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Start with one handoff."
          subtext="Tell us where work is breaking down and we will map the first fix."
        />

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <AnimateOnScroll animation="fade-up">
            <aside className="rounded-lg border border-border bg-card-bg p-6 md:p-8">
              <h2 className="text-lg font-bold text-text-primary">What to expect</h2>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                <li>Response within one business day.</li>
                <li>Plain language first, technical depth where needed.</li>
                <li>A clear first step before any broad rollout discussion.</li>
              </ul>
            </aside>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
