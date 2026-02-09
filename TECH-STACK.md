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
