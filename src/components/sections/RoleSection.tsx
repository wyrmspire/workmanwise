'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RoleCard } from '@/components/ui/RoleCard';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';

const roles = [
  {
    role: 'Machinists',
    pain: 'Every job starts from scratch',
    outcome: 'Your best setups become the default',
    expanded:
      'Decision Memory and Setup Recall capture your proven approaches. Standard jobs load pre-configured setups automatically. No more rebuilding workflows from memory.',
  },
  {
    role: 'Sales',
    pain: 'I promised something the floor can&apos;t do',
    outcome: 'Know what&apos;s possible before you commit',
    expanded:
      'Process Clarity checks quotes against machine constraints in real time. Reality Check validates timelines before you promise. No more uncomfortable floor conversations.',
  },
  {
    role: 'Founders',
    pain: 'Experience walks out the door every night',
    outcome: 'Turn knowledge into systems',
    expanded:
      'Knowledge Capture and Tribal → Standard tools codify what only your best people know. Expertise becomes documentation. Systems outlive individuals.',
  },
  {
    role: 'Operations',
    pain: 'I can&apos;t see where things are breaking',
    outcome: 'Lean monitoring — quiet until it matters, then precise',
    expanded:
      'Drift Detection, Flow Health, and Waste Spotter watch continuously. Alerts only fire when deviation exceeds thresholds. You get signal, not noise.',
  },
];

export function RoleSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <SectionHeading
          headline="Who This Is For"
          subtext="Non-machinists need to see themselves here."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <AnimateOnScroll
              key={role.role}
              delay={index * 0.1}
              animation="fade-up"
            >
              <RoleCard {...role} expandedContent={role.expanded} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
