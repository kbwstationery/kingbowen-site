---
version: alpha
name: Kingbowen Industrial Precision
description: Factory-direct B2B visual presentation systems — deep slate authority bands, anodized-aluminum light surfaces, and a single industrial tech blue.
colors:
  primary: "#0F172A"
  primary-soft: "#1E293B"
  primary-line: "rgba(255, 255, 255, 0.10)"
  on-primary: "#F8FAFC"
  on-primary-muted: "#94A3B8"
  secondary: "#475569"
  secondary-muted: "#64748B"
  tertiary: "#2563EB"
  neutral: "#F8FAFC"
  surface: "#FFFFFF"
  surface-sunken: "#F1F5F9"
  on-accent: "#FFFFFF"
  border: "#E2E8F0"
  border-strong: "#CBD5E1"
  accent: "#2563EB"
  accent-hover: "#1D4ED8"
  accent-active: "#1E40AF"
  accent-text: "#0369A1"
  accent-soft: "#E0F2FE"
  accent-signal: "#0284C7"
  accent-on-dark: "#38BDF8"
  focus-ring: "#2563EB"
  focus-ring-dark: "#38BDF8"
  success: "#15803D"
  warn: "#B45309"
  error: "#DC2626"
  overlay: "rgba(15, 23, 42, 0.72)"
typography:
  display-xl:
    fontFamily: Archivo
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.03em
    fontFeature: '"tnum"'
  display-lg:
    fontFamily: Archivo
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Archivo
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Archivo
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.1em
  metric-lg:
    fontFamily: Archivo
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
    fontFeature: '"tnum"'
  metric-sm:
    fontFamily: Archivo
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.015em
    fontFeature: '"tnum"'
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 450
    lineHeight: 1.5
    letterSpacing: 0.015em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  base: 4px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-sm: 48px
  section-md: 72px
  section-lg: 112px
  gutter: 24px
  gutter-tablet: 20px
  gutter-phone: 16px
  container-max: 1280px
  grid-columns: 12
components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    height: 72px
    padding: 24px
  nav-link-active:
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  nav-cta-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 20px
  nav-cta-whatsapp:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 20px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 24px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-active}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 24px
  button-secondary-hover:
    backgroundColor: "{colors.neutral}"
  button-on-dark:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 24px
  hero-metric-pill:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 20px
  trust-bar:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: 32px
  trust-metric-value:
    textColor: "{colors.primary}"
    typography: "{typography.metric-sm}"
  certification-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 12px
  chip-category:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 16px
  chip-category-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  card-product:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-product-hover:
    backgroundColor: "{colors.neutral}"
  card-capability:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: 32px
  spec-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    height: 48px
    padding: 12px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 16px
  input-field-focus:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  textarea-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  checkbox-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    size: 24px
  volume-tier-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 56px
    padding: 16px
  volume-tier-option-selected:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
  rfq-step-marker:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary-muted}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    size: 32px
  rfq-step-marker-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  notice-case-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  footer-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 48px
  footer-link:
    textColor: "{colors.on-primary-muted}"
    typography: "{typography.body-sm}"
  tooltip:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 8px
---

# Kingbowen Industrial Precision

## Overview

Kingbowen's visual identity is **Industrial Precision**: German-engineered exactness rendered with Scandinavian restraint. The page is built from two alternating bands — a **Deep Slate machine-bay band** (`{colors.primary}` `#0F172A`) that carries authority, certification, and the hero claim, and an **anodized-aluminum light band** (`{colors.surface}` `#FFFFFF` / `{colors.neutral}` `#F8FAFC`) that carries catalog browsing, spec data, and the inquiry funnel. The rhythm between them is the page's signature: dense dark confidence, then generous light clarity, never a continuous gradient wash.

The brand is a 2003-founded Guangdong manufacturer selling factory-direct rolling whiteboards, flip-chart easels, architectural dry-erase walls, glass and desktop boards, and tamperproof notice cases to European and North American wholesale distributors, corporate procurement teams, and educational buyers. Those buyers are risk-averse and comparison-driven: they scan for verified capability, then for evidence that customization and volume orders will not go wrong. The interface must therefore read as **verified hardware**, not as marketing theatre.

Key characteristics:

