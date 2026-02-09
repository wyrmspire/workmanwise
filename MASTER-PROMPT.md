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
