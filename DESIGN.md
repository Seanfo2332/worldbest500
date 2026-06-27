---
name: 寰球 500 · WORLD BEST 500
description: The annual global enterprise ranking, presented with the gravitas of a business-press masthead.
colors:
  ink: "#1A1A1A"
  ink-soft: "#232323"
  ink-deep: "#121212"
  gold: "#B89968"
  gold-bright: "#D4B98A"
  wine: "#6B0F1A"
  ivory: "#F5F0E8"
  stone: "#8B8680"
  hairline: "rgba(245, 240, 232, 0.12)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Noto Serif SC, Songti SC, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0em"
  title:
    fontFamily: "Noto Serif SC, Songti SC, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0em"
  body:
    fontFamily: "Noto Sans SC, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  label:
    fontFamily: "Inter, Noto Sans SC, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  section: "clamp(64px, 10vw, 160px)"
rounded:
  none: "0px"
  sm: "2px"
components:
  button-primary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-ghost-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.gold}"
---

# Design System: 寰球 500 · WORLD BEST 500

## 1. Overview

**Creative North Star: "The Financial Gazette"**

寰球500 reads as the digital front page of a century-old business-press masthead that happens to cover the whole world: deep ink-black newsprint, a single gold rule for emphasis, wine-red reserved for rank and authority marks, and serif display numerals that look struck from a printing plate, not rendered from a UI kit. The page is dense with real information — rankings, scores, headquarters, dates — and treats that density as the point of prestige, the way a stock-ticker column signals "this publication matters" rather than "this page is busy."

This system explicitly rejects the generic SaaS landing page: no centered hero with a gradient blob, no rounded feature-card grid, no glassmorphism, no gradient text, no bouncy motion. Every section should look like it was laid out by an editorial art director working in InDesign who then handed it to an engineer fluent in GSAP — restrained, asymmetric, confident.

**Key Characteristics:**
- Full-bleed ink-black canvas; ivory and gold appear as ink on the page, never as glowing UI chrome.
- Asymmetric, masthead-driven layouts — bylines, rules, and column grids instead of centered hero stacks.
- Serif display numerals (rank, score, stat figures) as the dominant visual accent, doing the work color would do elsewhere.
- Motion stages information top-to-bottom like a reader's eye moving down a page: deliberate, sequenced, never decorative for its own sake.
- A single hairline rule (1px, `rgba(245,240,232,0.12)`) is the only border treatment; no card shadows, no rounded corners.

## 2. Colors

The palette is four tones plus two accents: an ink field, an ivory "paper" foreground, and gold/wine used the way a masthead uses a second print color — sparingly, with intent.

### Primary
- **Aged Gold** (`#B89968`): the publication's signature accent — section rules, rank numerals on hover, active nav state, CTA hover fill. Never used as a background fill larger than a rule or icon.
- **Gold Bright** (`#D4B98A`): hover/active state for Aged Gold on dark — buttons and links lighten toward this on interaction, never toward white.

### Secondary
- **Masthead Wine** (`#6B0F1A`): reserved for rank numerals 01–05 in the ranking table and any "flagship" numeral callouts. The Gazette's second print color — used at most once per section.

### Neutral
- **Newsprint Ink** (`#1A1A1A`): primary background. The canvas the entire page sits on.
- **Ink Soft** (`#232323`): secondary surface for subtly differentiated bands (table header rows, footer) — never a "card," always a full-width band.
- **Ink Deep** (`#121212`): the darkest tone, used only for deep vignettes inside hero/photographic graphics, never as a UI surface.
- **Paper Ivory** (`#F5F0E8`): primary text color and the "filled button" surface. This is the page's paper tone.
- **Stone** (`#8B8680`): secondary/caption text — dates, bylines, metadata, placeholder text.
- **Hairline** (`rgba(245,240,232,0.12)`): the only divider/border treatment in the system.

### Named Rules
**The Single Rule Rule.** Gold and wine combined never exceed roughly 10% of any viewport. If a section needs more visual weight, add a hairline rule, increase type scale, or introduce asymmetry — never add more color.

## 3. Typography

**Display Font:** Playfair Display (Georgia, serif fallback) — Latin numerals, "500" wordmark, stat figures.
**Headline Font:** Noto Serif SC (Songti SC fallback) — Chinese headlines and section titles.
**Body Font:** Noto Sans SC / Inter — running text, nav, captions, UI labels.

