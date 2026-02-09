import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About | WorkmanWise',
  description:
    'WorkmanWise is a collective of machinists and designers focused on reducing handoff friction.',
};

const values = [
  {
    title: 'Trust before tools',
    description:
      'We explain the operating model before naming software. If the model is wrong, tools do not help.',
  },
  {
    title: 'Plain first, depth on demand',
    description:
      'Every concept is understandable in one line and defensible at technical depth when needed.',
  },
  {
    title: 'Flow over hype',
    description:
      'We optimize continuity between steps, not feature volume or dashboard noise.',
  },
];

const teamPlaceholders = [
  {
    name: 'Machining Lead',
    focus: 'Setup systems, post behavior, and floor-ready standards.',
  },
  {
    name: 'Design Systems Lead',
    focus: 'Decision clarity, workflow structure, and handoff definitions.',
  },
  {
    name: 'Operations Lead',
    focus: 'Flow health, bottlenecks, and implementation sequencing.',
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Built by people who have done the work."
          subtext="WorkmanWise is a collective of machinists and designers reducing friction across real manufacturing flows."
        />

        <div className="mx-auto max-w-3xl space-y-5 mb-14">
          <AnimateOnScroll delay={0.05}>
            <p className="text-lg text-text-secondary">
              We are not trying to disrupt manufacturing. We are connecting what
              already works so decisions carry forward cleanly.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.12}>
            <p className="text-lg text-text-secondary">
              We use the same tools most teams already have. The difference is
              how we remove the glue work between them.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <AnimateOnScroll key={value.title} delay={index * 0.08} animation="fade-up">
              <article className="h-full rounded-lg border border-border bg-card-bg p-6">
                <h2 className="text-lg font-bold text-text-primary">{value.title}</h2>
                <p className="mt-3 text-sm text-text-secondary">{value.description}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-5">Team focus</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamPlaceholders.map((member, index) => (
              <AnimateOnScroll
                key={member.name}
                delay={index * 0.08}
                animation="fade-up"
              >
                <article className="h-full rounded-lg border border-border bg-card-bg p-6">
                  <div className="mb-4 h-28 rounded-md border border-border bg-surface flex items-center justify-center text-xs font-mono text-text-secondary">
                    Image placeholder
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{member.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{member.focus}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
