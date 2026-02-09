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
