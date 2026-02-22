Project Structure:
.
DESIGN.md
eslint.config.mjs
FEATURES.md
gitr.sh
MASTER-PROMPT.md
next-env.d.ts
next.config.ts
package.json
PAGES.md
postcss.config.mjs
printcode.sh
PROGRESS.md
public
README.md
src
src/app
src/app/about
src/app/about/page.tsx
src/app/api
src/app/api/contact
src/app/contact
src/app/contact/page.tsx
src/app/globals.css
src/app/layout.tsx
src/app/not-found.tsx
src/app/page.tsx
src/app/resources
src/app/resources/page.tsx
src/app/robots.ts
src/app/sitemap.ts
src/app/tools
src/app/tools/page.tsx
src/app/tools/[family]
src/components
src/components/animations
src/components/animations/AnimateOnScroll.tsx
src/components/animations/ConveyorAnimation.tsx
src/components/animations/DecisionCarryAnimation.tsx
src/components/animations/GapFillAnimation.tsx
src/components/contact
src/components/contact/ContactForm.tsx
src/components/layout
src/components/layout/Container.tsx
src/components/layout/Footer.tsx
src/components/layout/Header.tsx
src/components/layout/ThemeProvider.tsx
src/components/sections
src/components/sections/AIExplanationSection.tsx
src/components/sections/CollectiveSection.tsx
src/components/sections/FinalCTASection.tsx
src/components/sections/HeroSection.tsx
src/components/sections/OutcomeSection.tsx
src/components/sections/ProductSection.tsx
src/components/sections/RoleSection.tsx
src/components/sections/SocialProofSection.tsx
src/components/sections/TranslationSection.tsx
src/components/tools
src/components/tools/ToolsCatalog.tsx
src/components/ui
src/components/ui/ArticleCard.tsx
src/components/ui/Badge.tsx
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/ProductCard.tsx
src/components/ui/RoleCard.tsx
src/components/ui/SectionHeading.tsx
src/components/ui/ThemeSwitcher.tsx
src/hooks
src/lib
src/lib/articles.ts
src/lib/constants.ts
src/lib/products.ts
src/lib/themes.ts
TECH-STACK.md
tsconfig.json
VISION.md
================================================================================
File: package.json
--------------------------------------------------------------------------------
{
  "name": "workmanwise-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@fontsource/inter": "^5.2.8",
    "@fontsource/jetbrains-mono": "^5.2.8",
    "framer-motion": "^12.33.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

================================================================================
File: tsconfig.json
--------------------------------------------------------------------------------
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

================================================================================
File: next.config.ts
--------------------------------------------------------------------------------
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

================================================================================
File: postcss.config.mjs
--------------------------------------------------------------------------------
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

================================================================================
File: eslint.config.mjs
--------------------------------------------------------------------------------
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

================================================================================
File: DESIGN.md
--------------------------------------------------------------------------------
# WorkmanWise — Design System

---

## Visual Philosophy

**Industrial precision meets modern digital craft.**

The design should feel like a well-made tool — clean, purposeful, no wasted space. Animations feel like machining: smooth, precise, intentional. Nothing bouncy or playful — everything moves with purpose.

**Key shift:** Visual metaphors are about **flow**, not just CNC. Conveyor belts with missing rollers. Documents dropping between systems. Decisions fading instead of carrying forward. Flow visuals work for everyone — machinists and salespeople alike.

---

## The 5-Design Mode Switcher

A **craft statement** feature. Not just dark/light — 5 distinct design themes.

### Theme 1: Shop Floor (Default)
- Dark background, warm industrial gray `#1a1a1a`
- Amber accent `#F59E0B`
- Feels like: standing at the machine, control panel glow
- Mono headings, high contrast text

### Theme 2: Blueprint
- Deep navy background `#0A1628`
- White/cyan line-drawing aesthetic `#67E8F9`
- Feels like: technical drawing, precision planning
- Grid overlay subtle in background
- All elements feel drafted, not designed

### Theme 3: Clean Room
- Pure white `#FFFFFF` / light gray `#F8FAFC`
- Steel blue accent `#2563EB`
- Feels like: medical-grade precision, aerospace clean
- Maximum whitespace, sharp typography

### Theme 4: Raw Material
- Warm off-white `#FAF5F0` / kraft paper tones
- Dark text `#1C1917`, rust accent `#B45309`
- Feels like: raw stock, honest material, workshop warmth
- Slightly rougher textures, organic spacing

### Theme 5: Night Shift
- True black `#000000`
- Safety green accent `#22C55E`
- Feels like: CNC running overnight, dark shop, status lights
- Minimal elements, everything stripped back
- Terminal / monospace aesthetic pushed further

### Switcher UI
- Small, elegant control in the corner (gear icon or 5 dots)
- Smooth crossfade transition between themes (~400ms)
- Persisted in localStorage
- No label needed — the themes speak for themselves

### Implementation
- CSS custom properties for all theme tokens
- Single theme provider component
- All 5 themes share layout — only colors, textures, and subtle typographic weight change
- Some themes adjust animation intensity (Night Shift = more minimal, Blueprint = more line-drawn)

---

## Progressive Disclosure UI System

**The foundational UX pattern for the entire site.**

### Three-Layer Pattern

Every section, card, and concept follows:

```
Layer 1: Statement     → Plain language, one line
Layer 2: Outcome       → What changes for the user
Layer 3: Expand-click  → Full technical depth
```

### Why This Works
- **Non-technical visitors** scan Layer 1, feel understood, move on
- **Experts** scan Layer 1, click expand, respect the depth
- **50+ products** fit without overwhelming — cards are small until opened

---

## Card-Based UI System

### Product Card Anatomy

```
┌─────────────────────────────┐
│ [icon/image placeholder]    │
│                             │
│ Product Name                │
│ One-sentence explanation    │
│                             │
│ [badge: background/active]  │
│ [badge: role]               │
│                             │
│ [expand: "How this works"]  │
└─────────────────────────────┘
```

### Expanded State

```
┌─────────────────────────────────────────┐
│ Product Name                            │
│ ─────────────────────────────           │
│ Technical explanation (2-3 lines)       │
│                                         │
│ Trigger: [what starts it]               │
│ Output:  [what you get]                 │
│ For:     [role badges]                  │
│                                         │
│ [screenshot/mockup placeholder]         │
│                                         │
│ [CTA: "Try it" or "Learn more"]        │
└─────────────────────────────────────────┘
```

### Card Badges

| Type | Badge text | Visual |
|------|-----------|--------|
| Background tool | "Always watching" | Subtle pulse dot, muted card |
| Active tool | "Hands-on" | Solid icon, standard card |
| Human service | "With our team" | People icon, slightly different style |

### Card Grid Layout
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Cards within a family grid
- Family label above each group
- Filter tabs: By Family (default) / By Role / By Type

### Article Card Anatomy (Resources Page)

```
┌─────────────────────────────┐
│ Article Title               │
│ One-line snippet            │
│                             │
│ [category badge]  [date]    │
│                             │
│ [expand: "Read more"]       │
└─────────────────────────────┘
```

Expanded: full article content (markdown rendered), back-to-list link.
Same progressive disclosure pattern. Same animation timing.

### Lean/JIT Badge
Products in the Streamline Essentials family get an additional subtle badge: "Lean-Inspired" — small, muted, not the primary badge. Appears alongside Background/Active badge.

---

## Animation Philosophy

### The Rule
Use animation only to:
- Explain flow
- Show continuity
- Reduce cognitive load

Never to:
- Impress
- Entertain
- "Wow"

**If an animation feels like a startup demo — remove it.**

### Mechanical Timing
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth but not bouncy
- Speed: deliberate. 300-600ms for most transitions.
- Stagger: 100-150ms between items in a group

### Specific Animations

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Hero headline | Fade up, subtle | Page load | 600ms |
| Hero subtext | Fade up | Page load + 200ms | 500ms |
| Hero CTA | Fade up | Page load + 400ms | 400ms |
| Translation layer | Missing-roller conveyor animation | Scroll into view | 1200ms |
| Philosophy section | Gap-fill line drawing | Scroll into view | 1200ms |
| Role cards | Stagger fade up | Scroll into view | 400ms, 100ms stagger |
| Product cards | Stagger fade up | Scroll into view | 400ms, 100ms stagger |
| Card expand | Smooth height + fade content | Click | 300ms |
| AI explanation loop | Decision → carry forward | Scroll into view | 3000ms loop |
| Buttons | Scale 1.02, shadow lift | Hover | 200ms |
| Theme switch | Crossfade all colors | User click | 400ms |
| Nav | Backdrop blur | Scroll > 50px | 200ms |
| Background tool pulse | Subtle dot pulse | Continuous | 2000ms loop |

### The Philosophy Line Animation (Key Brand Piece)
```
[CAD] ──gap── [CAM] ──gap── [Post] ──gap── [Machine]
```
AI fills the gaps. Slow. Precise. Like a toolpath being drawn.

### The Translation Layer Animation (New)
Conveyor belt metaphor:
- Rollers spinning, but gaps between them
- Items (decisions, documents) fall through gaps
- Then: gaps fill, items flow smoothly
- Non-technical. Everyone gets it.

---

## Typography

- **Headings:** JetBrains Mono or IBM Plex Mono — monospace signals precision
- **Body:** Inter or DM Sans — clean, readable
- **Accents/Labels/Badges:** Same mono, smaller weight
- **Expand sections:** Body font, slightly muted color

---

## AI Image Prompts (Placeholders)

### Hero Background
```
Abstract macro photography of brushed aluminum surface with subtle
CNC tool marks. Warm amber side lighting. Shallow depth of field.
Dark, moody, industrial. No text, no people. 21:9 ultrawide.
```

### "Where Things Break Down" Section
```
Minimalist illustration of a conveyor belt system with visible gaps
between sections. Small geometric objects falling through the gaps.
Dark background, thin white/amber lines. Technical but not cluttered.
Wide format, suitable for section background.
```

### Flow Intelligence / Philosophy
```
Technical blueprint-style line drawing on dark navy background.
Four labeled boxes connected by thin lines with visible gaps.
Gaps glow subtly as if being filled. Minimalist, precise.
Engineering aesthetic. Seamless tileable.
```

### Role Cards — Machinists
```
Close-up of hands adjusting a CNC machine control panel.
Warm workshop lighting. Shallow depth of field on the buttons.
No face visible. Professional, real, not stock. Square format.
```

### Role Cards — Sales
```
Clean desk with a laptop showing manufacturing specs alongside
a phone. Warm, professional lighting. No people, no clutter.
Implies decision-making. Square format.
```

### Role Cards — Founders
```
Wide-angle view of a modern machine shop from the office window.
Glass partition between clean office and shop floor. Implies
oversight and connection. Warm neutral tones. Square format.
```

### Role Cards — Operations
```
Multiple machine status screens showing green/amber indicators.
Dark environment, screens are the light source. Implies monitoring
without being at every machine. Square format.
```

### Product Cards (Generic)
```
Clean, minimal dark-themed UI card mockup. Single metric or status
indicator. No full dashboard — just one focused element. Floating
on dark background with subtle ambient glow. Square format.
```

### Resources Page Header
```
Overhead shot of an organized workbench with neatly arranged tools,
blueprints, and a notebook. Warm lighting, shallow depth of field
on the notebook. Implies learning and preparation. No people.
16:9 wide format. Industrial but inviting.
```

### Background Texture (All Themes)
```
Subtle brushed metal texture. Very fine grain, barely visible.
Neutral gray tones. Seamless tileable pattern. 4K resolution.
```

---

## Spacing & Layout

- **Max content width:** 1200px
- **Section padding:** 100px-140px vertical (generous — let it breathe)
- **Spacing scale:** 4px base (4, 8, 16, 24, 32, 48, 64, 96, 128)
- **Card border-radius:** 8px (precision, not friendliness)
- **Card gap:** 24px
- **Line height:** 1.6 for body, 1.2 for headings

---

## What This Is NOT

- No hype gradients
- No glassmorphism
- No neon glows (except Night Shift, tastefully)
- No parallax-heavy scrolljacking
- No loading spinners with cute messages
- No confetti, particles, or floating elements
- No stock photography of any kind
- No too-many-tool-names above the fold
- No acronyms above the fold

================================================================================
File: FEATURES.md
--------------------------------------------------------------------------------
# WorkmanWise — Products, Services & Expansion

---

## Framing

We don't call them "products" or "features" on the site.
We call them **focused tools for real work.**

Everything lives under one umbrella concept:

### Flow Intelligence
Not a product name on screen. A **promise**:

> "Flow Intelligence ensures decisions move forward without friction."

Everything else is organized into **product families** beneath this.

---

## Product Families

### Family 1: Decision Capture & Memory
*Tools that turn conversations into workflow intelligence.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Decision Memory** | "Your best decisions stop getting lost between steps" | Decision made in workflow | Stored, retrievable decision context | All roles |
| **Setup Recall** | "Start where you left off, not from scratch" | New job with similar parameters | Pre-loaded setup from history | Machinists |
| **Constraint Library** | "What this machine can and can't do — always current" | Machine configuration change | Updated constraint set | CAM / Ops |

---

### Family 2: Meeting-to-Action Automation
*One-shot tools that act immediately after meetings.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Meeting Capture** | "Decisions from the meeting become tasks on the floor" | Post-meeting summary | Action items mapped to workflow steps | All roles |
| **Commitment Tracker** | "What was promised, to whom, by when" | Promise made in conversation | Tracked commitment with status | Sales / Ops |

---

### Family 3: Workflow Monitoring & Guardrails
*Quiet software that watches processes and flags drift.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Drift Detection** | "Know when a process is wandering before it fails" | Continuous background monitoring | Alert when deviation exceeds threshold | Ops / Quality |
| **Flow Health** | "Is this workflow still healthy?" | Periodic check | Simple health score + recommendations | Ops / Founders |

---

### Family 4: Promise Protection (Sales & Ops)
*Tools that prevent overpromising and misalignment.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Process Clarity** | "Know what's possible before you promise it" | Quote or commitment being drafted | Feasibility check against constraints | Sales |
| **Reality Check** | "Can the floor actually do this in that timeframe?" | Timeline proposed | Validated or flagged timeline | Sales / Ops |

---

### Family 5: Knowledge → System Conversion
*Turning experience into repeatable behavior.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Knowledge Capture** | "Turn experience into leverage" | Expert performs a task | Documented, repeatable process | All roles |
| **Tribal → Standard** | "What only Dave knows, everyone can access" | Knowledge gap identified | Codified procedure | Founders / Ops |

---

### Family 6: Process Health & Visibility
*"How's everything running?" tools.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Bottleneck Finder** | "Where's the line slowing down?" | Continuous monitoring | Visual bottleneck map | Ops / Founders |
| **Handoff Tracker** | "Did this actually get passed along correctly?" | Handoff event | Confirmation or flag | All roles |

---

### Family 7: Lightweight Automation
*No setup, no configuration, no dashboards.*

| Product | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Post Intelligence** | "Generate machine-ready instructions without guesswork" | Machine + job specified | Working post processor | Machinists / CAM |
| **Auto-Setup** | "Standard job? Standard setup. Automatically." | Recognized job type | Pre-configured setup sheet | Machinists |

---

### Family 8: Strategic Services (Non-Software)
*Human-in-the-loop. Audits, reviews, consulting.*

| Service | Plain explanation | Trigger | Output | For |
|---------|-----------------|---------|--------|-----|
| **Workflow Audit** | "We look at how work moves and find what's stuck" | Client engagement | Report + recommendations | All roles |
| **Process Design** | "We design how work should flow" | New line / new product | Documented workflow blueprint | Founders / Ops |
| **Integration Review** | "Do your tools actually talk to each other?" | System evaluation | Gap analysis + roadmap | Ops / IT |

---

### Family 9: Streamline Essentials (Lean/JIT-Inspired)
*Tools that mold operations into streamlined flows — without overhauls.*

Subtly inspired by lean manufacturing and Just-In-Time principles. No buzzwords upfront — lean/JIT references surface only in expand-on-click depth.

| Product | Plain explanation | Trigger | Output | For | Type |
|---------|-----------------|---------|--------|-----|------|
| **Waste Spotter** | "Find where time and material get wasted" | Continuous monitoring | Visual waste map with reduction suggestions | Ops / Founders | Background |
| **JIT Scheduler** | "Trigger tasks just-in-time to cut waste" | Inventory low / job stage reached | Auto-scheduled task at the right moment | Ops | Background |
| **Flow Molder** | "Reshape ops into lean streams" | Process review initiated | Streamlined workflow recommendation | Ops / Founders | Active |
| **Cycle Timer** | "Know exactly how long each step actually takes" | Job step completed | Accurate cycle time data + trend | Ops / Machinists | Background |
| **Changeover Coach** | "Reduce downtime between jobs" | Machine changeover detected | Optimized changeover sequence | Machinists / Ops | Active |
| **Inventory Pulse** | "Know what you have, what you need, when you need it" | Periodic / threshold trigger | Just-in-time inventory alerts | Ops | Background |
| **Rework Tracker** | "See what keeps coming back for fixes" | Rework event logged | Pattern analysis + root cause suggestions | Quality / Ops | Background |

---

## The Expansion Prompt

The following prompt can be used to generate additional products and services on demand. It's designed to produce ideas that are already organized, non-technical, and UI-ready.

```
You are a product strategist designing offerings for a manufacturing-focused
AI company whose core mission is:

"Keep decisions moving forward without friction."

The audience includes:
- Machinists
- Salespeople
- Founders
- Operations managers
- Entrepreneurs exposed to manufacturing but not deeply technical

Your task is to generate a LARGE, ORGANIZED CATALOG of products and services.

---

### CORE CONSTRAINTS (DO NOT BREAK)

1. Products must be explainable in ONE SENTENCE to a non-technical person.
2. Avoid technical jargon in names.
3. Favor "one-shot automation" over complex dashboards.
4. Favor background monitoring over active usage.
5. Many ideas should be triggered by:
   - Meetings
   - Conversations
   - Decisions being made verbally
6. Products should feel like:
   - Assistants
   - Guards
   - Memory
   - Glue between steps
7. Assume UX favors:
   - Small cards
   - Expand-on-click details
   - Image placeholders
   - Minimal copy per surface
8. AI is implied — never foregrounded.

---

### ORGANIZATION REQUIREMENT

Group ideas into clear PRODUCT FAMILIES.
Each family should feel like a category on a website.

For EACH PRODUCT FAMILY, provide:
- Family name (plain, confident, non-technical)
- One-sentence purpose
- 5–10 individual products or services inside it

For EACH PRODUCT / SERVICE, provide:
1. Name (short, human, no jargon)
2. One-sentence explanation (plain language)
3. Trigger (what causes it to run)
4. Output (what the user gets)
5. Who it's for (role-based)
6. UI representation (card, badge, alert, timeline, report, etc.)

---

### REQUIRED PRODUCT FAMILIES TO INCLUDE

You MUST include (but are not limited to):

1. Decision Capture & Memory
2. Meeting-to-Action Automation
3. Workflow Monitoring & Guardrails
4. Promise Protection (Sales & Ops)
5. Knowledge → System Conversion
6. Process Health & Visibility
7. Lightweight Automation
8. Strategic Services (Non-Software)

---

### UX / PRESENTATION LAYER

After generating the catalog, ALSO PROVIDE:

1. A proposed WEBSITE NAV STRUCTURE that can hold 50+ ideas without clutter
2. A CARD-BASED UI SYSTEM that allows:
   - Scanning
   - Grouping
   - Progressive disclosure
3. Suggestions for IMAGE PLACEHOLDERS that visually explain ideas without text
4. A way to show "this runs in the background" vs "you actively use this"

---

### FINAL STEP

End with:
- How this catalog avoids overwhelm
- Why this system feels simple despite its power
- How a non-technical visitor understands the value in under 30 seconds

---

IMPORTANT:
Do not optimize for cleverness.
Optimize for clarity, calm, inevitability, and trust.
```

---

## UI System for 50+ Products

### Card-Based Display

Each product is a **card**. Cards live in **family grids**.

**Card anatomy:**
```
┌─────────────────────────────┐
│ [icon/placeholder]          │
│                             │
│ Product Name                │
│ One-sentence explanation    │
│                             │
│ [badge: background/active]  │
│ [badge: role]               │
│                             │
│ [expand: "How this works"]  │
└─────────────────────────────┘
```

**Expanded card shows:**
- Technical explanation
- Trigger + output details
- Integration points
- Screenshot/mockup placeholder

### Visual Distinction: Background vs Active

| Type | Badge | Icon style | Card behavior |
|------|-------|-----------|---------------|
| Runs in background | "Always watching" | Subtle pulse dot | Muted card, quiet presence |
| You use directly | "Hands-on" | Solid icon | Standard card, clear CTA |
| Service (human) | "With our team" | People icon | Slightly different card style |

### Navigation for Scale

```
Tools & Services
├── By Family (default view)
│   ├── Decision & Memory
│   ├── Meeting Automation
│   ├── Monitoring & Guardrails
│   ├── Promise Protection
│   ├── Knowledge Systems
│   ├── Process Health
│   ├── Lightweight Automation
│   ├── Strategic Services
│   └── Streamline Essentials
├── By Role (filter view)
│   ├── For Machinists
│   ├── For Sales
│   ├── For Founders
│   └── For Operations
└── By Type (filter view)
    ├── Background
    ├── Active
    └── Services
```

---

## User Flows

### Flow 1: New Visitor → Believer
```
Land on hero ("handoff problems") → Feel understood →
Scroll to translation layer → See their role →
Click role card → See relevant products →
Click one product → Expand → Trust earned
```

### Flow 2: New Visitor → Contact
```
Land on hero → Scroll through philosophy →
Read "Built by people who've done the work" →
Click "Get started" → Contact form → Submit
```

### Flow 3: Returning → Explore Products
```
Return to site → Navigate to Tools & Services →
Filter by role → Browse relevant cards →
Expand interesting ones → Request demo or try free tool
```

---

## Open Questions

- Which products are real today vs planned vs conceptual?
- Which is the single "free gateway" tool?
- Backend/API status for any of these?
- Payment processing — Stripe?
- User accounts — same site or separate app?

================================================================================
File: MASTER-PROMPT.md
--------------------------------------------------------------------------------
# WorkmanWise — Master Prompt

> Central hub. All decisions finalized. Build prompt ready.

---

## What This Is

WorkmanWise is a **collective of machinists and designers** using AI to streamline CAM, posts, and shop workflows — safely, predictably, and without hype.

**Core belief:** Manufacturing isn't broken — it's fragmented. AI's job is to glue it back together.

**We sell flow, not tools.**

---

## The Three Big Ideas

### 1. Translation, Not Simplification
Every concept exists in two registers — plain language first, technical depth on demand. We never dumb down. We **layer**.

### 2. Ideology Before Product
The homepage sells the belief system first. Products come after trust is earned. Pain → Promise → Proof → Product.

### 3. Scale Without Clutter
50+ products organized into 9 families, displayed as cards with progressive disclosure. Scannable for anyone, deep for experts.

---

## Planning Documents

| Document | What It Covers | Status |
|----------|---------------|--------|
| [VISION.md](VISION.md) | Ideology, dual-language strategy, tone, AI reframing, messaging | Final |
| [PAGES.md](PAGES.md) | Single-scroll homepage (9 sections), Resources, Tools, About, Contact | Final |
| [DESIGN.md](DESIGN.md) | 5-theme system, card UI, article cards, animation philosophy, AI image prompts | Final |
| [TECH-STACK.md](TECH-STACK.md) | Next.js, Framer Motion, Tailwind CSS, Vercel, component architecture | Final |
| [FEATURES.md](FEATURES.md) | 9 product families, Streamline Essentials, role mapping, expansion prompt | Final |
| [PROGRESS.md](PROGRESS.md) | 10-phase build tracking | Active |

---

## All Decisions (Finalized)

- [x] Ideology-first brand (trust before features)
- [x] Single-scroll homepage (sections flow like manufacturing process)
- [x] 5-theme design mode switcher (Shop Floor, Blueprint, Clean Room, Raw Material, Night Shift)
- [x] Progressive disclosure everywhere (statement → outcome → expand)
- [x] Dual-language strategy (plain first, technical on demand)
- [x] AI is implied, never foregrounded ("experience-aware" not "AI-powered")
- [x] Animation: mechanical, deliberate, slow — never startup-demo energy
- [x] Fonts: JetBrains Mono (headings), Inter (body)
- [x] No stock photography — AI-generated placeholders with prompts
- [x] Calm CTAs — no urgency language
- [x] No ads at launch — forums, referrals, word of mouth
- [x] Card-based product display with family grouping
- [x] Role-based filtering (Machinists / Sales / Founders / Operations)
- [x] Background vs Active tool distinction
- [x] 9 product families under "Flow Intelligence" umbrella (including Streamline Essentials)
- [x] Flow visuals over CNC-specific visuals
- [x] Framework: Next.js (App Router + TypeScript)
- [x] Animation library: Framer Motion
- [x] Styling: Tailwind CSS (CSS custom properties for themes)
- [x] Deployment: Vercel
- [x] Free gateway tool: Post Intelligence
- [x] Resources page with lean/JIT articles (SEO play)
- [x] Nav: Home, Tools & Services, Resources, About, Contact
- [x] Lean/JIT principles subtly woven into messaging (never buzzword-first)

---

## The 5 Themes

1. **Shop Floor** (default) — Dark `#1a1a1a`, amber `#F59E0B`
2. **Blueprint** — Navy `#0A1628`, cyan `#67E8F9`
3. **Clean Room** — White `#FFFFFF`, steel blue `#2563EB`
4. **Raw Material** — Off-white `#FAF5F0`, rust `#B45309`
5. **Night Shift** — Black `#000000`, safety green `#22C55E`

---

## Homepage Flow

```
1. Hero: "Most manufacturing problems aren't machine problems. They're handoff problems."
2. Translation Layer: Where things break down (conveyor animation, non-technical)
3. Outcome Promise: "We keep decisions moving" + gap-fill animation + lean nod
4. Role Cards: Machinists / Sales / Founders / Operations
5. Product Cards: Focused tools for real work (progressive disclosure)
6. AI Explanation: "Experience-aware, not artificial" (earned, not leading)
7. Social Proof: Identity-based quotes
8. Collective Identity: "Built by people who've done the work"
9. Final CTA: "See what streamlined work feels like"
```

---

## The Build Prompt

Build a React website for WorkmanWise using **Next.js** (App Router, TypeScript), **Framer Motion** (animations), and **Tailwind CSS** (styling). Deploy-ready on **Vercel**. Prioritize performance (Lighthouse 90+), mobile-responsiveness, and accessibility (WCAG contrast).

### Site Structure
- **Homepage:** Single-scroll, 9 sections per PAGES.md
- **Tools & Services:** Card grid, 9 product families, filter by family/role/type
- **Resources:** Card grid, 5 lean/JIT articles with expand-for-content
- **About:** Collective identity, team placeholders, values
- **Contact:** Simple form, API route handler, success animation
- **Nav:** Fixed header, backdrop blur on scroll, ThemeSwitcher in corner

### Design System
- 5-theme switcher (CSS custom properties, localStorage, 400ms crossfade)
- Progressive disclosure on every card and section (3 layers)
- Mechanical animations (cubic-bezier(0.25, 0.1, 0.25, 1), 300-600ms)
- Card-based UI with background/active/service badges
- JetBrains Mono headings, Inter body
- Max-width 1200px, 4px spacing scale

### Key Animations
- Hero: staggered fade-up (600ms, 200ms delays)
- Translation: conveyor belt with missing rollers → gaps fill
- Philosophy: CAD → CAM → Post → Machine gap-fill line drawing
- AI Explanation: looping decision-carry-forward
- Cards: stagger fade-up on scroll, smooth expand/collapse
- Theme switch: 400ms crossfade
- Nav: backdrop blur on scroll > 50px
- `prefers-reduced-motion`: all animations disabled

### Products
9 families, 30+ products. Flow Intelligence umbrella. Free gateway: Post Intelligence. Streamline Essentials family for lean/JIT-inspired ops tools.

### Tone
Ideology-first. Calm. Declarative. No hype. AI implied, never foregrounded. Lean principles layered in, never leading.

---

## 10-Phase Build Plan

See [PROGRESS.md](PROGRESS.md) for current status.

| Phase | Description |
|-------|-------------|
| 1 | Project Scaffolding & Foundation |
| 2 | Theme System (5-Design Mode Switcher) |
| 3 | Layout Shell (Header, Footer, Container) |
| 4 | Reusable UI Components |
| 5 | Homepage Sections 1-4 (Pain → Promise) |
| 6 | Homepage Sections 5-9 (Products → CTA) |
| 7 | Product Data & Tools Page |
| 8 | Resources Page & Articles |
| 9 | About, Contact & Polish |
| 10 | Performance, SEO & Deployment |

================================================================================
File: PAGES.md
--------------------------------------------------------------------------------
# WorkmanWise — Page Structure

---

## Navigation

Fixed header with backdrop blur on scroll. Links:

```
Home | Tools & Services | Resources | About | Contact
```

ThemeSwitcher integrated into header (corner position).

---

## Format: Single-Scroll Homepage

Sections flow like a manufacturing process. Each section earns its place.
Progressive disclosure everywhere — statement → outcome → expand for depth.

---

## Homepage Mental Flow

The visitor's brain should travel this path:

```
Universal pain → Outcome promise → Conceptual solution →
Role-based relevance → One concrete product → Credibility → Calm CTA
```

---

## Section Flow

### 1. Hero — Universal Pain First

**Not** ideology. **Not** product. **Pain.**

The visitor should feel understood before they know what you sell.

**Headline:**
> **Most manufacturing problems aren't machine problems.**
> **They're handoff problems.**

**Subheadline:**
> *Design hands off to programming. Programming hands off to the floor. The floor adapts in real time. None of that intelligence flows back upstream.*

**CTA:** "See how it works" — calm, curious, single.

**Animation:** Minimal. Slow fade-up. Deliberate. No stock photos.

---

### 2. "Where Things Break Down" — The Translation Layer

This is the **Rosetta Stone**. Makes the rest of the site legible to everyone.

**Non-technical framing (what visitors see first):**
- Design hands off to programming
- Programming hands off to the floor
- The floor adapts in real time
- None of that intelligence flows back upstream

**Visual:** Conveyor belt with missing rollers. Or documents dropping between systems. **Flow visuals, not CNC visuals.**

**Expand-on-click reveals:**
- "Instructions your machines actually follow" → post processors
- "How decisions get reused (or don't)" → CAM strategies
- "The work no one should be doing by hand" → glue work between tools

---

### 3. Outcome Promise — "Flow Intelligence"

Not a product name on screen. An **umbrella concept**.

**Headline:**
> **We keep decisions moving.**

**Copy:**
> Manufacturing doesn't need disruption. It needs connection.
>
> CAD, CAM, posts, machines, and people already work — just not together.
>
> We remove the glue work. Decisions carry forward. Experience compounds.
>
> Inspired by lean principles, we mold operations into streamlined flows — without overhauls.

**Animation:** The signature line drawing —
```
[CAD] ──gap── [CAM] ──gap── [Post] ──gap── [Machine]
```
Gaps fill smoothly. Slow. Precise. Like a toolpath being drawn.

---

### 4. Role-Based Relevance — "Who This Is For"

**This is new and critical.** Non-machinists need to see themselves here.

Four cards. Each card:
- **Role label** (one word)
- **One-sentence pain** (plain language)
- **One-sentence outcome**
- **Expand for depth**

| Role | Pain | Outcome |
|------|------|---------|
| **Machinists** | "Every job starts from scratch" | "Your best setups become the default" |
| **Sales** | "I promised something the floor can't do" | "Know what's possible before you commit" |
| **Founders** | "Experience walks out the door every night" | "Turn knowledge into systems" |
| **Operations** | "I can't see where things are breaking" | "Lean monitoring — quiet until it matters, then precise" |

Each card links to relevant product family.

---

### 5. "What We Actually Do" — Focused Tools

Not "products". Not "features".

> **Focused tools for real work.**

**Card grid.** Each card:
1. **Statement** (1 line, plain)
2. **Outcome** (1 line)
3. **Optional expand** ("How this works")

Most users never expand. Experts always do.

**Cards:**
- **Post Intelligence** — *Generate machine-ready instructions without guesswork.*
- **Decision Memory** — *Your best decisions stop getting lost between steps.*
- **Process Clarity** — *Know what's possible before you promise it.*
- **Knowledge Capture** — *Turn experience into leverage.*

**Visual distinction:**
- Badge: "runs in background" vs "you use this directly"
- Subtle icon difference for passive vs active tools

---

### 6. The AI Explanation (Deeper, Earned)

Only appears after trust is established.

**Headline:**
> **Experience-aware, not artificial.**

**Copy:**
> Our systems don't make decisions. They carry them.
>
> They remember machines. They connect tools.
> They finish the work between steps.
>
> The authority stays with the person.

**Animation:** Looping — a human makes a decision, the system carries it forward across steps. No branching, no chaos. Reinforces "ally, not boss."

---

### 7. Social Proof — Experience-Based

Lead with **identity**, not logos.

> *"This feels like it was built by people who've stood at a machine."*
> *"It fixed the annoying stuff we've lived with for years."*
> *"I didn't have to touch the post once."*

Even 1-2 real quotes work. Placeholders for now.

---

### 8. The Collective Identity

**Headline:**
> **Built by people who've done the work.**

**Copy:**
> WorkmanWise isn't a software startup.
> It's a group of machinists and designers who got tired of friction.
>
> We use the same tools you do.
> We just removed the parts that waste your time.

Trust > features. Always.

---

### 9. Final CTA — Calm, Confident

No urgency language.

> **See what streamlined work feels like.**

Button: **Get started**

---

## Progressive Disclosure Pattern (Global Rule)

Every section, every card, every concept follows this:

```
Layer 1: Statement     → "Your decisions stop getting lost"
Layer 2: Outcome       → "Stored assumptions, machine constraints, setup logic"
Layer 3: Expand-click  → Full technical explanation, diagrams, specs
```

This keeps the site:
- **Scannable** for non-technical visitors
- **Credible** for experts
- **Space-efficient** for 50+ product ideas

---

## Secondary Pages

### Resources Page (SEO + Credibility)

Card grid of articles. Earns search traffic and builds trust with entrepreneurs bridging skill gaps.

**Articles (5 initial placeholders):**
1. "Streamlining Handoffs: A Lean Approach"
2. "JIT in Small Shops: Reducing Friction with Decision Memory"
3. "Handoff Optimization: Lessons from Lean Flows"
4. "Turning Tribal Knowledge into Repeatable Systems"
5. "Why Manufacturing Doesn't Need Disruption — It Needs Connection"

**Card format:** Title, 1-line snippet (plain language), expand for full article. Same progressive disclosure pattern as products.

**Tone:** Practical guides, not whitepapers. Subtle lean/JIT references. No academic language.

---

### Tools & Services Page

Full product catalog. Hero ("Focused tools for real work"), filter tabs (By Family / By Role / By Type), card grid with all 9 families.

Dynamic sub-pages per family: `/tools/[family]`

---

### About Page

"Built by people who've done the work." Our story, our approach, team placeholders (AI image prompts), values.

---

### Contact Page

Simple form: Name, Email, Company (optional), Message. Next.js API route handler. Success animation on submit. No noise.

---

## CTA Strategy

| Location | Text | Energy |
|----------|------|--------|
| Hero | "See how it works" | Calm, curious |
| Product cards | "Learn more" (expand) | Informational |
| Product spotlight | "Generate a post" | Specific, actionable |
| Final section | "Get started" | Confident, simple |

No "Try AI now". No "Get started free". No countdown timers.

================================================================================
File: PROGRESS.md
--------------------------------------------------------------------------------
# WorkmanWise — Build Progress

> Updated after each phase. See [MASTER-PROMPT.md](MASTER-PROMPT.md) for full project context.

---

## Phase Status

| Phase | Description | Status | Notes |
|-------|-------------|--------|-------|
| 0 | Planning Docs Finalization | Complete | All .md files updated with build prompt decisions |
| 1 | Project Scaffolding & Foundation | **Complete** | Next.js 16, Tailwind v4, Framer Motion, JetBrains Mono + Inter. Build passes. |
| 2 | Theme System (5-Design Switcher) | **Complete** | ThemeProvider + useTheme, ThemeSwitcher UI, localStorage persistence, SSR-safe |
| 3 | Layout Shell (Header, Footer) | **Complete** | Header with nav, backdrop blur on scroll >50px, Footer, Container, responsive mobile menu |
| 4 | Reusable UI Components | **Complete** | Button (3 variants), Card (expand/collapse), Badge (5 types), AnimateOnScroll (4 animations), SectionHeading, RoleCard |
| 5 | Homepage Sections 1-4 | **Complete** | HeroSection (staggered fade-up), TranslationSection (ConveyorAnimation), OutcomeSection (GapFillAnimation), RoleSection (4 roles) |
| 6 | Homepage Sections 5-9 | **Complete** | Added Products, AI Explanation, Social Proof, Collective Identity, and Final CTA sections to homepage |
| 7 | Product Data & Tools Page | **Complete** | Added shared product data (9 families, 37 tools), role/type/family filtering on `/tools`, and static `/tools/[family]` pages |
| 8 | Resources Page & Articles | **Complete** | Added 5 lean/JIT-style resources with expandable article cards and metadata on `/resources` |
| 9 | About, Contact & Polish | **Complete** | Added About page content, contact form with success animation, `/api/contact` handler, and responsive accessible layouts |
| 10 | Performance, SEO & Deployment | In Progress | Added metadata, sitemap, robots, and static generation checks. Lighthouse audit and Vercel deployment still pending. |

---

## Decisions Log

| Decision | Choice | Date |
|----------|--------|------|
| Framework | Next.js (App Router + TypeScript) | 2026-02-08 |
| Animation Library | Framer Motion | 2026-02-08 |
| Styling | Tailwind CSS | 2026-02-08 |
| Deployment | Vercel | 2026-02-08 |
| Fonts | JetBrains Mono (headings) + Inter (body) | 2026-02-08 |
| Free Gateway Tool | Post Intelligence | 2026-02-08 |
| Product Families | 9 (added Streamline Essentials) | 2026-02-08 |
| Resources Strategy | 5 lean/JIT articles for SEO | 2026-02-08 |

---

## Blockers & Notes

- Tailwind v4 uses `@import "tailwindcss"` + `@theme inline` instead of `tailwind.config.ts`
- Next.js 16 scaffolded (Turbopack enabled)
- All 5 theme CSS vars defined in `globals.css` via `data-theme` attribute
- Project structure: all code in root `c:\workmanwise` (no nested subfolder)
- Planning docs (.md files) coexist with Next.js project in root

================================================================================
File: README.md
--------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

================================================================================
File: TECH-STACK.md
--------------------------------------------------------------------------------
# WorkmanWise — Tech Stack (Finalized)

---

## Framework: Next.js

**Decision: FINAL**

- App Router with React Server Components
- Server-side rendering for SEO (critical for agency/resources pages)
- Built-in image optimization via `next/image`
- API routes for contact form (`app/api/contact/route.ts`)
- TypeScript throughout

---

## Animation Library: Framer Motion

**Decision: FINAL**

- Best React integration — declarative API
- Scroll-triggered animations via `useInView`
- `AnimatePresence` for card expand/collapse
- Layout animations for page transitions
- `motion.div` for all animated elements
- Mechanical easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`

---

## Styling: Tailwind CSS

**Decision: FINAL**

- Utility-first, fast iteration
- CSS custom properties for theme tokens (5 themes via `var(--color-*)`)
- Spacing scale: 4px base (4, 8, 16, 24, 32, 48, 64, 96, 128)
- Responsive breakpoints: 375px, 768px, 1024px, 1440px

---

## Typography

**Decision: FINAL**

- **Headings:** JetBrains Mono — monospace signals precision
- **Body:** Inter — clean, readable, neutral
- **Badges/Labels:** JetBrains Mono, smaller weight
- **Expand sections:** Inter, slightly muted color
- Installed via `@fontsource/jetbrains-mono` and `@fontsource/inter`

---

## Deployment: Vercel

**Decision: FINAL**

- Seamless Next.js integration
- Domain: workmanwise.com (to be connected)
- Auto-deploy from git repo
- Edge functions for API routes

---

## Component Architecture

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, ThemeProvider, metadata)
│   ├── page.tsx                # Homepage (single-scroll)
│   ├── resources/
│   │   └── page.tsx            # Resources/articles page
│   ├── tools/
│   │   ├── page.tsx            # Tools & Services (all families)
│   │   └── [family]/page.tsx   # Dynamic product family page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts    # Contact form handler
├── components/
│   ├── ui/                     # Button, Card, Badge, ThemeSwitcher, ArticleCard,
│   │                           # SectionHeading, RoleCard, ProductFilter
│   ├── sections/               # HeroSection, TranslationSection, OutcomeSection,
│   │                           # RoleSection, ProductSection, AIExplanationSection,
│   │                           # SocialProofSection, CollectiveSection, FinalCTASection
│   ├── layout/                 # Header, Footer, Container, ThemeProvider
│   └── animations/             # AnimateOnScroll, GapFillAnimation, ConveyorAnimation,
│                               # DecisionCarryAnimation
├── hooks/
│   ├── useTheme.ts
│   └── useInView.ts (if needed beyond Framer's)
├── lib/
│   ├── themes.ts               # 5 theme token definitions
│   ├── products.ts             # All 9 product families + products
│   ├── articles.ts             # 5 resource articles
│   └── constants.ts            # Site-wide constants
└── styles/
    └── globals.css             # CSS custom properties, base styles, theme vars
```

---

## Performance Targets

- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Bundle size: < 200KB initial JS
- `prefers-reduced-motion` respected — all animations disabled

---

## Dependencies

```json
{
  "next": "latest",
  "react": "latest",
  "react-dom": "latest",
  "framer-motion": "latest",
  "tailwindcss": "latest",
  "@fontsource/jetbrains-mono": "latest",
  "@fontsource/inter": "latest",
  "typescript": "latest"
}
```

No other dependencies unless explicitly needed. Keep it lean.

================================================================================
File: VISION.md
--------------------------------------------------------------------------------
# WorkmanWise — Ideology & Brand

---

## Core Belief (never stated verbatim on the site)

> **Manufacturing isn't broken — it's fragmented.**
> **AI's job is to glue it back together.**

We are not selling tools. We are selling **flow**.

---

## The Translation Problem (Why This Matters)

The project's original sin would be speaking in "operator mode" too early. Visitors feel the pain but don't label it technically. A salesperson doesn't think "post processor" — they think "why does the floor keep asking me questions I already answered?"

### The Fix: Layering, Not Dilution

We don't remove technical language. We **delay it**.

Every concept exists in **two registers**:

| Plain-language layer | Technical layer |
|---------------------|----------------|
| "We remove handoff friction" | "We standardize CAD → CAM → Post → Machine flow" |
| "Your best decisions stop getting lost" | "Decision memory persists across tools" |
| "Less tribal knowledge" | "Codified, repeatable workflows" |
| "Instructions your machines actually follow" | "Post processors" |
| "How decisions get reused (or don't)" | "CAM strategies" |

### UX Rule (enforced everywhere):
- **Headline** = plain
- **Subtext** = technical
- **Expand-on-click** = deep technical

This keeps the site legible to non-machinists and credible to experts.

---

## Reframing AI (Critical)

Non-technical users don't care *how*. They care: Does it remember? Does it adapt? Does it remove rework?

| Instead of | Use |
|-----------|-----|
| "AI-powered" | "Decision-carrying" |
| "AI-first" | "Experience-aware" |
| "Models" | "Systems" |
| "AI magic" | Never. |

AI stays **implied**, not foregrounded.

The phrase "AI-first doesn't mean AI in charge" still works — but only in the deeper explanation section, not the hero.

---

## Identity

WorkmanWise is a **collective of machinists and designers** who got tired of friction.

We use AI the same way we use fixtures and probes: carefully, deliberately, and for the job it's meant to do.

We are not a software startup. We are practitioners who build tools for practitioners.

---

## Who We Serve

### The Newcomer
- Has a design but has never bought a machine
- Needs guidance, not just software
- **Sees:** "Things break at handoffs" → immediately understands

### The Growing Shop
- Has machines, has experience, has gaps
- Doing things manually that shouldn't need to be manual
- **Sees:** "We keep decisions moving" → knows exactly what that means

### The Established Operation
- Complex workflows, experienced team
- Needs a partner who speaks the language
- **Sees:** Technical depth on expand-click → respects the precision

### The Salesperson / Entrepreneur
- Exposed to manufacturing but not deeply technical
- Cares about: Can I promise this? Will it get done right?
- **Sees:** "Promise Protection" and "Process Clarity" → directly addresses their anxiety

---

## Tone of Voice

- **Confident, not arrogant** — we know our stuff, but we don't lecture
- **Practical** — no buzzwords. Say what it does.
- **Declarative** — short sentences. No paragraphs where a line will do.
- **Layered** — plain first, technical beneath, deep on demand
- **Calm** — no urgency, no hype, no countdown timers

### What We Never Do
- Say "AI magic" or "revolutionary"
- Use cartoon robots or stock photos of people smiling at laptops
- Use startup cringe language ("disrupt", "10x", "unlock")
- Create artificial urgency
- Lead with technical jargon above the fold
- Assume the visitor knows where pain originates

---

## Core Messages

### Universal (non-technical, above the fold)
> "Most manufacturing problems aren't machine problems. They're handoff problems."

### Primary Brand
> "We keep decisions moving forward without friction."

### Variations
> "Your machines aren't the problem. The gaps between tools are."

> "We don't replace machinists. We remove the friction between their tools."

> "Modern manufacturing runs on experience — we just keep it moving."

---

## Brand Personality

Think:
- CNC control panel
- Old shop wisdom
- Modern clarity
- Conveyor belts, not dashboards
- Flow visuals, not CNC visuals everywhere

Not:
- Hype gradients
- "AI magic" language
- Startup demo energy
- Too many acronyms above the fold

---

## Ad Philosophy (When the Time Comes)

Early traction comes from forums, referrals, word of mouth, credibility. No ads at launch.

When ads run, they look like **manifestos**, not pitches:

> "AI shouldn't replace machinists. It should remove the glue work."

> "Your machines aren't the problem. The gaps between tools are."

> "Most manufacturing problems aren't machine problems. They're handoff problems."

Statements, not sales.

================================================================================
File: src/app/about/page.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/app/api/contact/route.ts
--------------------------------------------------------------------------------
import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function asOptionalString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = asOptionalString(payload.name);
    const email = asOptionalString(payload.email);
    const company = asOptionalString(payload.company);
    const message = asOptionalString(payload.message);

    if (!isNonEmptyString(name)) {
      return NextResponse.json({ message: 'Name is required.' }, { status: 400 });
    }

    if (!isNonEmptyString(email) || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'A valid email is required.' },
        { status: 400 },
      );
    }

    if (!isNonEmptyString(message)) {
      return NextResponse.json({ message: 'Message is required.' }, { status: 400 });
    }

    if (name.length > 120 || email.length > 320 || company.length > 160) {
      return NextResponse.json(
        { message: 'One or more fields are too long.' },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: 'Message is too long.' },
        { status: 400 },
      );
    }

    console.info('[contact] received', {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      messageLength: message.length,
    });

    return NextResponse.json({
      ok: true,
      message: 'Thanks. We received your message and will follow up shortly.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Invalid request payload.' },
      { status: 400 },
    );
  }
}