- **Hairlines over shadows.** Structure is drawn with crisp 1px rules (`{colors.border}` `#E2E8F0`, `{colors.border-strong}` `#CBD5E1`, `{colors.primary-line}` on dark) rather than soft blurred elevation. Cards, spec rows, and table cells are separated by rules that read like drawing-board annotations.
- **Slate and steel, one blue.** The palette is 70–90% achromatic slate/aluminum; the single chromatic accent is Industrial Tech Blue, spent on the primary conversion action and the active state — never as decoration.
- **Engineered typography.** Archivo carries display and uppercase eyebrow/label text with negative tracking at large sizes; Inter carries all reading text. Factory metrics, dimensions, and volume tiers are set in Archivo with tabular figures (`"tnum"`) so numerals align in columns like an inspection sheet.
- **Spec-sheet density where it earns its place.** Capability, tolerance, and volume data use tight 48px rows; narrative sections breathe at 112px vertical rhythm. The contrast between dense and open is deliberate (Von Restorff), signalling where to read and where to extract numbers.
- **Photography of real product.** Full-bleed or large-format photography of double-sided mobile boards, aluminum frames, wheel assemblies, and production-floor stations. No illustration stand-ins, no abstract gradient blocks, no decorative blob geometry.
- **Restraint as trust.** One accent action per viewport, three font weights, no emoji iconography. Refined silence reads as manufacturing confidence to a procurement manager.

## Colors

The palette is a four-layer system: slate neutrals, an aluminum light-surface tier, a single industrial blue accent, and a minimal semantic set.

- **Primary Deep Slate (`{colors.primary}` `#0F172A`):** headline color on light bands and the full-bleed surface for the hero band, capability band, and footer. Deep enough for 17.9:1 contrast against white text, so certification and factory claims can sit inside it as solid type rather than as tinted cards.
- **Primary Soft (`{colors.primary-soft}` `#1E293B`):** the elevated tier inside dark bands — hero metric pill, on-dark buttons, and nested panels. Elevation inside a dark band comes from this luminance step plus `{colors.primary-line}` hairlines, never from a drop shadow.
- **Secondary Steel (`{colors.secondary}` `#475569`):** body copy, spec values, and supporting sentences on light surfaces (7.6:1 on white, 7.3:1 on the light canvas). **Secondary Muted (`{colors.secondary-muted}` `#64748B`)** handles captions, units, and metadata only, still clearing 4.5:1 on both light surfaces.
- **Tertiary Industrial Blue (`{colors.tertiary}` `#2563EB`):** the accent, aliased as `{colors.accent}`. Used as a fill for the primary conversion action (white label = 5.2:1) and as `{colors.accent-text}` `#0369A1` whenever blue must be text or an inline link on light (5.9:1). `{colors.accent-hover}` `#1D4ED8` and `{colors.accent-active}` `#1E40AF` are the interaction steps.
- **Accent Soft (`{colors.accent-soft}` `#E0F2FE`):** the only permitted tint. It marks a selected volume tier or an eyebrow chip; its labels always pair with `{colors.accent-text}` or `{colors.primary}` (5.2:1+).
- **Accent Signal (`{colors.accent-signal}` `#0284C7`):** reserved for large-format data graphics on slate — dimension rules, plotted callouts, oversized numerals at 24px and above. It is not a text color for small copy.
- **Accent on Dark (`{colors.accent-on-dark}` `#38BDF8`):** the blue that survives on slate (8.3:1), used for on-dark links, active nav underlines, and the "4-hour quote" promise marker.
- **Neutral / Aluminum (`{colors.neutral}` `#F8FAFC` and `{colors.surface-sunken}` `#F1F5F9`):** the light canvas and recessed band backgrounds that separate the trust bar from adjacent white sections.
- **Borders (`{colors.border}` `#E2E8F0`, `{colors.border-strong}` `#CBD5E1`):** all structure. 1px hairline by default, the stronger value only for table headers and selected chips, which also need 3:1 against their surface.
- **Semantic set:** `{colors.success}` `#15803D` (in-stock, "quote sent"), `{colors.warn}` `#B45309` (lead-time or document-pending notes), `{colors.error}` `#DC2626` (form validation only). All three clear 4.5:1 on white.
- **Overlay (`{colors.overlay}`):** the dialog and mobile-drawer scrim, a slate-tinted 72% veil that preserves the band identity instead of turning the page grey.

