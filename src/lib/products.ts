export const roleOptions = [
  'Machinists',
  'Sales',
  'Founders',
  'Operations',
] as const;

export type Role = (typeof roleOptions)[number];

export const toolTypes = ['background', 'active', 'service'] as const;

export type ToolType = (typeof toolTypes)[number];

export type FamilySlug =
  | 'decision-capture-memory'
  | 'meeting-to-action-automation'
  | 'workflow-monitoring-guardrails'
  | 'promise-protection'
  | 'knowledge-to-system-conversion'
  | 'process-health-visibility'
  | 'lightweight-automation'
  | 'strategic-services'
  | 'streamline-essentials';

export interface ProductFamily {
  slug: FamilySlug;
  name: string;
  purpose: string;
}

export interface Product {
  id: string;
  name: string;
  statement: string;
  outcome: string;
  trigger: string;
  output: string;
  technical: string;
  roles: Role[];
  type: ToolType;
  familySlug: FamilySlug;
  leanInspired?: boolean;
  gateway?: boolean;
}

const allRoles: Role[] = [...roleOptions];

export const productFamilies: ProductFamily[] = [
  {
    slug: 'decision-capture-memory',
    name: 'Decision Capture & Memory',
    purpose: 'Turn daily decisions into reusable workflow context.',
  },
  {
    slug: 'meeting-to-action-automation',
    name: 'Meeting-to-Action Automation',
    purpose: 'Move from conversation to execution without manual follow-up.',
  },
  {
    slug: 'workflow-monitoring-guardrails',
    name: 'Workflow Monitoring & Guardrails',
    purpose: 'Watch for drift quietly and alert only when precision matters.',
  },
  {
    slug: 'promise-protection',
    name: 'Promise Protection',
    purpose: 'Protect commitments before they become floor-level problems.',
  },
  {
    slug: 'knowledge-to-system-conversion',
    name: 'Knowledge to System Conversion',
    purpose: 'Convert expert memory into repeatable standards.',
  },
  {
    slug: 'process-health-visibility',
    name: 'Process Health & Visibility',
    purpose: 'See where work stalls and where handoffs break.',
  },
  {
    slug: 'lightweight-automation',
    name: 'Lightweight Automation',
    purpose: 'Deploy focused automations that work right away.',
  },
  {
    slug: 'strategic-services',
    name: 'Strategic Services',
    purpose: 'Human-in-the-loop support for redesigning critical workflows.',
  },
  {
    slug: 'streamline-essentials',
    name: 'Streamline Essentials',
    purpose: 'Lean and JIT inspired tools to remove waste without overhauls.',
  },
];