================================================================================
File: src/app/contact/page.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/app/globals.css
--------------------------------------------------------------------------------
@import "tailwindcss";

/* ============================================
   WorkmanWise Theme System
   5 themes via CSS custom properties
   ============================================ */

/* Default: Shop Floor */
:root {
  --color-bg: #1a1a1a;
  --color-surface: #242424;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-accent: #F59E0B;
  --color-accent-hover: #D97706;
  --color-border: #333333;
  --color-card-bg: #1f1f1f;
}

[data-theme="blueprint"] {
  --color-bg: #0A1628;
  --color-surface: #111D32;
  --color-text-primary: #E2E8F0;
  --color-text-secondary: #8BA2C4;
  --color-accent: #67E8F9;
  --color-accent-hover: #22D3EE;
  --color-border: #1E3A5F;
  --color-card-bg: #0F2340;
}

[data-theme="clean-room"] {
  --color-bg: #FFFFFF;
  --color-surface: #F8FAFC;
  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;
  --color-accent: #2563EB;
  --color-accent-hover: #1D4ED8;
  --color-border: #E2E8F0;
  --color-card-bg: #F1F5F9;
}

[data-theme="raw-material"] {
  --color-bg: #FAF5F0;
  --color-surface: #F5EDE4;
  --color-text-primary: #1C1917;
  --color-text-secondary: #78716C;
  --color-accent: #B45309;
  --color-accent-hover: #92400E;
  --color-border: #E7DDD0;
  --color-card-bg: #F0E8DE;
}

