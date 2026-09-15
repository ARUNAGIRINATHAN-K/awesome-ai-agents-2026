# Vercel — Style Reference
> Typeset terminal on white paper

**Theme:** light

Vercel's design system is an exercise in disciplined monochrome: a near-white canvas (#fafafa), black typography, hairline borders, and the complete absence of decorative color. The visual language reads like a developer terminal rendered in print — Geist Sans whispers at hero scale with weight 400-450 and -0.06em tracking, while Geist Mono stamps labels, metadata, and code samples in 11-13px caps. Buttons are sharp 6px-radius pills or rectangles in pure black-on-white or white-on-black. The system trusts contrast and typography hierarchy over color, using the triangle mark (▲) and a two-line wordmark as the only brand ornament. Surfaces stack as #fafafa → #ebebeb → #171717, creating depth through tonal value shifts rather than shadow or color. Every element is built on a 4px grid with compact density, producing an interface that feels like an engineer's notebook — precise, functional, and unafraid of empty space.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#fafafa` | `--color-paper-white` | Page canvas, card surfaces, light button fills — the default background that everything else sits on |
| Pure White | `#ffffff` | `--color-pure-white` | Elevated card surfaces, inset highlights, input fields |
| Hairline | `#ebebeb` | `--color-hairline` | 1px borders on buttons, links, and cards — visible at high zoom, invisible at speed |
| Ash | `#c9c9c9` | `--color-ash` | Disabled text, muted labels, brand name watermarks in customer logos |
| Smoke | `#a8a8a8` | `--color-smoke` | Tertiary text, placeholder copy, subtle icon fills |
| Graphite | `#8f8f8f` | `--color-graphite` | Footer micro-copy, secondary metadata |
| Slate | `#7d7d7d` | `--color-slate` | Customer brand names in logo strips, muted heading variants |
| Stone | `#666666` | `--color-stone` | Muted captions, helper text, and de-emphasized UI labels. |
| Charcoal | `#4d4d4d` | `--color-charcoal` | Body paragraph text, card descriptions, button secondary labels — where reading weight lives |
| Obsidian | `#171717` | `--color-obsidian` | Primary headings, nav borders, dark button fills, list markers — near-black that avoids pure #000 harshness |
| Carbon | `#000000` | `--color-carbon` | SVG icon fills, logo marks, the triangle brand glyph — pure black reserved for graphic elements only |
| Terminal Green | `#297a3a` | `--color-terminal-green` | Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Spectrum Gradient | `linear-gradient(90deg, rgb(0, 255, 149) 0%, rgb(255, 208, 0) 25%, rgb(255, 23, 68) 50%, rgb(149, 0, 255) 75%, rgb(0, 229, 255) 100%)` | `--color-spectrum-gradient` | Decorative gradient sweep for marketing hero accents — the only place color is permitted to exist |
| Solar Edge | `linear-gradient(90deg, rgb(255, 220, 48) 0%, rgb(56, 162, 255) 100%)` | `--color-solar-edge` | Decorative two-stop gradient for feature callouts — yellow-to-blue sweep |

## Tokens — Typography

### Geist Sans — Primary interface and display typeface — custom geometric sans from Vercel with tight tracking on large sizes (-0.06em at 56-64px, -0.05em at 30px). Weight 450 for hero headlines is the signature choice: heavier than a light but lighter than a semibold, producing a tone that is confident without shouting. · `--font-geist-sans`
- **Substitute:** Inter
- **Weights:** 400, 450, 500
- **Sizes:** 14, 16, 30, 56, 64
- **Line height:** 1.00, 1.10, 1.43, 1.50
- **Letter spacing:** -3.84px at 64px, -3.36px at 56px, -1.5px at 30px, normal at body sizes
- **OpenType features:** `"calt" 0, "rlig", "ss11"`
- **Role:** Primary interface and display typeface — custom geometric sans from Vercel with tight tracking on large sizes (-0.06em at 56-64px, -0.05em at 30px). Weight 450 for hero headlines is the signature choice: heavier than a light but lighter than a semibold, producing a tone that is confident without shouting.