Accent discipline is a hard rule: **at most two visible accent uses per viewport** — typically the selected category chip and the primary CTA. Links on light bands use `{colors.accent-text}`; if a viewport already shows a filled blue CTA, demote that viewport's links to underlined `{colors.primary}`. Never introduce a second chromatic hue; blue-slate is the entire system. Two-stop trust gradients are prohibited.

## Typography

Two typefaces, three weights, one measurement voice.

- **Display — Archivo** (`fontFamily: Archivo`), weights 600, with a system fallback chain of `"Archivo", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Archivo's closed apertures and flat terminals give headlines an engineered, plate-metal quality that suits 19,000 m² of production capacity. Display sizes use negative tracking that tightens as size grows: `-0.03em` at `{typography.display-xl}` (60px), `-0.025em` at `{typography.display-lg}` (48px), relaxing to `0em` at body sizes.
- **Body — Inter** (`fontFamily: Inter`), weights 400/500/600, fallback `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. All reading text: sub-headlines, product descriptions, capability copy, form labels, and footer detail. Body line height is 1.6 (`{typography.body-md}` 16px) with line length capped at **65ch**.
- **Measurement — Archivo with tabular figures.** `{typography.metric-lg}` (40px) and `{typography.metric-sm}` (24px) carry the trust-bar values, factory dimensions, and volume-tier numbers with `fontFeature: '"tnum"'`. Numbers must align in a column; a proportional-digit metric row looks careless to a buyer comparing quotes.
- **Eyebrows and labels — `{typography.label-caps}`** (Archivo 12px/600) is strictly uppercase with `0.1em` tracking: category labels, section eyebrows, and step markers such as `01 / CATEGORY`. Uppercase never appears without this positive tracking.
- **Hierarchy usage:** one `{typography.display-xl}` headline per page (hero); `{typography.display-lg}` for band headlines; `{typography.headline-lg}`/`{typography.headline-md}` for section titles; `{typography.headline-sm}` for card and product titles; `{typography.body-lg}` for hero sub-headline and lead paragraphs; `{typography.body-sm}` inside dense spec rows and the footer; `{typography.caption}` for units, SKUs, and legal lines.
- **Weight discipline:** 400 reads, 500–600 announces. No 700+ display weight, no italics, and no more than two type sizes visible at the same hierarchy level on one screen.

## Layout

A **fixed-max-width 12-column grid** (max `{spacing.container-max}` 1280px) with fluid gutters: `{spacing.gutter}` 24px desktop, `{spacing.gutter-tablet}` 20px tablet, `{spacing.gutter-phone}` 16px mobile. Sections are full-bleed bands; content is constrained inside them, and adjacent bands alternate surface (`{colors.surface}` / `{colors.neutral}` / `{colors.primary}`) so section boundaries read as machined seams rather than as floating cards.

A strict 4px base scale governs everything: `{spacing.xxs}` 4, `{spacing.xs}` 8, `{spacing.sm}` 12, `{spacing.md}` 16, `{spacing.lg}` 24, `{spacing.xl}` 32, `{spacing.xxl}` 48. Vertical section rhythm uses the larger stops: `{spacing.section-lg}` 112px desktop, `{spacing.section-md}` 72px tablet, `{spacing.section-sm}` 48px mobile. Grouping follows proximity: 8–12px inside a group (label → value), 32–48px between groups.

Composition rules:

- **Hero band** is an asymmetric 7/5 split on slate: headline and dual CTAs in the wide column, a product image with one floating metric pill (`hero-metric-pill`) overlapping its lower edge in the narrow column. On screens below 1024px it collapses to a single column with the image directly under the CTAs.
- **Trust bar** is a single hairline-ruled strip (`{colors.border}`) inside the light canvas holding five verified metrics in equal columns, values set at `{typography.metric-sm}` above `{typography.caption}` labels. Below 768px it scrolls as a horizontal snap rail of five 220px cells rather than wrapping into uneven rows.
- **Category matrix** uses a 3-column product grid on desktop (2 columns at 768–1023px, 1 column below 768px), with category selection handled by a horizontal chip rail above it rather than nested tabs.
- **Capability and scenario sections** break the card rhythm deliberately: capability uses full-width spec rows (label left, value right, 48px `spec-row` height), and application scenarios use a 4-up equal grid of slate panels. At least two distinct section archetypes must be present; never render every section as the same image-left/text-right block.
- **RFQ funnel** is a two-column layout on desktop: a sticky 5-column summary rail (selected products, volume tier, promise chips) beside a 7-column stepped form. On mobile the summary collapses into a compact sticky footer bar and the form goes single column.
- **Touch targets:** every interactive element measures at least **44×44 CSS pixels** (`button-primary` 52px, `nav-cta-primary` 48px, `chip-category` 44px, `hero-metric-pill` 44px, `input-field` 48px, `rfq-step-marker` 32px visual inside a 44px hit area). Adjacent hit zones keep at least 8px separation.
- **Focus behavior:** `:focus-visible` renders a 2px `{colors.focus-ring}` ring with a 2px offset on light surfaces and `{colors.focus-ring-dark}` on slate bands. Focus is never removed and never replaced by color alone; the ring is a non-color-dependent, always-visible outline paired with the state change.
- **Responsive collapsing:** display sizes step 60 → 48 → 34px; navigation collapses to a drawer at 768px with the RFQ CTA remaining visible in the bar; footers stack from 4 columns to 2 to 1; section rhythm steps 112 → 72 → 48px.