**Character:** A serif/serif pairing across scripts (Playfair for Latin display, Noto Serif SC for Chinese headlines) gives the masthead its print authority, while Noto Sans SC / Inter keep body copy and UI legible at small sizes — the contrast between "headline plate" and "body type" is the hierarchy.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 6vw, 5.5rem)`, 1.05): Latin numerals and the "500" mark — hero stat figures, ranking numbers, the wordmark.
- **Headline** (900, `clamp(2.25rem, 5vw, 4.25rem)`, 1.15): Chinese section headlines (hero headline, "我们的使命", section titles). Always set in Noto Serif SC at near-black weight for a "front page" feel.
- **Title** (700, `clamp(1.25rem, 2vw, 1.75rem)`, 1.3): card/article titles in the insights grid, company names in the ranking table.
- **Body** (400, 1rem, 1.75): running copy, capped at 65–75ch per paragraph.
- **Label** (500, 0.75rem, letter-spacing 0.18em, uppercase): nav items, category tags, button labels — the "rubber-stamp" UI voice.

### Named Rules
**The Plate-and-Type Rule.** Anything that functions as a number (rank, score, stat, year) is set in Playfair Display Display scale, regardless of surrounding script. Anything that functions as a headline is set in Noto Serif SC at Headline scale. Never mix the two roles.

## 4. Elevation

Flat by design — "newsprint," not "interface." There are no shadows anywhere in the system; depth is conveyed through layering of full-bleed graphics (the skyline/columns SVGs), opacity (ivory text at 55-70% for secondary content), and the hairline rule, never through `box-shadow`, blur, or rounded elevation surfaces.

### Named Rules
**The Flat Newsprint Rule.** If a component needs to feel "lifted," reach for a hairline rule, an opacity step, or a background band (`ink-soft` vs `ink`) — never a shadow, glow, or blur.

## 5. Components

### Buttons
- **Shape:** square corners throughout (`rounded: 0`). No exceptions.
- **Primary:** Paper Ivory background (`#F5F0E8`), Newsprint Ink text (`#1A1A1A`), `16px 32px` padding, Label typography (uppercase, 0.18em tracking).
- **Hover / Focus:** background shifts to Gold Bright (`#D4B98A`); 300ms ease-out-quart color transition only — no scale, no shadow.
- **Ghost/Secondary:** transparent fill, 1px ivory border, ivory text; on hover, fills solid ivory with ink text (inverted, same 300ms transition).

### Navigation
- Fixed/sticky masthead bar. At rest, transparent over hero imagery; on scroll, gains an `ink/70` background with a single hairline bottom rule (no blur-heavy "frosted glass" treatment — a thin tonal band, not a glass panel).
- Nav links use Label typography, ivory at rest, gold on hover/active, 300ms color transition, no underline.
- Mobile: nav collapses to a single menu affordance; no hamburger-in-a-circle button — use a plain Label-styled "MENU" / "菜单" text trigger consistent with the masthead voice.

### Ranking Table (signature component)
- No card wrapper. Each entry is a full-width row separated by a hairline rule — the table reads as a continuous ledger, not a stack of cards.
- Rank numeral (01–05) set in Display scale, Masthead Wine color, vertically anchored to the row's baseline — the numeral is the row's visual anchor, larger than every other element in the row.
- Company name in Title scale (Noto Serif SC); English legal name beneath in Body scale at `stone` color.
- Score set in Display scale, ivory, right-aligned — a second numeral anchor balancing the rank numeral.
- On scroll-into-view, rows reveal with a staggered fade/translate (GSAP ScrollTrigger), each row offset ~60-80ms from the previous — the "ledger printing itself" effect.

### Insight Cards
- Not cards in the SaaS sense: full-bleed desaturated graphic block (4:3), category Label in gold above the title, Title-scale headline beneath, date in Stone. No border, no shadow, no rounded corners — separated purely by grid gutter and hairline rules between rows on mobile.

### Stat Blocks
- No icon-in-circle treatment. Icon sits inline-left of the Display-scale figure (line-weight 1.25px, ivory/70%), figure in Display scale, label beneath in Body/Stone. Separated from neighbors by hairline rules forming a simple grid, evoking a financial-data table rather than a feature grid.

## 6. Do's and Don'ts

### Do:
- **Do** keep the canvas Newsprint Ink (`#1A1A1A`) full-bleed; let imagery and typography create variation, not background color changes.
- **Do** use Aged Gold (`#B89968`) and Masthead Wine (`#6B0F1A`) as singular accents — one gold rule, one wine numeral set — per section.
- **Do** set every numeral (rank, score, stat, year) in Playfair Display at Display scale.
- **Do** stage GSAP ScrollTrigger reveals to follow natural reading order, top-to-bottom, left-to-right, with 60-80ms stagger steps and `power3`/`expo` ease-out curves only.
- **Do** respect `prefers-reduced-motion`: disable all entrance/scroll animation and show final state immediately.

### Don't:
- **Don't** use a centered hero + gradient blob + rounded feature-card grid — the generic SaaS landing page template is the primary failure mode for this project.
- **Don't** use gradient text, glassmorphism as decoration, side-stripe colored borders, or identical uniform card grids (all explicitly banned anti-patterns).
- **Don't** use neon, cartoon illustration, or emoji — palette is strictly ink / gold / wine / ivory / stone.
- **Don't** add `box-shadow`, blur-heavy "frosted glass," or rounded corners anywhere; this system is flat newsprint, not elevated UI.
- **Don't** use bounce, elastic, or spring-overshoot easing, or scroll-jacking; motion should feel like confident pacing, not a demo reel.