[data-theme="night-shift"] {
  --color-bg: #000000;
  --color-surface: #0A0A0A;
  --color-text-primary: #E2E8F0;
  --color-text-secondary: #6B7280;
  --color-accent: #22C55E;
  --color-accent-hover: #16A34A;
  --color-border: #1A1A1A;
  --color-card-bg: #0D0D0D;
}

/* ============================================
   Tailwind v4 Theme Inline — maps CSS vars
   to Tailwind utility classes
   ============================================ */

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-text-primary: var(--color-text-primary);
  --color-text-secondary: var(--color-text-secondary);
  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-border: var(--color-border);
  --color-card-bg: var(--color-card-bg);

  --font-heading: 'JetBrains Mono', monospace;
  --font-body: 'Inter', sans-serif;
}

/* ============================================
   Base Styles
   ============================================ */

* {
  transition-property: background-color, border-color, color;
  transition-duration: 400ms;
  transition-timing-function: ease;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
}

/* Disable all animations for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   Scrollbar (subtle, themed)
   ============================================ */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-secondary);
}

================================================================================
File: src/app/layout.tsx
--------------------------------------------------------------------------------
import type { Metadata, Viewport } from 'next';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Keep Decisions Moving`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Keep Decisions Moving`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Keep Decisions Moving`,
    description: SITE_TAGLINE,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

================================================================================
File: src/app/not-found.tsx
--------------------------------------------------------------------------------
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="py-28 bg-bg">
      <Container className="text-center">
        <p className="text-xs font-mono uppercase tracking-wide text-accent mb-3">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
          This page is not in the workflow.
        </h1>
        <p className="mt-4 text-text-secondary">
          Return to the main flow and continue from there.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent-hover transition-colors"
        >
          Go to homepage
        </Link>
      </Container>
    </section>
  );
}

================================================================================
File: src/app/page.tsx
--------------------------------------------------------------------------------
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TranslationSection } from '@/components/sections/TranslationSection';
import { OutcomeSection } from '@/components/sections/OutcomeSection';
import { RoleSection } from '@/components/sections/RoleSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { AIExplanationSection } from '@/components/sections/AIExplanationSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { CollectiveSection } from '@/components/sections/CollectiveSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TranslationSection />
      <OutcomeSection />
      <RoleSection />
      <ProductSection />
      <AIExplanationSection />
      <SocialProofSection />
      <CollectiveSection />
      <FinalCTASection />
    </>
  );
}

================================================================================
File: src/app/resources/page.tsx
--------------------------------------------------------------------------------
import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { resourceArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Resources | WorkmanWise',
  description:
    'Lean and JIT informed resources for reducing manufacturing handoff friction.',
};

export default function ResourcesPage() {
  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Practical resources for smoother handoffs."
          subtext="Short reads for teams improving flow without heavy overhauls."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resourceArticles.map((article, index) => (
            <AnimateOnScroll key={article.id} delay={index * 0.06} animation="fade-up">
              <ArticleCard article={article} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

================================================================================
File: src/app/robots.ts
--------------------------------------------------------------------------------
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

================================================================================
File: src/app/sitemap.ts
--------------------------------------------------------------------------------
import type { MetadataRoute } from 'next';
import { getFamilySlugs } from '@/lib/products';
import { SITE_URL } from '@/lib/constants';

const baseDate = new Date('2026-02-09');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/tools', '/resources', '/about', '/contact'];
  const familyRoutes = getFamilySlugs().map((slug) => `/tools/${slug}`);

  return [...staticRoutes, ...familyRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: baseDate,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}

================================================================================
File: src/app/tools/page.tsx
--------------------------------------------------------------------------------
import type { Metadata } from 'next';
import { ToolsCatalog } from '@/components/tools/ToolsCatalog';

export const metadata: Metadata = {
  title: 'Tools & Services | WorkmanWise',
  description:
    'Focused tools for real work. Browse product families by family, role, or type.',
};

export default function ToolsPage() {
  return <ToolsCatalog />;
}

================================================================================
File: src/app/tools/[family]/page.tsx
--------------------------------------------------------------------------------
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/ui/ProductCard';
import {
  getFamilyBySlug,
  getFamilySlugs,
  getProductsByFamily,
  type FamilySlug,
} from '@/lib/products';

interface FamilyPageProps {
  params: {
    family: string;
  };
}

export function generateStaticParams() {
  return getFamilySlugs().map((family) => ({ family }));
}

export function generateMetadata({ params }: FamilyPageProps): Metadata {
  const family = getFamilyBySlug(params.family);

  if (!family) {
    return {
      title: 'Tools | WorkmanWise',
    };
  }

  return {
    title: `${family.name} | WorkmanWise`,
    description: family.purpose,
  };
}

export default function FamilyPage({ params }: FamilyPageProps) {
  const family = getFamilyBySlug(params.family);

  if (!family) {
    notFound();
  }

  const familyProducts = getProductsByFamily(family.slug as FamilySlug);

  return (
    <section className="py-24 bg-bg">
      <Container>
        <Link
          href="/tools"
          className="inline-block text-sm font-mono text-accent hover:text-accent-hover transition-colors"
        >
          Back to all tools
        </Link>

        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wide text-accent mb-2">
            Product family
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            {family.name}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{family.purpose}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {familyProducts.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.05} animation="fade-up">
              <ProductCard product={product} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

================================================================================
File: src/components/animations/AnimateOnScroll.tsx
--------------------------------------------------------------------------------
'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ANIMATION } from '@/lib/constants';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationType, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = ANIMATION.duration.slow,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });
  const variant = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: ANIMATION.easing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

================================================================================
File: src/components/animations/ConveyorAnimation.tsx
--------------------------------------------------------------------------------
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ConveyorAnimation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <svg
        viewBox="0 0 800 200"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Conveyor belt sections */}
        <g>
          {/* Section 1 */}
          <rect x="50" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="70" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="150" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 1 with missing rollers */}
          <motion.line
            x1="170"
            y1="100"
            x2="230"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Section 2 */}
          <rect x="230" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="250" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="330" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 2 */}
          <motion.line
            x1="350"
            y1="100"
            x2="410"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Section 3 */}
          <rect x="410" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="430" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="510" cy="100" r="8" fill="var(--color-border)" />

          {/* Gap 3 */}
          <motion.line
            x1="530"
            y1="100"
            x2="590"
            y2="100"
            stroke="var(--color-border)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          />

          {/* Section 4 */}
          <rect x="590" y="80" width="120" height="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <circle cx="610" cy="100" r="8" fill="var(--color-border)" />
          <circle cx="690" cy="100" r="8" fill="var(--color-border)" />
        </g>

        {/* Falling items (decisions/documents) */}
        <motion.circle
          cx="200"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
        />
        <motion.circle
          cx="380"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1.3, ease: 'easeIn' }}
        />
        <motion.circle
          cx="560"
          cy="70"
          r="6"
          fill="var(--color-accent)"
          initial={{ y: -20, opacity: 0 }}
          animate={animate ? { y: 50, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 1.6, ease: 'easeIn' }}
        />

        {/* Filling gaps - solution */}
        <motion.line
          x1="170"
          y1="100"
          x2="230"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        <motion.line
          x1="350"
          y1="100"
          x2="410"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
        <motion.line
          x1="530"
          y1="100"
          x2="590"
          y2="100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.8 }}
        />
      </svg>
    </div>
  );
}

================================================================================
File: src/components/animations/DecisionCarryAnimation.tsx
--------------------------------------------------------------------------------
'use client';

import { motion } from 'framer-motion';

export function DecisionCarryAnimation() {
  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      <svg
        viewBox="0 0 800 300"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Human makes decision */}
        <g>
          <circle cx="100" cy="150" r="40" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
          <text x="100" y="155" className="fill-text-primary text-xs font-mono" textAnchor="middle">
            Person
          </text>
          <motion.circle
            cx="100"
            cy="150"
            r="50"
            stroke="var(--color-accent)"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Decision flows forward */}
        <motion.path
          d="M 140 150 L 250 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 1 */}
        <g>
          <rect x="250" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="300" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            CAM
          </text>
          <text x="300" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        <motion.path
          d="M 350 150 L 450 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 2 */}
        <g>
          <rect x="450" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="500" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            Post
          </text>
          <text x="500" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        <motion.path
          d="M 550 150 L 650 150"
          stroke="var(--color-accent)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* System carries it step 3 */}
        <g>
          <rect x="650" y="120" width="100" height="60" fill="var(--color-card-bg)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
          <text x="700" y="145" className="fill-text-secondary text-xs font-mono" textAnchor="middle">
            Machine
          </text>
          <text x="700" y="160" className="fill-accent text-xs font-mono" textAnchor="middle">
            Applied
          </text>
        </g>

        {/* Authority label */}
        <text x="100" y="240" className="fill-text-secondary text-xs italic" textAnchor="middle">
          Authority stays here
        </text>
        <motion.line
          x1="100"
          y1="230"
          x2="100"
          y2="190"
          stroke="var(--color-text-secondary)"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
      </svg>
    </div>
  );
}

================================================================================
File: src/components/animations/GapFillAnimation.tsx
--------------------------------------------------------------------------------
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function GapFillAnimation() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <svg
        viewBox="0 0 1000 180"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Labels */}
        <text x="90" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          CAD
        </text>
        <text x="340" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          CAM
        </text>
        <text x="590" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          Post
        </text>
        <text x="840" y="40" className="fill-text-primary text-sm font-mono" textAnchor="middle">
          Machine
        </text>

        {/* Boxes */}
        <rect x="40" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="290" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="540" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />
        <rect x="790" y="60" width="100" height="80" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" rx="4" />

        {/* Gap lines (dashed) */}
        <motion.line
          x1="140"
          y1="100"
          x2="290"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.line
          x1="390"
          y1="100"
          x2="540"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.line
          x1="640"
          y1="100"
          x2="790"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Filled gaps (AI solution) - deliberate mechanical drawing */}
        <motion.path
          d="M 140 100 L 290 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.path
          d="M 390 100 L 540 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.path
          d="M 640 100 L 790 100"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* "Flow" label fades in at the end */}
        <motion.text
          x="500"
          y="165"
          className="fill-accent text-xs font-mono uppercase tracking-wider"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          Flow Intelligence
        </motion.text>
      </svg>
    </div>
  );
}

================================================================================
File: src/components/contact/ContactForm.tsx
--------------------------------------------------------------------------------
'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setSuccessMessage(result.message || 'Message sent.');
      setForm(initialState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to send your message.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card-bg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="block text-sm font-medium text-text-primary">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={(event) =>
            setForm((current) => ({ ...current, company: event.target.value }))
          }
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="mt-2 w-full resize-y rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-colors
          ${
            isSubmitting
              ? 'cursor-not-allowed bg-border text-text-secondary'
              : 'bg-accent text-bg hover:bg-accent-hover'
          }
        `}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-md border border-accent/30 bg-accent/10 p-3 text-sm text-text-primary"
            aria-live="polite"
          >
            <div className="flex items-start gap-2">
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-0.5 shrink-0 text-accent"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <motion.path
                  d="M8 12.5L10.5 15L16 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                />
              </motion.svg>
              <p>{successMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200"
            aria-live="polite"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

================================================================================
File: src/components/layout/Container.tsx
--------------------------------------------------------------------------------
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

================================================================================
File: src/components/layout/Footer.tsx
--------------------------------------------------------------------------------
import { Container } from './Container';
import { SITE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 mt-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-text-primary font-medium mb-1">
              {SITE_NAME}
            </p>
            <p className="text-xs text-text-secondary max-w-md">
              Built by people who&apos;ve done the work. We use AI the same way
              we use fixtures and probes: carefully, deliberately, and for the
              job it&apos;s meant to do.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-text-secondary">
              &copy; {new Date().getFullYear()} {SITE_NAME}. Keep decisions
              moving.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

================================================================================
File: src/components/layout/Header.tsx
--------------------------------------------------------------------------------
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { Container } from './Container';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={false}
      animate={{
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        backgroundColor: scrolled
          ? 'var(--color-bg-alpha, rgba(26, 26, 26, 0.8))'
          : 'transparent',
        borderBottomColor: scrolled
          ? 'var(--color-border)'
          : 'transparent',
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 border-b"
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold font-mono text-text-primary hover:text-accent transition-colors"
          >
            {SITE_NAME}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-sm font-medium transition-colors relative
                    ${
                      isActive
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-border mt-2"
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      text-base font-medium transition-colors
                      ${
                        isActive
                          ? 'text-accent'
                          : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}

================================================================================
File: src/components/layout/ThemeProvider.tsx
--------------------------------------------------------------------------------
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeName, DEFAULT_THEME, themes } from '@/lib/themes';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: typeof themes;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_THEME;
    }

    const stored = window.localStorage.getItem(
      'workmanwise-theme',
    ) as ThemeName | null;

    return stored && themes[stored] ? stored : DEFAULT_THEME;
  });
  const [mounted, setMounted] = useState(false);

  // Mark mounted after hydration.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Update document theme and localStorage
  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('workmanwise-theme', newTheme);
  };

  // Apply theme on changes (after mount)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