## Elevation & Depth

Depth is **structural, not optical**. This system rejects soft ambient shadows on cards; hierarchy is carried by surface contrast, 1px hairlines, and a single crisp ring.

- **Light bands (Level 0–2).** Level 0 is the `{colors.neutral}` canvas. Level 1 is a `{colors.surface}` panel bounded by `1px solid {colors.border}` with `{rounded.lg}` corners. Level 2 — only for the product image stage and the RFQ summary rail — adds a tight ring rather than a blur: `0 1px 2px rgba(15, 23, 42, 0.04), 0 0 0 1px {colors.border}`. No 20px-blur elevation anywhere.
- **Dark bands (Level 3–4).** On slate, elevation is luminance stepping: `{colors.primary}` base → `{colors.primary-soft}` panel → panel plus `{colors.primary-line}` hairline. Depth never comes from dark-on-dark shadow.
- **Sticky navigation.** At rest the navbar is `{colors.surface}` with a bottom `1px solid {colors.border}`. Once scrolled past the hero it retains the hairline and adds a 1px `rgba(15, 23, 42, 0.06)` contact shadow so the seam stays visible over slate bands.
- **Overlays and dialogs.** Mobile drawer, product lightbox, and the "quote sent" confirmation use `{colors.overlay}` scrim with a `{colors.surface}` panel, `{rounded.xl}` corners, and the Level-2 ring stack. Overlay panels keep the crisp border visible against the scrim so they read as an instrument panel, not a floating cloud.
- **Inset details.** Engraved effects (a metric pill seated in a slate band, a spec-value well) use a 1px inset line in `{colors.primary-line}` with no blur, imitating a milled recess.

## Shapes

The shape language is **engineered geometry**: rectilinear, tight radii, and corners that look manufactured rather than friendly.

- `{rounded.none}` 0px — full-bleed band edges, spec table cells, and image frames butting against section seams.
- `{rounded.sm}` 2px — certification badges, eyebrows, tinted chips, tooltips. The near-square corner is what makes them read as labels stamped on a part.
- `{rounded.md}` 4px — every control: buttons, inputs, textareas, volume-tier options, select triggers.
- `{rounded.lg}` 8px — product cards, capability panels, notice-case showpieces, the RFQ summary rail.
- `{rounded.xl}` 12px — the largest containers only: dialogs, mobile drawer, hero image stage.
- `{rounded.full}` 9999px — status pips, the floating hero metric pill, and step markers. Pill shapes are reserved for *status and position*, never for primary buttons.

Borders are always exactly 1px and always a token: `{colors.border}` for panel and divider hairlines, `{colors.border-strong}` for table headers and selected chips, `{colors.primary-line}` on slate. Icons are monoline SVG at 1.6–1.8px stroke using `currentColor`; a rounded card with a colored left-border accent is explicitly out of the system. Do not mix 2px, 4px, and 8px radii in the same cluster.

## Components

**Buttons.** `button-primary` is the conversion action: `{colors.accent}` fill, `{colors.on-accent}` label in `{typography.label-lg}`, `{rounded.md}`, 52px high — it appears once per viewport. Hover steps to `{colors.accent-hover}`, press to `{colors.accent-active}`, and both also shift 1px down to confirm the press. `button-secondary` is the equal-weight alternative (white fill, `1px {colors.border-strong}` border, `{colors.primary}` label) for "Explore Custom Solutions". `nav-cta-whatsapp` and `button-on-dark` use the slate `{colors.primary-soft}` fill with `{colors.on-primary}` label for direct-contact actions on light and dark bands respectively. All buttons hold a 44px minimum height, 8px minimum separation, and a `:focus-visible` ring in `{colors.focus-ring}` / `{colors.focus-ring-dark}`. Disabled buttons drop to `{colors.surface-sunken}` fill with `{colors.secondary-muted}` label and no ring; loading buttons keep their width, swap the label for a monoline spinner plus the verb ("Sending…"), and stay non-interactive.