### Geist Mono — Monospace secondary typeface for labels, code blocks, CLI output panels, metadata tags, and uppercase eyebrows. The 8px/600/uppercase combination stamps tiny wordmarks with mechanical precision. Wide letter-spacing (0.071em) in mono gives uppercase labels breathing room. · `--font-geist-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 500, 600
- **Sizes:** 8, 11, 12, 13, 14
- **Line height:** 1.00, 1.33, 1.43, 1.50, 1.54, 1.60, 1.67
- **Letter spacing:** 0.071em for mono at 11-12px
- **OpenType features:** `"calt" 0, "rlig", "ss11"`
- **Role:** Monospace secondary typeface for labels, code blocks, CLI output panels, metadata tags, and uppercase eyebrows. The 8px/600/uppercase combination stamps tiny wordmarks with mechanical precision. Wide letter-spacing (0.071em) in mono gives uppercase labels breathing room.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| eyebrow | 11px | 1.5 | — | `--text-eyebrow` |
| caption | 13px | 1.54 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| heading | 30px | 1.1 | -1.5px | `--text-heading` |
| heading-lg | 56px | 1 | -3.36px | `--text-heading-lg` |
| display | 64px | 1 | -3.84px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 2px |
| cards | 6px |
| pills | 9999px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0...` | `--shadow-subtle` |
| subtle-2 | `rgb(235, 235, 235) 0px 0px 0px 1px` | `--shadow-subtle-2` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 96-128px
- **Card padding:** 16px
- **Element gap:** 12px

## Components

### Filled Black Button
**Role:** Primary action — the strongest visual weight in the system

Background #171717, text #ffffff, 6px radius, 12px horizontal padding, Geist Sans 14px/400. Used for Deploy Now, Sign Up. The only element that reaches 'Obsidian' black, making it unmistakable as the page's primary call.

### Ghost Outline Button
**Role:** Secondary action — present but not competing with primary

Background transparent, text #4d4d4d, 1px border #ebebeb (rendered via box-shadow ring), 6px radius, 20px all padding, Geist Sans 14px/400. Used for Talk to Sales, Get a Demo. Reads as 'available' without asserting hierarchy.

### Pill Button
**Role:** Compact action in dense contexts (nav, header right cluster)

Background #171717 or #ffffff, text contrasting, 9999px radius (full pill), 12px horizontal padding, 0 vertical padding for tight header use.

### Text Link Button
**Role:** Lowest-weight interactive — pure underline or color shift on text

No background, no border, 0px radius, color #171717 or #4d4d4d, 14-16px Geist Sans. Used for nav items and inline references.

### Bordered Card
**Role:** Feature/content container — depth via hairline border, never shadow

Background #ffffff, 6px radius, 1px border via stacked box-shadows: inset ring rgba(0,0,0,0.08) + outer ring #fafafa, 16px padding. The double-ring technique creates a border that survives any background — a signature Vercel trick.

### Inverted Card
**Role:** Visual punctuation in a grid — flips the value scale

Background #171717, white text, 6px radius. Used sparingly (e.g., the Passport card) to break the monotony of an all-light layout.

### CLI Output Panel
**Role:** Demonstrates the product in its native environment — a terminal screenshot embedded as UI

Light background with Geist Mono 12-13px text in #171717, prefixed with ▲ triangle marker in #171717 for commands, ✓ checkmark in #297a3a for confirmations. The terminal IS the marketing.

### Logo Strip Row
**Role:** Social proof — customer brand names in a single horizontal line

7+ logos in a row with 24-32px gaps. Customer names render in Geist Sans at the customer's actual brand treatment, faded to #7d7d7d for the page's neutral context.

### Eyebrow Label
**Role:** Tiny uppercase section markers — the monospace 'stamp'

Geist Mono 11px/400, 0.071em letter-spacing, uppercase, color #171717. Pairs with a 12px gap before the heading it announces. Examples: 'FOR CODING AGENTS', 'TO SHIP APPS AND AGENTS'.

### Top Nav Bar
**Role:** Global navigation — minimal, horizontal, no shadow

Height 64px, sticky, background #fafafa with backdrop-blur (20-48px), wordmark left (▲ + Vercel), nav items center-left at 14px Geist Sans #171717, action cluster right (Get a Demo ghost, Log In ghost, Sign Up filled). No bottom border — separation comes from spacing alone.

### Hero Composition
**Role:** First screen — oversized type on left, brand mark on right, supporting text far right

Three-column asymmetric layout: headline (56-64px, -0.06em tracking, weight 450) left, black triangle glyph center, eyebrow stack right. No background image. The triangle floats with no border or fill — pure black silhouette.

### Feature Card Grid
**Role:** 2-up product showcase cards with mini product UI embedded

Large cards with the Bordered Card treatment, 16-24px padding, title at 30px heading weight, description at 14-16px body in #4d4d4d. Each card contains a small product mockup (CLI output, passport, framework logo) as visual evidence.

## Do's and Don'ts

### Do
- Use #171717 for all primary text and filled buttons — never pure #000000 for text or #ffffff for dark surfaces
- Apply 6px radius to all cards, buttons, and bordered containers (--geist-radius) — use 9999px only for pill-shaped nav actions
- Set headlines at weight 400-450 with -0.06em letter-spacing at 56-64px — never bold headlines over 700
- Use Geist Mono 11-12px uppercase with 0.071em tracking for all eyebrows, labels, and metadata stamps
- Build depth with hairline borders via stacked box-shadows (0 0 0 1px rgba(0,0,0,0.08), 0 0 0 2px #fafafa) — never with drop-shadow
- Space sections at 96-128px vertical gaps with no background shifts or dividers between bands
- Prefix CLI commands with ▲ and confirmations with ✓ in #297a3a — the terminal pattern is the product demo

### Don't
- Never introduce a chromatic color outside the Terminal Green (#297a3a) success indicator and the spectrum gradient — 0% colorfulness is the rule
- Never use border-radius larger than 6px on cards or rectangular buttons — the sharpness is the point
- Never set body or heading type in any color other than the #171717 / #4d4d4d / #666666 scale
- Never use drop-shadows for elevation — hairline rings only, or no depth at all
- Never use light or semibold (300 or 600-700) weights for headlines — the system speaks at 400-450 maximum
- Never set line-height above 1.0 for display sizes (56-64px) — the tight leading is what makes the type feel architectural
- Never use Geist Sans for labels, metadata, or code — Geist Mono owns that space exclusively

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#fafafa` | Default page background — the warm off-white that makes the system feel paper-like rather than screen-like |
| 1 | Card Surface | `#ffffff` | Elevated cards sit one step above canvas in brightness, distinguished by hairline border not shadow |
| 2 | Inverted Surface | `#171717` | Dark inverted panels (e.g., Passport card) flip the value scale for visual punctuation in a grid |

