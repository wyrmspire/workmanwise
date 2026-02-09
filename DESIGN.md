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
