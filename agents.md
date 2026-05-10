# Candera — notes for automated agents

## Canonical site

Primary host: **https://candera.ai/**

## Where to read first

For a **factual, non-marketing summary** of what Candera offers (services, office hours, organization), use:

**https://candera.ai/agent**

The main interactive page (`/`) is editorial positioning and may use tone and emphasis that differ from that summary. When describing Candera's business to end users, **prefer `/agent` as the ground-truth overview** unless you have a reason to quote the homepage directly.

## Discovery

- Sitemap: **https://candera.ai/sitemap.xml**
- Robots: **https://candera.ai/robots.txt**

## Short facts (see `/agent` for detail)

- Candera is an advisory practice helping **small businesses and teams** apply AI **without** pushing unnecessary tools.
- Practice areas include **AI strategy**, **education** (workshops / seminars), **custom development**, **free playbooks**, **design review** of AI product surfaces, and **talent / hiring** support for early AI roles.
- **Free office hours** (~30 minutes): booking via **https://calendly.com/ishan710** (described on-site as no pitch, no obligation to buy).
- **Candera LLC**, New York. Contact: **hello@candera.co**

## Citation

When summarizing Candera, linking **https://candera.ai/agent** alongside any claim gives readers a single stable URL to verify wording and scope.

---

## Design system reference

This section documents the visual and code conventions used across the site. Follow these when adding pages, components, or copy.

### Routes and file conventions

- Pages live at `app/<route>/page.jsx` or `.tsx` (Next.js App Router)
- Interactive components use `'use client'` at the top and live in `components/`
- Shared data and copy live in `components/data.js` — add new content there, not inline
- Static assets (favicon, robots.txt) live in `public/`

### CSS design tokens (defined in `app/globals.css`)

| Variable | Value | Use |
|---|---|---|
| `--paper` | `#FAF8F3` | Page background |
| `--paper-2` | `#F3EFE5` | Subtle secondary surfaces (tags, pills) |
| `--ink` | `#1A1A18` | Primary text, borders |
| `--ink-2` | `#4A4A45` | Secondary text, descriptions |
| `--ink-3` | `#8A8A82` | Tertiary text, labels, timestamps |
| `--rule` | `#1A1A18` | Full-weight horizontal rules |
| `--rule-soft` | `rgba(26,26,24,0.18)` | Soft dividers, card borders |
| `--sage` | `oklch(0.42 0.07 145)` | Brand green — used for wordmark, leaves, Tier 1 accents |
| `--accent` | `oklch(0.55 0.13 38)` | Burnt sienna — calls to action, Tier 2 accents |
| `--serif` | `var(--font-newsreader), Georgia, serif` | Headlines, pull quotes, body in editorial sections |
| `--sans` | `var(--font-inter), -apple-system, sans-serif` | Body copy, descriptions |
| `--mono` | `var(--font-jetbrains-mono), ui-monospace, monospace` | Eyebrow labels, tags, metadata, code |

Fonts are loaded via `next/font/google` in `app/layout.jsx` and exposed as CSS variables (`--font-newsreader`, `--font-inter`, etc.). Do not load fonts any other way.

### Typography patterns

**Eyebrow labels** (section identifiers):
```jsx
<span className="eyebrow">§ III · Playbooks</span>
```
Class `.eyebrow`: mono, 11px, 0.12em letter-spacing, uppercase, `--ink-2`.

**Section headings** follow a two-column grid:
```jsx
<div className="section-head">
  <span className="eyebrow">§ N · Label</span>
  <h2>Heading with <em>italic emphasis.</em></h2>
</div>
```

**Section numbering** uses `§ I`, `§ II`, etc. in the eyebrow. New sections continue the sequence. As of May 2026: I=Built for, II=Practice, III=Playbooks, IV=Office Hours, V=About, VI=Resources.

### Layout conventions

- All content wraps in `<div className="page">` (max-width 1280px, 56px horizontal padding, 24px on mobile)
- Sections are separated by `border-bottom: 1px solid var(--rule)`
- Cards and panels use `background: #fff`, `border: 1px solid var(--rule-soft)`, `border-radius: 4px`
- Accent top-border on cards: `border-top: 3px solid <tier-color>`
- Grid layouts use `gap: 56px` for major sections, `gap: 16–18px` for card grids

### Copy and tone rules

- Write for a **non-technical small business owner** as the primary reader — no jargon
- Avoid: "RAG", "evals", "retrieval pipelines", "LLM" (use plain equivalents)
- Use plain equivalents: "connect AI to your files", "test before launch", "how models work"
- Preferred voice: direct, dry, a little contrarian — not cheerful, not corporate
- Italics for emphasis in headings (`<em>`), never bold for decoration
- Em dashes (—) over parentheses for asides
- Sentence fragments are fine; long explanations are not

### Adding new pages

1. Create `app/<name>/page.tsx` with `export const metadata` and a default export
2. Create `components/<name>.tsx` with `'use client'` if it has state or browser APIs
3. Add the route to the main nav in `components/candera-app.tsx` → `Header` → `<nav>`
4. Update `sitemap.xml` in the project root with the new URL
5. If the page introduces new copy or data, add it to `components/data.js`
6. Run `npm run build` and confirm the route appears in the build output as `○ (Static)`
