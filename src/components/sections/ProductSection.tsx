'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';

const highlightProducts = [
  {
    title: 'Post Intelligence',
    description: 'Generate machine-ready instructions without guesswork.',
    type: 'active' as const,
    roles: ['Machinists', 'CAM'],
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Machine + job specified
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Working post processor
        </p>
        <p className="text-sm text-text-secondary">
          Tell us your machine. Download your post. Improve it with guided
          feedback. No editing. No trial-and-error. No mystery behavior.
        </p>
      </>
    ),
  },
  {
    title: 'Decision Memory',
    description: 'Your best decisions stop getting lost between steps.',
    type: 'background' as const,
    roles: ['All roles'],
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Decision made in workflow
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Stored, retrievable decision context
        </p>
        <p className="text-sm text-text-secondary">
          Captures assumptions, machine constraints, and setup logic. Decisions
          carry forward automatically across similar jobs.
        </p>
      </>
    ),
  },
  {
    title: 'Process Clarity',
    description: 'Know what&apos;s possible before you promise it.',
    type: 'active' as const,
    roles: ['Sales'],
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Quote or commitment being drafted
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Feasibility check against constraints
        </p>
        <p className="text-sm text-text-secondary">
          Checks quotes against machine constraints in real time. No more
          promising what the floor can&apos;t deliver.
        </p>
      </>
    ),
  },
  {
    title: 'Waste Spotter',
    description: 'Find where time and material get wasted.',
    type: 'background' as const,
    roles: ['Ops', 'Founders'],
    leanInspired: true,
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Continuous monitoring
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Visual waste map with reduction suggestions
        </p>
        <p className="text-sm text-text-secondary">
          Lean-inspired. Identifies bottlenecks, excess motion, and rework
          patterns. Surfaces what&apos;s costing you without adding value.
        </p>
      </>
    ),
  },
  {
    title: 'JIT Scheduler',
    description: 'Trigger tasks just-in-time to cut waste.',
    type: 'background' as const,
    roles: ['Ops'],
    leanInspired: true,
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Inventory low / job stage reached
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Auto-scheduled task at the right moment
        </p>
        <p className="text-sm text-text-secondary">
          Lean-inspired Just-In-Time task scheduling. No early prep, no waiting.
          Work starts exactly when needed.
        </p>
      </>
    ),
  },
  {
    title: 'Knowledge Capture',
    description: 'Turn experience into leverage.',
    type: 'active' as const,
    roles: ['All roles'],
    expandedContent: (
      <>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Trigger:</strong> Expert performs a task
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>Output:</strong> Documented, repeatable process
        </p>
        <p className="text-sm text-text-secondary">
          What only your best people know becomes accessible to everyone.
          Experience walks out the door? Not anymore.
        </p>
      </>
    ),
  },
];

export function ProductSection() {
  return (
    <section className="py-32 bg-bg">
      <Container>
        <SectionHeading
          headline="Focused tools for real work."
          subtext="Not products. Not features. Tools that remove friction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlightProducts.map((product, index) => (
            <AnimateOnScroll
              key={product.title}
              delay={index * 0.1}
              animation="fade-up"
            >
              <Card {...product} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