================================================================================
File: src/components/sections/AIExplanationSection.tsx
--------------------------------------------------------------------------------
'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { DecisionCarryAnimation } from '@/components/animations/DecisionCarryAnimation';

export function AIExplanationSection() {
  return (
    <section className="py-32 bg-surface">
      <Container>
        <SectionHeading headline="Experience-aware, not artificial." />

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <AnimateOnScroll delay={0.1}>
            <p className="text-text-secondary text-lg">
              Our systems don&apos;t make decisions. They carry them.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-text-secondary text-lg">
              They remember machines. They connect tools. They finish the work
              between steps.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-text-primary text-xl font-medium">
              The authority stays with the person.
            </p>
          </AnimateOnScroll>
        </div>

        <DecisionCarryAnimation />
      </Container>
    </section>
  );
}

================================================================================
File: src/components/sections/CollectiveSection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/FinalCTASection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/HeroSection.tsx
--------------------------------------------------------------------------------
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ANIMATION } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background subtle texture - placeholder for AI image */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg opacity-50" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ANIMATION.easing }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
          >
            Most manufacturing problems aren&apos;t machine problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: ANIMATION.easing }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8"
          >
            They&apos;re handoff problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: ANIMATION.easing }}
          >
            <Button href="#how-it-works">See how it works</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