**Navigation.** `nav-bar` is a 72px sticky bar, `{colors.surface}` background, `{colors.primary}` wordmark, and `{typography.label-md}` links for Product Matrix, OEM/ODM Capabilities, Certifications, and Factory. The active link is `nav-link-active` with a 2px `{colors.accent-on-dark}` underline; hover only changes label to `{colors.primary}` at weight 600. On slate bands the bar switches to `{colors.primary}` background with `{colors.on-primary}` links and a `{colors.primary-line}` bottom rule. At 768px the links collapse into a drawer; the primary RFQ CTA and the WhatsApp control remain visible.

**Category chips.** `chip-category` is a 44px-high, `{rounded.sm}`, `1px {colors.border}` chip with `{colors.secondary}` label for filtering the product matrix across mobile rolling whiteboards, flip-chart easels and stands, wall-mounted dry-erase boards, glass and desktop boards, and tamperproof notice cases. The selected chip uses `chip-category-selected` — `{colors.primary}` fill, `{colors.on-primary}` label — plus a "Selected" state that is announced in text for assistive technology, never conveyed by color alone. Chips sit in a horizontally scrollable rail on mobile with a visible fade edge.

**Product cards.** `card-product` is a white panel with `1px {colors.border}`, `{rounded.lg}`, 24px padding, a 4:3 product photograph on a `{colors.neutral}` stage, a `{typography.label-caps}` category eyebrow, a `{typography.headline-sm}` title, and two to three `spec-row`-density spec lines (board size, wheel load rating, frame profile). Hover swaps the surface to `card-product-hover` (`{colors.neutral}`) and lifts the image stage by 1px — no scale transform, no shadow bloom. Each card ends with a text link in `{colors.accent-text}` to the matching RFQ pre-selection.

**Capability panels and spec rows.** `card-capability` is a slate panel with `{colors.on-primary}` type for engineering and OEM/ODM topics: custom frame profiles, laser branding, custom grid and ruling printing, packaging design, and drop/abrasion testing. Quantitative claims live in the adjacent `spec-row` list — 48px rows, label in `{colors.secondary}` (`{typography.body-sm}`), value right-aligned in `{colors.primary}`, separated by 1px `{colors.border}`; values use tabular figures.

**Trust and certification elements.** `trust-bar` is a `{colors.neutral}` strip of five cells, each pairing a `{typography.metric-sm}` value in `{colors.primary}` with a `{typography.caption}` label in `{colors.secondary-muted}`. `certification-badge` is a 44px, `{rounded.sm}`, white badge listing ISO 9001:2015 and BSCI, with a monoline check glyph. Only metrics supplied by the manufacturer may be displayed: the 19,000+ m² facility, ISO 9001:2015, BSCI, 100+ patents, 50+ export markets, and the 2003 founding year. Never introduce a fabricated percentage or multiplier.

**Hero metric pill.** `hero-metric-pill` is a `{rounded.full}`, 44px-high slate pill overlapping the hero image edge, holding one `{typography.metric-sm}` figure plus a `{typography.label-md}` caption in `{colors.on-primary}`. It is the only pill-shaped element above the fold.

**RFQ form.** The inquiry funnel is a stepped form with `rfq-step-marker` circles (32px visual, 44px hit area) in `{colors.neutral}` / `{colors.secondary-muted}` at rest and `rfq-step-marker-active` (`{colors.accent}` fill, `{colors.on-accent}` label) for the current step, plus an honest "Step 2 of 3" text label so progress is never color-only. Inputs are `input-field` (48px, `{rounded.md}`, `1px {colors.border}`, `{colors.primary}` value text) with persistent `{typography.label-md}` labels above the control — never placeholder-only labels. Focus applies `input-field-focus` with the 2px `{colors.focus-ring}` ring and a `{colors.border-strong}` border. Invalid fields use a `{colors.error}` 1px border, an inline message in `{colors.error}` at `{typography.body-sm}`, and an `aria-describedby` link; errors appear on blur or submit, never while the user is still typing. `volume-tier-option` rows (56px) encode wholesale quantity bands; the chosen band uses `volume-tier-option-selected` (`{colors.accent-soft}` fill) with a check glyph. `textarea-field` handles the project brief at `{typography.body-md}`, and `checkbox-field` (24px visual inside a 44px row) captures sample-request and NDA consent with visible labels. `rfq-submit` is a full-width 56px accent button; after success the panel is replaced by a confirmation state that restates the 4-hour quote guarantee, the submitted product list, and the direct WhatsApp / email fallbacks. Field-level loading, empty, success, and error states are all required — no silent failures.

