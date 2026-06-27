# Product

## Register

brand

## Users

Chinese-speaking business leaders, investors, journalists, and corporate communications teams who track global corporate power and prestige rankings. They arrive expecting the gravitas of Fortune Global 500 or Forbes Global 2000, but from a Chinese-world editorial point of view (寰球 = "the whole world," presented through a Chinese lens).

They are reading on desktop in a professional context (research, reporting, due diligence) as often as on mobile (sharing a ranking link, checking a company's standing). They expect to skim a dense ranking quickly, but also to feel the publication's authority within the first few seconds.

## Product Purpose

寰球500 / WORLD BEST 500 is an annual global enterprise ranking and accompanying editorial coverage (rankings, industry analysis, executive profiles, methodology). The homepage is the flagship cover page: it must establish the publication's authority, preview the current year's ranking, and route readers into the ranking, industry verticals, and insight articles.

Success = a visitor immediately reads this as a serious, long-running business-press institution (not a marketing microsite for a single campaign), and can find the current ranking, mission/methodology, and latest analysis within one screen of scrolling.

## Brand Personality

Editorial, authoritative, old-money, restrained, timeless. Tone is closer to a business newspaper masthead than a tech product. Confidence comes from typographic hierarchy, density, and material restraint (deep ink, gold, wine accents on ivory/stone neutrals) rather than illustration, color, or playful motion.

Reference lane: Financial Times / The Economist editorial design — serif-driven hierarchy, hairline rule dividers, dense data tables treated as a feature (not an afterthought), large display-serif numerals for rank/score, full-bleed desaturated photography/graphics for atmosphere. Motion is present but felt rather than seen: scroll reveals, subtle parallax on hero imagery, no bounce/elastic easing.

## Anti-references

- Generic SaaS landing page template: centered hero + gradient blob + rounded feature-card grid + "AI-generated" feel. This is the primary failure mode to avoid.
- Bright, neon, cartoon, or emoji-driven visuals — stays strictly within the ink / gold / wine / ivory / stone palette from the brand brief.
- Glassmorphism as decoration, gradient text, side-stripe card borders, identical uniform card grids.
- Flashy or bouncy motion: no elastic/spring overshoot, no scroll-jacking. Animation should read as confident pacing, not as a demo reel.

## Design Principles

1. Typography carries the hierarchy. Scale and weight contrast (serif display for headlines/rank numerals, sans for body/UI) do the work that color and decoration would do on a SaaS site.
2. Density is a feature. The ranking table, stats, and insight grid should read as real editorial content at a glance, not as marketing placeholders — real-feeling numbers, names, dates.
3. Restraint as authority. Every animation, color use, and layout break should feel deliberate and earn its place; when in doubt, remove rather than add.
4. Break the centered-hero default. Use asymmetry, overlap, and editorial grid-breaking (mastheads, bylines, pull quotes, full-bleed imagery against dense text columns) the way a print-derived publication would.
5. Motion clarifies reading order. GSAP/ScrollTrigger reveals should stage information the way a reader's eye would move down a printed page — not decorate isolated widgets.

## Accessibility & Inclusion

- Respect `prefers-reduced-motion`: disable scroll-driven and entrance animations, keep content immediately visible.
- Maintain WCAG AA contrast for ivory-on-ink and gold-on-ink text combinations; verify gold (#B89968) on ink (#1A1A1A) passes for body-sized text or restrict gold to large/display text and accents.
- Keep all interactive targets (nav, CTAs, table row links) keyboard-navigable with visible focus states.
- Bilingual content (Simplified Chinese primary, English secondary) — ensure font stacks render both cleanly and that line-length/leading rules account for CJK text density.