export const products: Product[] = [
  {
    id: 'decision-memory',
    name: 'Decision Memory',
    statement: 'Your best decisions stop getting lost between steps.',
    outcome: 'Proven decisions carry forward instead of being rebuilt.',
    trigger: 'A decision is made during quoting, setup, or production.',
    output: 'Stored decision context tied to jobs, machines, and constraints.',
    technical:
      'Captures assumptions, machine notes, and preferred strategies so future work starts from known-good logic.',
    roles: allRoles,
    type: 'background',
    familySlug: 'decision-capture-memory',
  },
  {
    id: 'setup-recall',
    name: 'Setup Recall',
    statement: 'Start from your last good setup, not a blank page.',
    outcome: 'Repeat jobs launch faster with fewer mistakes.',
    trigger: 'A new job matches prior geometry, material, or machine profile.',
    output: 'Preloaded setup sheet and prior setup decisions.',
    technical:
      'Pulls setup parameters from similar work and highlights what changed before the run begins.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'decision-capture-memory',
  },
  {
    id: 'constraint-library',
    name: 'Constraint Library',
    statement: 'Machine limits stay visible and current.',
    outcome: 'Programming and quoting align with shop reality.',
    trigger: 'A machine capability or tooling constraint is updated.',
    output: 'Versioned constraints shared across planning and execution.',
    technical:
      'Maintains per-machine envelopes, preferred tooling ranges, and process guardrails for downstream checks.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'decision-capture-memory',
  },
  {
    id: 'change-note-trail',
    name: 'Change Note Trail',
    statement: 'Every meaningful process change has a clear trail.',
    outcome: 'Teams understand why a method changed and when.',
    trigger: 'Any process note or setup instruction is modified.',
    output: 'Timestamped change notes linked to jobs and outcomes.',
    technical:
      'Builds lightweight traceability so improvements and reversions are visible across shifts.',
    roles: ['Founders', 'Operations'],
    type: 'background',
    familySlug: 'decision-capture-memory',
  },
  {
    id: 'meeting-capture',
    name: 'Meeting Capture',
    statement: 'Decisions from meetings become floor-ready tasks.',
    outcome: 'Less handoff loss after planning conversations.',
    trigger: 'A planning or production meeting ends.',
    output: 'Action list mapped to owners, due windows, and workflow stages.',
    technical:
      'Transforms meeting decisions into structured task payloads and routes them to the right owners automatically.',
    roles: allRoles,
    type: 'active',
    familySlug: 'meeting-to-action-automation',
  },
  {
    id: 'commitment-tracker',
    name: 'Commitment Tracker',
    statement: 'Know exactly what was promised and by when.',
    outcome: 'Sales and operations stay aligned on commitments.',
    trigger: 'A delivery, tolerance, or timeline promise is made.',
    output: 'Tracked commitment with status and escalation flags.',
    technical:
      'Associates commitments with capacity and constraint data so risks surface before deadlines are missed.',
    roles: ['Sales', 'Operations'],
    type: 'background',
    familySlug: 'meeting-to-action-automation',
  },
  {
    id: 'follow-up-drafts',
    name: 'Follow-Up Drafts',
    statement: 'Customer and internal follow-ups are pre-written with context.',
    outcome: 'Critical communication moves faster and stays consistent.',
    trigger: 'A meeting action item enters a pending state.',
    output: 'Role-specific follow-up drafts with task context.',
    technical:
      'Builds communication drafts from workflow context so teams respond quickly without skipping details.',
    roles: ['Sales', 'Operations'],
    type: 'active',
    familySlug: 'meeting-to-action-automation',
  },
  {
    id: 'drift-detection',
    name: 'Drift Detection',
    statement: 'Catch process drift before it becomes scrap.',
    outcome: 'Teams intervene early, not after failure.',
    trigger: 'Observed cycle behavior deviates from expected patterns.',
    output: 'Deviation alert with affected steps and severity.',
    technical:
      'Monitors step-level variance and tolerance trends to detect subtle process movement early.',
    roles: ['Operations', 'Founders'],
    type: 'background',
    familySlug: 'workflow-monitoring-guardrails',
  },
  {
    id: 'flow-health',
    name: 'Flow Health',
    statement: 'Get a simple read on workflow stability.',
    outcome: 'Leaders see risk without opening multiple systems.',
    trigger: 'Scheduled health check windows.',
    output: 'Workflow health score with focused recommendations.',
    technical:
      'Combines handoff latency, exception rate, and rework frequency into a concise health summary.',
    roles: ['Operations', 'Founders'],
    type: 'background',
    familySlug: 'workflow-monitoring-guardrails',
  },
  {
    id: 'missed-step-alert',
    name: 'Missed Step Alert',
    statement: 'Know when a required step was skipped.',
    outcome: 'Stops preventable downstream rework.',
    trigger: 'A job advances without a required checkpoint.',
    output: 'Checkpoint alert with responsible stage and owner.',
    technical:
      'Tracks required workflow events and flags transitions that bypass critical validations.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'workflow-monitoring-guardrails',
  },
  {
    id: 'tolerance-guard',
    name: 'Tolerance Guard',
    statement: 'Surface tolerance risks before setup starts.',
    outcome: 'Machinists avoid avoidable trial-and-error.',
    trigger: 'Program and machine pairing is selected.',
    output: 'Tolerance risk note and recommended checks.',
    technical:
      'Compares process intent to known machine and tooling behavior to warn on likely mismatch.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'workflow-monitoring-guardrails',
  },
  {
    id: 'process-clarity',
    name: 'Process Clarity',
    statement: 'Know what is possible before you promise it.',
    outcome: 'Quotes match what the floor can deliver.',
    trigger: 'A quote or commitment is being drafted.',
    output: 'Feasibility check against machine and process constraints.',
    technical:
      'Validates quoted scope using actual shop constraints so commercial promises stay grounded.',
    roles: ['Sales'],
    type: 'active',
    familySlug: 'promise-protection',
  },
  {
    id: 'reality-check',
    name: 'Reality Check',
    statement: 'Validate timelines against current capacity.',
    outcome: 'Fewer urgent escalations and fewer broken promises.',
    trigger: 'A delivery timeline is proposed.',
    output: 'Timeline validation with risk indicators.',
    technical:
      'Cross-references queue load, machine availability, and historical cycle times before commitments are finalized.',
    roles: ['Sales', 'Operations'],
    type: 'background',
    familySlug: 'promise-protection',
  },
  {
    id: 'capacity-signal',
    name: 'Capacity Signal',
    statement: 'Get early warning when the line is over-committed.',
    outcome: 'Decision-makers can rebalance before delays stack up.',
    trigger: 'Forecasted workload exceeds defined buffers.',
    output: 'Capacity warning with bottlenecked work centers.',
    technical:
      'Projects queue pressure against throughput targets and flags risk bands for upcoming windows.',
    roles: ['Sales', 'Founders', 'Operations'],
    type: 'background',
    familySlug: 'promise-protection',
  },
  {
    id: 'quote-guard',
    name: 'Quote Guard',
    statement: 'Prevent quote details from drifting after approval.',
    outcome: 'Approved scope stays consistent through delivery.',
    trigger: 'Quoted specs or assumptions are edited post-approval.',
    output: 'Drift warning and approval checkpoint.',
    technical:
      'Watches quote revisions and enforces validation when material assumptions change.',
    roles: ['Sales'],
    type: 'background',
    familySlug: 'promise-protection',
  },
  {
    id: 'knowledge-capture',
    name: 'Knowledge Capture',
    statement: 'Turn expert habits into repeatable methods.',
    outcome: 'Experience compounds instead of disappearing.',
    trigger: 'A critical task is completed by an experienced operator.',
    output: 'Structured process notes and reusable instructions.',
    technical:
      'Extracts repeatable patterns from expert behavior and organizes them into reusable process assets.',
    roles: allRoles,
    type: 'active',
    familySlug: 'knowledge-to-system-conversion',
  },
  {
    id: 'tribal-to-standard',
    name: 'Tribal to Standard',
    statement: 'What one person knows becomes team standard.',
    outcome: 'Less dependency on single points of knowledge.',
    trigger: 'A recurring task depends on undocumented know-how.',
    output: 'Codified standard with review checkpoints.',
    technical:
      'Converts informal procedures into versioned standards with ownership and update history.',
    roles: ['Founders', 'Operations'],
    type: 'service',
    familySlug: 'knowledge-to-system-conversion',
  },
  {
    id: 'setup-playbooks',
    name: 'Setup Playbooks',
    statement: 'Standard setup sequences are always ready.',
    outcome: 'Faster onboarding and more consistent starts.',
    trigger: 'A job family is selected for scheduling.',
    output: 'Role-ready setup playbook and checklist.',
    technical:
      'Packages proven setup patterns into stepwise instructions with machine-specific variants.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'knowledge-to-system-conversion',
  },
  {
    id: 'shift-handoff-notes',
    name: 'Shift Handoff Notes',
    statement: 'Critical context survives every shift change.',
    outcome: 'Next shift starts informed, not guessing.',
    trigger: 'Shift closeout or role transfer.',
    output: 'Structured handoff summary with pending decisions.',
    technical:
      'Builds high-signal handoff notes from current job state, exceptions, and unresolved actions.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'knowledge-to-system-conversion',
  },
  {
    id: 'bottleneck-finder',
    name: 'Bottleneck Finder',
    statement: 'See where work is truly slowing down.',
    outcome: 'Improvement effort targets the right constraint.',
    trigger: 'Continuous workflow monitoring.',
    output: 'Bottleneck map by stage and recurrence.',
    technical:
      'Ranks queue and delay hotspots by impact, frequency, and downstream disruption.',
    roles: ['Operations', 'Founders'],
    type: 'background',
    familySlug: 'process-health-visibility',
  },
  {
    id: 'handoff-tracker',
    name: 'Handoff Tracker',
    statement: 'Confirm every handoff reached the right person.',
    outcome: 'Fewer lost tasks between departments.',
    trigger: 'A handoff event is executed.',
    output: 'Handoff confirmation or failure alert.',
    technical:
      'Verifies delivery, acknowledgment, and completion signals at each handoff point.',
    roles: allRoles,
    type: 'background',
    familySlug: 'process-health-visibility',
  },
  {
    id: 'queue-snapshot',
    name: 'Queue Snapshot',
    statement: 'Get a clean picture of active queue pressure.',
    outcome: 'Daily planning takes minutes, not meetings.',
    trigger: 'Scheduled planning times.',
    output: 'Priority-ranked queue snapshot with blockers.',
    technical:
      'Aggregates open work, urgency bands, and blockers into one planning-ready view.',
    roles: ['Operations', 'Founders'],
    type: 'active',
    familySlug: 'process-health-visibility',
  },
  {
    id: 'rework-radar',
    name: 'Rework Radar',
    statement: 'See what keeps coming back for fixes.',
    outcome: 'Root causes become clear and repeat defects drop.',
    trigger: 'A job is reopened for rework.',
    output: 'Rework pattern summary and likely root causes.',
    technical:
      'Clusters rework events by operation, setup, and condition to surface systemic issues.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'process-health-visibility',
  },
  {
    id: 'post-intelligence',
    name: 'Post Intelligence',
    statement: 'Generate machine-ready instructions without guesswork.',
    outcome: 'Posts launch faster and run with fewer surprises.',
    trigger: 'Machine and job profile are selected.',
    output: 'Ready-to-run post with machine-specific defaults.',
    technical:
      'Builds machine-aware post output from known constraints and validated decisions across similar work.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'lightweight-automation',
    gateway: true,
  },
  {
    id: 'auto-setup',
    name: 'Auto-Setup',
    statement: 'Standard jobs get standard setup automatically.',
    outcome: 'Routine work starts consistently every time.',
    trigger: 'A recognized repeat job is scheduled.',
    output: 'Preconfigured setup sheet and checks.',
    technical:
      'Applies stored setup profiles to repeat jobs and flags deviations that need human review.',
    roles: ['Machinists'],
    type: 'active',
    familySlug: 'lightweight-automation',
  },
  {
    id: 'template-launcher',
    name: 'Template Launcher',
    statement: 'Start proven process templates in one step.',
    outcome: 'Teams avoid rebuilding common workflows.',
    trigger: 'A known job class enters planning.',
    output: 'Workflow template instantiated with key parameters.',
    technical:
      'Loads process structure, checkpoints, and owners from validated templates for fast kickoff.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'lightweight-automation',
  },
  {
    id: 'program-packager',
    name: 'Program Packager',
    statement: 'Bundle setup context and program notes automatically.',
    outcome: 'The floor gets complete context with each release.',
    trigger: 'A program is approved for release.',
    output: 'Packaged program handoff bundle for operators.',
    technical:
      'Assembles release artifacts, setup notes, and risk checks into one consistent package.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'lightweight-automation',
  },
  {
    id: 'workflow-audit',
    name: 'Workflow Audit',
    statement: 'We map your flow and find what is stuck.',
    outcome: 'You get a clear improvement path with priorities.',
    trigger: 'Engagement kickoff.',
    output: 'Audit report with practical recommendations.',
    technical:
      'Combines shop observation, handoff analysis, and process data review into a staged improvement plan.',
    roles: allRoles,
    type: 'service',
    familySlug: 'strategic-services',
  },
  {
    id: 'process-design',
    name: 'Process Design',
    statement: 'We design the workflow your team can actually run.',
    outcome: 'New lines and products launch with less friction.',
    trigger: 'New process, line, or product introduction.',
    output: 'Documented process design and implementation plan.',
    technical:
      'Defines flow architecture, ownership boundaries, and control points aligned to real shop constraints.',
    roles: ['Founders', 'Operations'],
    type: 'service',
    familySlug: 'strategic-services',
  },
  {
    id: 'integration-review',
    name: 'Integration Review',
    statement: 'Find where your tools stop talking to each other.',
    outcome: 'Critical gaps are visible with a realistic roadmap.',
    trigger: 'System stack evaluation.',
    output: 'Integration gap map and phased roadmap.',
    technical:
      'Assesses handoff interfaces between planning, programming, and execution systems for continuity risk.',
    roles: ['Founders', 'Operations'],
    type: 'service',
    familySlug: 'strategic-services',
  },
  {
    id: 'waste-spotter',
    name: 'Waste Spotter',
    statement: 'Find where time and material are getting wasted.',
    outcome: 'Waste hotspots are visible and actionable.',
    trigger: 'Continuous production monitoring.',
    output: 'Waste map with ranked reduction opportunities.',
    technical:
      'Tracks delay patterns, motion overhead, and repeat errors to identify non-value work.',
    roles: ['Operations', 'Founders'],
    type: 'background',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'jit-scheduler',
    name: 'JIT Scheduler',
    statement: 'Trigger tasks just in time to avoid excess work.',
    outcome: 'Work begins when needed, not too early.',
    trigger: 'Inventory or stage threshold events.',
    output: 'Timed task release with sequencing rules.',
    technical:
      'Aligns task timing to downstream readiness so queue buildup and idle waits drop together.',
    roles: ['Operations'],
    type: 'background',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'flow-molder',
    name: 'Flow Molder',
    statement: 'Reshape operations into cleaner flow paths.',
    outcome: 'Fewer stops and less decision friction.',
    trigger: 'Process review or redesign cycle.',
    output: 'Recommended streamlined flow with rollout steps.',
    technical:
      'Analyzes handoff density and feedback loops to propose lower-friction routing.',
    roles: ['Operations', 'Founders'],
    type: 'active',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'cycle-timer',
    name: 'Cycle Timer',
    statement: 'Know actual step timing, not estimates.',
    outcome: 'Planning and quoting use real throughput data.',
    trigger: 'Step completion events.',
    output: 'Cycle-time history and trend lines.',
    technical:
      'Captures observed timing at each stage and surfaces variance for planning confidence.',
    roles: ['Machinists', 'Operations'],
    type: 'background',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'changeover-coach',
    name: 'Changeover Coach',
    statement: 'Reduce downtime between jobs with guided sequencing.',
    outcome: 'More spindle time and cleaner transitions.',
    trigger: 'Machine changeover start.',
    output: 'Optimized changeover sequence with checkpoints.',
    technical:
      'Guides setup order, resource staging, and validation checks to shorten transition windows.',
    roles: ['Machinists', 'Operations'],
    type: 'active',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'inventory-pulse',
    name: 'Inventory Pulse',
    statement: 'Know what you need before shortages stop flow.',
    outcome: 'Fewer part delays and fewer rush purchases.',
    trigger: 'Stock thresholds and schedule updates.',
    output: 'Just-in-time inventory alerts with timing suggestions.',
    technical:
      'Connects schedule demand to inventory position and highlights upcoming risk windows.',
    roles: ['Operations'],
    type: 'background',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
  {
    id: 'rework-tracker',
    name: 'Rework Tracker',
    statement: 'Track recurring rework and stop repeat failures.',
    outcome: 'Teams fix root causes instead of symptoms.',
    trigger: 'Rework ticket creation.',
    output: 'Recurring issue patterns with suggested countermeasures.',
    technical:
      'Links rework events to process context and highlights repeated conditions that need structural fixes.',
    roles: ['Operations', 'Founders'],
    type: 'background',
    familySlug: 'streamline-essentials',
    leanInspired: true,
  },
];

const familyLookup = new Map(productFamilies.map((family) => [family.slug, family]));

export function getFamilyBySlug(slug: string): ProductFamily | undefined {
  return familyLookup.get(slug as FamilySlug);
}

export function getProductsByFamily(slug: FamilySlug): Product[] {
  return products.filter((product) => product.familySlug === slug);
}

export function getFamilySlugs(): FamilySlug[] {
  return productFamilies.map((family) => family.slug);
}