## Elevation

- **Bordered Card:** `0 0 0 1px rgba(0,0,0,0.08), 0 0 0 2px #fafafa`
- **Ghost Button / Link:** `0 0 0 1px #ebebeb`

## Imagery

Imagery is sparse and always functional. The primary visual element is the black triangle (▲) — a geometric brand mark that appears at hero scale as a floating silhouette. Customer logos in the social-proof strip use each brand's actual wordmark in grayscale. Product mockups (Notion chat UI, CLI terminal output, passport card) are embedded as light-mode screenshots within bordered cards. There is no photography, no illustration, no 3D — the system is pure typography and geometric shapes on white paper.

## Layout

Max-width 1280px centered container with generous horizontal padding (24-48px). The hero uses an asymmetric three-zone composition: oversized headline left, brand glyph center, eyebrow stack right. Below the hero, content flows in alternating bands: a full-width customer logo strip, then a two-column 'build agents' section with heading left and product mockup right, then a three-up feature card grid. Sections are separated by 96-128px vertical gaps with no dividers or background shifts. The nav is a single 64px sticky bar with backdrop blur. Card grids consistently use a 2-column or 3-column layout with 16-24px gaps. The overall density is compact — text is comfortable to read, whitespace is generous, but the type scale and component sizing keep the page from feeling airy.

## Agent Prompt Guide

**Quick Color Reference**
- Background: #fafafa
- Text: #171717
- Border: #ebebeb
- Accent: #000000 (triangle mark only)
- primary action: #171717 (filled action)

**Example Component Prompts**

1. Create a hero headline: Geist Sans 56px weight 450, color #171717, letter-spacing -3.36px, line-height 1.0. Below it, a filled black button (background #171717, text #ffffff, 6px radius, 12px 20px padding, Geist Sans 14px weight 400) and a ghost button beside it (background transparent, text #4d4d4d, 1px border #ebebeb, 6px radius, 20px padding).

2. Create a feature card: background #ffffff, 6px radius, border via stacked box-shadows (0 0 0 1px rgba(0,0,0,0.08), 0 0 0 2px #fafafa), 16px padding. Title in Geist Sans 30px weight 400 with -1.5px tracking, color #171717. Description in Geist Sans 14px weight 400, color #4d4d4d.

3. Create an eyebrow label: Geist Mono 11px weight 400, 0.071em letter-spacing, uppercase, color #171717. Pair with 12px margin-bottom before the heading it introduces.

4. Create a CLI output panel: background #ffffff with 1px border #ebebeb, 6px radius, 16px padding. Commands prefixed with ▲ in #171717, confirmations prefixed with ✓ in #297a3a, all text in Geist Mono 12px weight 400, color #171717.

