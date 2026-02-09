export interface ResourceArticle {
  id: string;
  title: string;
  snippet: string;
  category: string;
  published: string;
  content: string[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    id: 'streamlining-handoffs-lean',
    title: 'Streamlining Handoffs: A Lean Approach',
    snippet: 'Most delays happen in handoffs, not in cutting time.',
    category: 'Flow Design',
    published: '2026-02-09',
    content: [
      'Most small and mid-size shops do not fail because machines are slow. They lose time when work transfers from one person or system to another without complete context.',
      'A lean approach to handoffs starts by reducing ambiguity. Every handoff should carry clear intent, current constraints, and what has already been decided so the next step does not restart the conversation.',
      'Start with one high-friction handoff and standardize the payload that travels with it. Once one transition is stable, repeat the pattern through the rest of the flow.',
    ],
  },
  {
    id: 'jit-small-shops-decision-memory',
    title: 'JIT in Small Shops: Reducing Friction with Decision Memory',
    snippet: 'Just-in-time only works when teams can trust prior decisions.',
    category: 'JIT Operations',
    published: '2026-02-09',
    content: [
      'In smaller operations, just-in-time breaks down when teams spend too long rediscovering decisions that were already made on similar work.',
      'Decision memory solves that by preserving setup assumptions, machine constraints, and communication history in a reusable format. Teams can then start from known-good logic instead of rebuilding context from memory.',
      'The practical result is less queue inflation, fewer rushed clarifications, and cleaner starts when the next job enters the line.',
    ],
  },
  {
    id: 'handoff-optimization-lean-flows',
    title: 'Handoff Optimization: Lessons from Lean Flows',
    snippet: 'If a handoff is noisy, everything downstream becomes reactive.',
    category: 'Process Improvement',
    published: '2026-02-09',
    content: [
      'Lean flow design treats handoffs as first-class operations, not administrative overhead. That means defining what must be transferred before work is considered ready for the next stage.',
      'Effective handoff optimization focuses on three checks: completeness of information, confirmation of receipt, and visibility of unresolved risk.',
      'When those checks are consistent, teams spend less time chasing status and more time making progress.',
    ],
  },
  {
    id: 'tribal-knowledge-repeatable-systems',
    title: 'Turning Tribal Knowledge into Repeatable Systems',
    snippet: 'What only one person knows is an operational risk.',
    category: 'Knowledge Systems',
    published: '2026-02-09',
    content: [
      'Every shop has expert operators who keep work moving through experience. The risk appears when their reasoning stays undocumented and cannot scale across shifts or new hires.',
      'Converting tribal knowledge into systems does not require heavy documentation programs. It requires capturing decisions at the moment they are made and attaching them to the work they affect.',
      'Over time, this turns isolated expertise into shared operating memory that improves consistency without slowing teams down.',
    ],
  },
  {
    id: 'manufacturing-needs-connection',
    title: 'Why Manufacturing Does Not Need Disruption - It Needs Connection',
    snippet: 'Most operations already have capable tools; they need better continuity.',
    category: 'Operating Model',
    published: '2026-02-09',
    content: [
      'Disruption language often implies replacing what already works. In manufacturing, that usually creates more friction, not less.',
      'A better approach is connection: align CAD, CAM, posts, floor execution, and communication so decisions carry forward without re-interpretation.',
      'Connection compounds. Each improvement reduces glue work, shortens feedback loops, and makes the next decision faster and more informed.',
    ],
  },
];