**Tooltips and helper text.** `tooltip` is a slate `{rounded.sm}` chip for explaining trade terms (FOB, MOQ, container load); it opens on hover and focus, and closes on Escape. Compliance and privacy notes render as plain `{typography.caption}` text in `{colors.secondary-muted}` beneath the form rather than as tooltips.

**Footer band.** `footer-band` is the full-bleed slate close: four columns (factory credentials, product matrix, contact, legal) with `{typography.body-sm}` copy, headings in `{typography.label-caps}` `{colors.on-primary}`, `footer-link` items in `{colors.on-primary-muted}` (6.97:1), a direct WhatsApp and email pair rendered as `button-on-dark`, and a bottom bar separated by `{colors.primary-line}` carrying the copyright line.

## Do's and Don'ts

- Do keep normal text at 4.5:1 or better against its surface — `{colors.primary}` (17.9:1), `{colors.secondary}` (7.6:1), `{colors.secondary-muted}` (4.8:1), `{colors.on-primary}` (17.1:1), and `{colors.on-primary-muted}` (7.0:1) are the safe pairs. Large text (≥24px, or ≥18.7px bold) may drop to 3:1 for elements such as `{typography.metric-lg}`.
- Do guarantee a minimum 44×44 CSS-pixel hit area on every button, chip, input, step marker, and footer contact control, with at least 8px between adjacent targets.
- Do keep `:focus-visible` visible on every interactive element — 2px `{colors.focus-ring}` on light, `{colors.focus-ring-dark}` on slate — and never signal selection or error by color alone.
- Do spend the accent once per viewport: one filled blue conversion action, and at most one accent-tinted selected state. Use `{colors.accent-text}` for links on light. Underlined `{colors.primary}` is the fallback when a viewport already carries a filled CTA.
- Do alternate the slate and aluminum bands so each section boundary reads as a deliberate seam, and vary section archetypes (asymmetric hero, metric strip, product grid, full-width spec rows, panel grid, two-column funnel).
- Do set every metric, dimension, and quantity in Archivo with tabular figures so columns align, and always pair a number with a `{typography.caption}` unit label.
- Do write specific, buyer-relevant microcopy — "Get Instant RFQ", "Download Catalog & Request Sample", "Quote in 4 working hours" — instead of generic filler.
- Do use monoline 1.6–1.8px `currentColor` SVG icons and real product photography on `{colors.neutral}` stages.
- Don't use two-stop trust gradients, purple/indigo accents, glow effects, or decorative blob and wave geometry.
- Don't use emoji as feature icons, lorem ipsum, or "feature one / two / three" placeholder copy anywhere.
- Don't display a metric the manufacturer has not supplied — no invented uptime, speed, or productivity multipliers; the verification bar carries only the 19,000+ m² facility, ISO 9001:2015, BSCI, 100+ patents, 50+ export markets, and the 2003 founding year.
- Don't soften the geometry: no pill-shaped primary buttons, no 16px+ card radii, no rounded card carrying a colored left-border accent, and no mixed radii inside one cluster.
- Don't use blurred ambient card shadows or dark-on-dark drop shadows; depth comes from hairlines, the Level-2 ring stack, and luminance stepping on slate.
- Don't set uppercase text below `0.06em` tracking, display text without negative tracking, or more than three font weights in one view; never use `system-ui` alone on a headline.
- Don't let body copy exceed 65ch, and never justify text.
- Don't let the product matrix collapse into an interchangeable card grid — each category keeps its own photograph composition, spec set, and category eyebrow.
- Don't hide required RFQ fields, ship a form without visible labels and post-submit confirmation, or omit loading and error states from the inquiry funnel.