5. Create a top nav bar: height 64px, background #fafafa with backdrop-filter blur(20px), flex row. Left: ▲ glyph in #000000 + 'Vercel' in Geist Sans 14px weight 500. Center-left: nav items in Geist Sans 14px weight 400, color #171717, 24px gaps. Right: ghost button (border #ebebeb, text #4d4d4d, 6px radius) + filled button (background #171717, text #ffffff, 6px radius, pill-shaped at 9999px radius for tight header use).

## Typographic Discipline

The type system has only two families and 8 sizes. Headlines are weight 400-450 (not 700), tracking tight at -0.06em, line-height 1.0 — they sit on a single line, dense and confident. Body is 14-16px weight 400 at 1.43-1.5 line-height. The only color in the type system is the value shift from #171717 to #4d4d4d to #666666 — never a chromatic tint. Labels and metadata are ALWAYS monospace, ALWAYS uppercase, ALWAYS small (8-12px). This binary — Geist Sans for reading, Geist Mono for stamping — is the system's most recognizable rule.

## The Triangle Protocol

The ▲ glyph is the brand's most deployed element. It appears as: the wordmark icon, the CLI command prefix, a decorative hero silhouette, a loading indicator, and an interactive collapse marker. Always rendered in #000000 at 1:1 aspect ratio, never with a border, never with a fill other than black. It is the only element in the system permitted to be pure #000000 — everything else is #171717 or lighter.

## Similar Brands

- **Linear** — Same sharp 6-8px radii, monochromatic light canvas, and tight-tracking geometric sans-serif headlines — Linear and Vercel share a print-engineering aesthetic
- **Railway** — Similar near-black on warm-white palette, monospace CLI panels, and the discipline of using one accent color (or none) across an entire interface
- **Stripe** — Hairline borders, generous whitespace, and the trust that typography hierarchy alone can carry a page without decorative color or imagery
- **Resend** — Developer-marketing approach: terminal output as hero, monospace labels, the same paper-white canvas and pure-black wordmark
- **Plaid** — High-contrast achromatic system with a single chromatic note for state, trusting typographic weight and spacing to create hierarchy

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper-white: #fafafa;
  --color-pure-white: #ffffff;
  --color-hairline: #ebebeb;
  --color-ash: #c9c9c9;
  --color-smoke: #a8a8a8;
  --color-graphite: #8f8f8f;
  --color-slate: #7d7d7d;
  --color-stone: #666666;
  --color-charcoal: #4d4d4d;
  --color-obsidian: #171717;
  --color-carbon: #000000;
  --color-terminal-green: #297a3a;
  --color-spectrum-gradient: #ff1744;
  --gradient-spectrum-gradient: linear-gradient(90deg, rgb(0, 255, 149) 0%, rgb(255, 208, 0) 25%, rgb(255, 23, 68) 50%, rgb(149, 0, 255) 75%, rgb(0, 229, 255) 100%);
  --color-solar-edge: #ffdc30;
  --gradient-solar-edge: linear-gradient(90deg, rgb(255, 220, 48) 0%, rgb(56, 162, 255) 100%);

  /* Typography — Font Families */
  --font-geist-sans: 'Geist Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-eyebrow: 11px;
  --leading-eyebrow: 1.5;
  --text-caption: 13px;
  --leading-caption: 1.54;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 30px;
  --leading-heading: 1.1;
  --tracking-heading: -1.5px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.36px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -3.84px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-w450: 450;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-208: 208px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96-128px;
  --card-padding: 16px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-nav: 2px;
  --radius-cards: 6px;
  --radius-pills: 9999px;
  --radius-buttons: 6px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(235, 235, 235) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-page-canvas: #fafafa;
  --surface-card-surface: #ffffff;
  --surface-inverted-surface: #171717;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper-white: #fafafa;
  --color-pure-white: #ffffff;
  --color-hairline: #ebebeb;
  --color-ash: #c9c9c9;
  --color-smoke: #a8a8a8;
  --color-graphite: #8f8f8f;
  --color-slate: #7d7d7d;
  --color-stone: #666666;
  --color-charcoal: #4d4d4d;
  --color-obsidian: #171717;
  --color-carbon: #000000;
  --color-terminal-green: #297a3a;
  --color-spectrum-gradient: #ff1744;
  --color-solar-edge: #ffdc30;

  /* Typography */
  --font-geist-sans: 'Geist Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-eyebrow: 11px;
  --leading-eyebrow: 1.5;
  --text-caption: 13px;
  --leading-caption: 1.54;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 30px;
  --leading-heading: 1.1;
  --tracking-heading: -1.5px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.36px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -3.84px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-208: 208px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(235, 235, 235) 0px 0px 0px 1px;
}
```