================================================================================
File: src/components/sections/OutcomeSection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/ProductSection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/RoleSection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/SocialProofSection.tsx
--------------------------------------------------------------------------------
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

================================================================================
File: src/components/sections/TranslationSection.tsx
--------------------------------------------------------------------------------
'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { ConveyorAnimation } from '@/components/animations/ConveyorAnimation';

export function TranslationSection() {
  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <Container>
        <SectionHeading headline="Where Things Break Down" />

        <ConveyorAnimation />

        <div className="max-w-3xl mx-auto mt-16 space-y-6">
          <AnimateOnScroll delay={0.1}>
            <p className="text-text-secondary text-lg">
              Design hands off to programming.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-text-secondary text-lg">
              Programming hands off to the floor.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-text-secondary text-lg">
              The floor adapts in real time.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <p className="text-text-primary text-xl font-medium">
              None of that intelligence flows back upstream.
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

================================================================================
File: src/components/tools/ToolsCatalog.tsx
--------------------------------------------------------------------------------
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import {
  productFamilies,
  products,
  roleOptions,
  toolTypes,
  type Role,
  type ToolType,
} from '@/lib/products';

type ViewMode = 'family' | 'role' | 'type';
type RoleFilter = Role | 'All roles';
type TypeFilter = ToolType | 'All types';

const viewModes: Array<{ key: ViewMode; label: string }> = [
  { key: 'family', label: 'By Family' },
  { key: 'role', label: 'By Role' },
  { key: 'type', label: 'By Type' },
];

const typeLabels: Record<ToolType, string> = {
  background: 'Always watching',
  active: 'Hands-on',
  service: 'With our team',
};

export function ToolsCatalog() {
  const [viewMode, setViewMode] = useState<ViewMode>('family');
  const [selectedRole, setSelectedRole] = useState<RoleFilter>('All roles');
  const [selectedType, setSelectedType] = useState<TypeFilter>('All types');

  const familyIndex = useMemo(() => {
    return new Map(productFamilies.map((family, index) => [family.slug, index]));
  }, []);

  const familyNameBySlug = useMemo(() => {
    return new Map(productFamilies.map((family) => [family.slug, family.name]));
  }, []);

  const roleFilteredProducts = useMemo(() => {
    const filtered =
      selectedRole === 'All roles'
        ? products
        : products.filter((product) => product.roles.includes(selectedRole));

    return [...filtered].sort((a, b) => {
      const familyDiff =
        (familyIndex.get(a.familySlug) ?? 0) - (familyIndex.get(b.familySlug) ?? 0);
      return familyDiff !== 0 ? familyDiff : a.name.localeCompare(b.name);
    });
  }, [selectedRole, familyIndex]);

  const typeFilteredProducts = useMemo(() => {
    const filtered =
      selectedType === 'All types'
        ? products
        : products.filter((product) => product.type === selectedType);

    return [...filtered].sort((a, b) => {
      const familyDiff =
        (familyIndex.get(a.familySlug) ?? 0) - (familyIndex.get(b.familySlug) ?? 0);
      return familyDiff !== 0 ? familyDiff : a.name.localeCompare(b.name);
    });
  }, [selectedType, familyIndex]);

  return (
    <section className="py-24 bg-bg">
      <Container>
        <SectionHeading
          headline="Focused tools for real work."
          subtext="Browse 9 families, 37 tools, and services built to keep decisions moving."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {viewModes.map((mode) => {
            const isActive = viewMode === mode.key;

            return (
              <button
                key={mode.key}
                type="button"
                onClick={() => setViewMode(mode.key)}
                className={`
                  rounded-md border px-4 py-2 text-sm font-mono transition-colors
                  ${
                    isActive
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        {viewMode === 'family' && (
          <div className="space-y-16">
            {productFamilies.map((family, familyIndexValue) => {
              const familyProducts = products.filter(
                (product) => product.familySlug === family.slug,
              );

              return (
                <section key={family.slug} id={family.slug} className="scroll-mt-24">
                  <AnimateOnScroll delay={familyIndexValue * 0.05} animation="fade-up">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wide text-accent mb-2">
                          {familyProducts.length} tools
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                          {family.name}
                        </h2>
                        <p className="mt-2 text-text-secondary max-w-2xl">
                          {family.purpose}
                        </p>
                      </div>

                      <Link
                        href={`/tools/${family.slug}`}
                        className="text-sm font-mono text-accent hover:text-accent-hover transition-colors"
                      >
                        Open family page
                      </Link>
                    </div>
                  </AnimateOnScroll>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {familyProducts.map((product, index) => (
                      <AnimateOnScroll
                        key={product.id}
                        delay={index * 0.05}
                        animation="fade-up"
                      >
                        <ProductCard product={product} />
                      </AnimateOnScroll>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {viewMode === 'role' && (
          <>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {(['All roles', ...roleOptions] as RoleFilter[]).map((role) => {
                const isActive = selectedRole === role;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`
                      rounded-md border px-3 py-1.5 text-xs font-mono transition-colors
                      ${
                        isActive
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {role}
                  </button>
                );
              })}
            </div>

            <p className="mb-6 text-center text-sm text-text-secondary">
              {roleFilteredProducts.length} tools match this role filter.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roleFilteredProducts.map((product, index) => (
                <AnimateOnScroll key={product.id} delay={index * 0.04} animation="fade-up">
                  <div className="space-y-2">
                    <Link
                      href={`/tools/${product.familySlug}`}
                      className="inline-block text-xs font-mono uppercase tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      {familyNameBySlug.get(product.familySlug)}
                    </Link>
                    <ProductCard product={product} />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </>
        )}

        {viewMode === 'type' && (
          <>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {(['All types', ...toolTypes] as TypeFilter[]).map((type) => {
                const isActive = selectedType === type;
                const label = type === 'All types' ? type : typeLabels[type];

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`
                      rounded-md border px-3 py-1.5 text-xs font-mono transition-colors
                      ${
                        isActive
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <p className="mb-6 text-center text-sm text-text-secondary">
              {typeFilteredProducts.length} tools match this type filter.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {typeFilteredProducts.map((product, index) => (
                <AnimateOnScroll key={product.id} delay={index * 0.04} animation="fade-up">
                  <div className="space-y-2">
                    <Link
                      href={`/tools/${product.familySlug}`}
                      className="inline-block text-xs font-mono uppercase tracking-wide text-accent hover:text-accent-hover transition-colors"
                    >
                      {familyNameBySlug.get(product.familySlug)}
                    </Link>
                    <ProductCard product={product} />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

================================================================================
File: src/components/ui/ArticleCard.tsx
--------------------------------------------------------------------------------
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ResourceArticle } from '@/lib/articles';

interface ArticleCardProps {
  article: ResourceArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="rounded-lg border border-border bg-card-bg p-6"
      whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold text-text-primary leading-tight">
        {article.title}
      </h3>
      <p className="mt-3 text-sm text-text-secondary">{article.snippet}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-secondary">
          {article.category}
        </span>
        <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-secondary">
          {article.published}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-4 text-xs font-mono text-accent hover:text-accent-hover transition-colors"
      >
        {expanded ? '- Less' : '+ Read more'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-border pt-4 space-y-3">
              {article.content.map((paragraph) => (
                <p key={paragraph} className="text-sm text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

================================================================================
File: src/components/ui/Badge.tsx
--------------------------------------------------------------------------------
type BadgeVariant = 'background' | 'active' | 'service' | 'role' | 'lean';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

const variantConfig: Record<BadgeVariant, { defaultLabel: string; styles: string }> = {
  background: {
    defaultLabel: 'Always watching',
    styles: 'bg-accent/10 text-accent border-accent/20',
  },
  active: {
    defaultLabel: 'Hands-on',
    styles: 'bg-text-primary/10 text-text-primary border-text-primary/20',
  },
  service: {
    defaultLabel: 'With our team',
    styles: 'bg-accent/10 text-accent border-accent/20',
  },
  role: {
    defaultLabel: '',
    styles: 'bg-surface text-text-secondary border-border',
  },
  lean: {
    defaultLabel: 'Lean-Inspired',
    styles: 'bg-accent/5 text-text-secondary border-border',
  },
};

export function Badge({ variant, label, className = '' }: BadgeProps) {
  const config = variantConfig[variant];
  const displayLabel = label || config.defaultLabel;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
        text-xs font-mono border
        ${config.styles}
        ${className}
      `}
    >
      {variant === 'background' && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      )}
      {variant === 'service' && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )}
      {displayLabel}
    </span>
  );
}

================================================================================
File: src/components/ui/Button.tsx
--------------------------------------------------------------------------------
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover font-medium',
  secondary:
    'border border-border text-text-primary hover:border-accent hover:text-accent',
  ghost:
    'text-text-secondary hover:text-text-primary',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg text-sm font-medium
    transition-colors duration-200
    ${variantStyles[variant]}
    ${className}
  `;

  const motionProps = {
    whileHover: { scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if ('href' in props && props.href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={props.href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      type={type}
      className={baseStyles}
    >
      {children}
    </motion.button>
  );
}

================================================================================
File: src/components/ui/Card.tsx
--------------------------------------------------------------------------------
'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './Badge';

export interface CardProps {
  title: string;
  description: string;
  type?: 'background' | 'active' | 'service';
  roles?: string[];
  leanInspired?: boolean;
  expandedContent?: ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  type = 'active',
  roles = [],
  leanInspired = false,
  expandedContent,
  className = '',
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`
        bg-card-bg border border-border rounded-lg p-6
        transition-colors duration-400
        ${expandedContent ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={() => expandedContent && setExpanded(!expanded)}
      whileHover={expandedContent ? { y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Collapsed content — always visible */}
      <h3 className="text-lg font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary mb-4">
        {description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant={type} />
        {leanInspired && <Badge variant="lean" />}
        {roles.map((role) => (
          <Badge key={role} variant="role" label={role} />
        ))}
      </div>

      {/* Expand trigger */}
      {expandedContent && (
        <button
          className="text-xs text-accent hover:text-accent-hover font-mono transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? '— Less' : '+ How this works'}
        </button>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

================================================================================
File: src/components/ui/ProductCard.tsx
--------------------------------------------------------------------------------
'use client';

import { Card } from '@/components/ui/Card';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Card
      title={product.name}
      description={product.statement}
      type={product.type}
      roles={product.roles}
      leanInspired={product.leanInspired}
      className={className}
      expandedContent={
        <>
          <p className="text-sm text-text-primary mb-3">{product.outcome}</p>
          <p className="text-sm text-text-secondary mb-2">
            <strong>Trigger:</strong> {product.trigger}
          </p>
          <p className="text-sm text-text-secondary mb-2">
            <strong>Output:</strong> {product.output}
          </p>
          {product.gateway && (
            <p className="text-sm text-accent mb-2">
              <strong>Free gateway tool.</strong>
            </p>
          )}
          <p className="text-sm text-text-secondary">{product.technical}</p>
        </>
      }
    />
  );
}

================================================================================
File: src/components/ui/RoleCard.tsx
--------------------------------------------------------------------------------
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoleCardProps {
  role: string;
  pain: string;
  outcome: string;
  expandedContent?: string;
  className?: string;
}

export function RoleCard({
  role,
  pain,
  outcome,
  expandedContent,
  className = '',
}: RoleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`
        bg-card-bg border border-border rounded-lg p-6
        cursor-pointer
        ${className}
      `}
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Role label */}
      <span className="text-xs font-mono text-accent uppercase tracking-wider">
        {role}
      </span>

      {/* Pain point */}
      <p className="text-text-secondary text-sm mt-3 italic">
        &ldquo;{pain}&rdquo;
      </p>

      {/* Outcome */}
      <p className="text-text-primary text-sm font-medium mt-3">
        {outcome}
      </p>

      {/* Expanded depth */}
      <AnimatePresence>
        {expanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-xs mt-4 pt-4 border-t border-border">
              {expandedContent}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

================================================================================
File: src/components/ui/SectionHeading.tsx
--------------------------------------------------------------------------------
'use client';

import { AnimateOnScroll } from '@/components/animations/AnimateOnScroll';

interface SectionHeadingProps {
  headline: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  headline,
  subtext,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <AnimateOnScroll animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {headline}
        </h2>
      </AnimateOnScroll>
      {subtext && (
        <AnimateOnScroll animation="fade-up" delay={0.15}>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            {subtext}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}

================================================================================
File: src/components/ui/ThemeSwitcher.tsx
--------------------------------------------------------------------------------
'use client';

import { useTheme } from '@/components/layout/ThemeProvider';
import { themeOrder } from '@/lib/themes';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme, themes, mounted } = useTheme();

  // Don't render until mounted (avoid hydration mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2 p-3 rounded-lg bg-card-bg border border-border shadow-lg"
      >
        <div className="text-xs font-mono text-text-secondary mb-1 px-1">
          Theme
        </div>
        <div className="flex flex-col gap-1.5">
          {themeOrder.map((themeName) => {
            const themeData = themes[themeName];
            const isActive = theme === themeName;

            return (
              <motion.button
                key={themeName}
                onClick={() => setTheme(themeName)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative w-8 h-8 rounded-md transition-all duration-200
                  ${isActive ? 'ring-2 ring-accent ring-offset-2 ring-offset-bg' : ''}
                `}
                style={{
                  backgroundColor: themeData.accent,
                }}
                title={themeData.label}
                aria-label={`Switch to ${themeData.label} theme`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-theme"
                    className="absolute inset-0 rounded-md border-2 border-white/50"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

================================================================================
File: src/lib/articles.ts
--------------------------------------------------------------------------------
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

================================================================================
File: src/lib/constants.ts
--------------------------------------------------------------------------------
export const SITE_NAME = 'WorkmanWise';
export const SITE_TAGLINE = 'Keep decisions moving forward without friction.';
export const SITE_DESCRIPTION =
  'A collective of machinists and designers using AI to streamline CAM, posts, and shop workflows safely, predictably, and without hype.';
export const SITE_URL = 'https://workmanwise.com';
export const SITE_KEYWORDS = [
  'manufacturing workflows',
  'CAM handoff',
  'post processor',
  'shop floor operations',
  'lean manufacturing',
  'just in time operations',
  'process clarity',
  'workflow intelligence',
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tools & Services', href: '/tools' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const ANIMATION = {
  easing: [0.25, 0.1, 0.25, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    deliberate: 1.2,
  },
  stagger: 0.1,
} as const;

================================================================================
File: src/lib/products.ts
--------------------------------------------------------------------------------
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

================================================================================
File: src/lib/themes.ts
--------------------------------------------------------------------------------
export type ThemeName = 'shop-floor' | 'blueprint' | 'clean-room' | 'raw-material' | 'night-shift';

export interface ThemeTokens {
  name: ThemeName;
  label: string;
  bg: string;
  surface: string;
  'text-primary': string;
  'text-secondary': string;
  accent: string;
  'accent-hover': string;
  border: string;
  'card-bg': string;
}

export const themes: Record<ThemeName, ThemeTokens> = {
  'shop-floor': {
    name: 'shop-floor',
    label: 'Shop Floor',
    bg: '#1a1a1a',
    surface: '#242424',
    'text-primary': '#F8FAFC',
    'text-secondary': '#94A3B8',
    accent: '#F59E0B',
    'accent-hover': '#D97706',
    border: '#333333',
    'card-bg': '#1f1f1f',
  },
  blueprint: {
    name: 'blueprint',
    label: 'Blueprint',
    bg: '#0A1628',
    surface: '#111D32',
    'text-primary': '#E2E8F0',
    'text-secondary': '#8BA2C4',
    accent: '#67E8F9',
    'accent-hover': '#22D3EE',
    border: '#1E3A5F',
    'card-bg': '#0F2340',
  },
  'clean-room': {
    name: 'clean-room',
    label: 'Clean Room',
    bg: '#FFFFFF',
    surface: '#F8FAFC',
    'text-primary': '#0F172A',
    'text-secondary': '#64748B',
    accent: '#2563EB',
    'accent-hover': '#1D4ED8',
    border: '#E2E8F0',
    'card-bg': '#F1F5F9',
  },
  'raw-material': {
    name: 'raw-material',
    label: 'Raw Material',
    bg: '#FAF5F0',
    surface: '#F5EDE4',
    'text-primary': '#1C1917',
    'text-secondary': '#78716C',
    accent: '#B45309',
    'accent-hover': '#92400E',
    border: '#E7DDD0',
    'card-bg': '#F0E8DE',
  },
  'night-shift': {
    name: 'night-shift',
    label: 'Night Shift',
    bg: '#000000',
    surface: '#0A0A0A',
    'text-primary': '#E2E8F0',
    'text-secondary': '#6B7280',
    accent: '#22C55E',
    'accent-hover': '#16A34A',
    border: '#1A1A1A',
    'card-bg': '#0D0D0D',
  },
};

export const themeOrder: ThemeName[] = [
  'shop-floor',
  'blueprint',
  'clean-room',
  'raw-material',
  'night-shift',
];

export const DEFAULT_THEME: ThemeName = 'shop-floor';

================================================================================
