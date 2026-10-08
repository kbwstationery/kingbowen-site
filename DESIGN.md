---
version: alpha
name: Kingbowen Quiet Product Gallery
description: A concise, image-first B2B whiteboard system combining an airy retail gallery with clear factory proof and direct inquiry paths.
colors:
  primary: "#182225"
  primary-soft: "#334247"
  on-primary: "#FFFFFF"
  secondary: "#596164"
  secondary-strong: "#42494C"
  accent: "#17647A"
  accent-hover: "#125166"
  accent-active: "#0E4153"
  on-accent: "#FFFFFF"
  accent-soft: "#E4EFF1"
  hero-sage: "#5C716D"
  hero-sage-soft: "#A8B7B3"
  surface: "#FFFFFF"
  canvas: "#FBFBFA"
  surface-muted: "#F2F3F1"
  border: "#DADDDC"
  border-strong: "#AEB5B3"
  focus: "#17647A"
  focus-on-dark: "#FFFFFF"
  success: "#227044"
  warning: "#8A5A12"
  error: "#B42318"
  overlay: "rgba(24, 34, 37, 0.72)"
typography:
  display-lg:
    fontFamily: Archivo
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.025em
  display-md:
    fontFamily: Archivo
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Archivo
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Archivo
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.01em
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
  section-mobile: 56px
  section-tablet: 72px
  section-desktop: 96px
  gutter-mobile: 16px
  gutter-tablet: 24px
  gutter-desktop: 32px
  container-max: 1280px
  grid-columns: 12
components:
  utility-bar:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary-strong}"
    typography: "{typography.caption}"
    height: 36px
    padding: 16px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    height: 76px
    padding: 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 20px
  button-primary-hover:
    backgroundColor: "{colors.primary-soft}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 20px
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 20px
  hero-copy-panel:
    backgroundColor: "{colors.hero-sage}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 48px
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 12px
  scenario-card:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 24px
  factory-panel:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 32px
  proof-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 16px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 14px
  textarea-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 14px
  media-control:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 48px
  footer-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 48px
  tooltip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 8px
---

# Kingbowen Quiet Product Gallery

## Overview

The redesign is **quiet, image-first, and commercially direct**. It takes its visual cues from the inspected reference homepage: a pale canvas, a slim utility strip, a spacious white navigation bar, a split hero with one muted color field and one large lifestyle photograph, bold centered section headings, dense product photography, squared controls, and very little ornamental UI. It must feel like a curated product showroom, not a long corporate brochure.

Kingbowen remains the sole brand and factual source. Do not reproduce the reference site's name, logo, Swedish copy, prices, customer marks, product imagery, or data. Use only the project's user-owned media from `public/assets/images/` and `public/assets/videos/`. Existing verified product facts, factory facts, and real contact details remain authoritative.

The homepage narrative should be understood visually in this order: concise brand/product promise; featured whiteboard families; real-use scenarios; retained factory proof; compact inquiry conversion; retained real contact/footer information. Text serves the image rather than competing with it. Each section receives one heading, an optional one-sentence lead, and only the labels needed to understand or act. Eliminate duplicated mission statements, repeated capability claims, repeated contact prompts, long SEO-like paragraphs, and multiple CTAs that lead to the same place.

The factory content is not optional supporting material. The complete existing factory showcase, factory gallery, and honeycomb-panel glue-rolling video functionality must remain present and prominent. Simplification means clearer presentation and less repeated copy, never deletion, hiding, or reduction of factory evidence.

## Colors

The system is mostly neutral and photographic. Color appears as a calm backdrop or action cue, not decoration.

- **Ink (`{colors.primary}`):** headings, navigation, key metadata, footer, and the principal dark button. It provides high contrast on white and canvas surfaces.
- **Body (`{colors.secondary-strong}` / `{colors.secondary}`):** supporting text and captions. Use `{colors.secondary-strong}` for normal-sized text on light surfaces; reserve the lighter secondary for larger supporting copy or metadata where contrast remains compliant.
- **Canvas (`{colors.canvas}`):** the reference-like warm near-white page ground. White sections and image stages use `{colors.surface}`; low-emphasis bands use `{colors.surface-muted}`.
- **Hero sage (`{colors.hero-sage}`):** the muted blue-green hero copy field. White text on this darker accessible interpretation exceeds 4.5:1. `{colors.hero-sage-soft}` may be used only as a non-text image backdrop or decorative field because it does not support small white text.
- **Kingbowen accent (`{colors.accent}`):** inquiry links, selected controls, and the single primary conversion cue when stronger emphasis is needed. White on accent exceeds 4.5:1; hover and active states darken through `{colors.accent-hover}` and `{colors.accent-active}`.
- **Rules (`{colors.border}` / `{colors.border-strong}`):** subtle separators for cards, forms, gallery counters, and navigation. Do not surround every section with a border.
- **Semantic colors:** `{colors.success}`, `{colors.warning}`, and `{colors.error}` are limited to status and validation. Never use them as promotional accents.

Normal text must maintain at least **4.5:1** contrast. Do not place copy directly over a busy photograph unless a consistent dark overlay produces compliant contrast; prefer a separate solid copy panel, as in the split hero.

## Typography

Use the project's existing **Archivo** and **Inter** families rather than copying the reference site's proprietary typography. Archivo provides the broad, confident display voice; Inter keeps B2B details clear.

- Desktop hero uses `{typography.display-lg}`; mobile hero steps down to `{typography.headline-lg}`. Keep the headline to two or three short lines.
- Major desktop section headings use `{typography.headline-lg}` and are centered for product/gallery sections, echoing the clean catalog presentation. On mobile use `{typography.headline-md}`, left aligned except where a short hero statement is intentionally centered.
- Product and scenario titles use `{typography.headline-sm}`. Product category, application label, and factory gallery counter use `{typography.label-caps}` sparingly.
- Reading copy uses `{typography.body-md}`; hero supporting text may use `{typography.body-lg}`. Cap paragraphs at 60–65 characters per line and two to three lines in cards.
- Buttons use `{typography.label-lg}`. Sentence case is preferred; uppercase is limited to very short high-intent labels and always uses positive tracking.
- Keep no more than three font weights in a view: 400, 600, and 700. Avoid italics, decorative scripts, extreme condensed faces, and oversized numeric claims without a verified source.

Copy reduction is part of typography quality: convert repeated paragraphs into one line, merge duplicate proof statements, and let an image plus precise caption replace generic descriptions. Never reduce legally or commercially necessary contact and form labels.

## Layout

Use full-width section bands containing a centered 12-column grid up to `{spacing.container-max}`. Desktop gutters are `{spacing.gutter-desktop}`, tablet gutters `{spacing.gutter-tablet}`, and mobile gutters `{spacing.gutter-mobile}`. Vertical rhythm is `{spacing.section-desktop}` above 1024px, `{spacing.section-tablet}` from 768–1023px, and `{spacing.section-mobile}` below 768px.

**Desktop (representative 1440px viewport).** The utility bar is 36px and contains only the most useful trust/contact item plus compact audience/service links. The 76px main navigation has the Kingbowen brand at left, a small set of primary anchors in the center, and one inquiry action at right. Avoid ecommerce-only icons or controls that the B2B project does not need.

The hero is one continuous 1280px-wide visual block with an approximately 34/66 split and a 420–460px height. The left `hero-copy-panel` contains the short headline, one concise support sentence, and one clear inquiry or product CTA. The right is a real owned image showing the product in context; use `object-fit: cover`, protect the whiteboard as the focal subject, and avoid text baked into imagery. The join is flush, with no gap or radius.

Featured products follow in a 4-column image-led grid at desktop and 2 columns at tablet. The image occupies roughly 75% of each card's perceived area, with product family and one short qualifier below. Do not import reference prices, badges, favorites, or shopping-cart patterns. When products are links, make the entire card clickable while preserving a visible text label.

The required **real-use scenario section** is a three-panel editorial strip using owned imagery: meeting collaboration, classroom teaching, and mobile-whiteboard discussion. Each desktop panel uses a large 4:3 or 3:2 photograph with a short title and one sentence below or in a quiet solid caption block. Prefer visibly different compositions: people collaborating around a wall board, a teacher/classroom interaction, and a standing discussion around a wheeled board. Do not fake these scenes with stock imagery; if a precise scene is unavailable, select the closest truthful existing asset and use a factual caption.

The **factory showcase follows the scenario strip as a major proof section**, not a footer afterthought. Keep every existing factory showcase item and gallery image available. Present a strong section heading and one concise factual introduction, followed by a wide lead factory image and a structured gallery: a 2/3 lead image plus two 1/3 supporting images on desktop, with accessible next/previous controls or a lightbox when the existing feature already provides it. The honeycomb-panel glue-rolling video remains directly in this factory section, visibly labeled, with its existing playback function intact. Give the video a 16:9 stage, poster frame from owned media where available, native or equivalent keyboard-operable controls, captions/transcript when supplied, and no autoplay with sound.

A compact inquiry block follows factory proof. On desktop it is a 5/7 split: short benefit/contact summary at left and the existing inquiry form or inquiry actions at right. Preserve every real contact method and exact current address/phone/email/WhatsApp details, but show the full set once in this conversion block and once in the footer rather than repeating them section by section.

**Mobile (representative 375px viewport).** Use a 64px white header with the brand, one inquiry shortcut, and a 44px menu button. Hide the utility strip and desktop link row; expose the same destinations in a full-height drawer. The hero becomes a stacked block: solid hero copy first, then the image, each full content width. The copy panel has 32px horizontal and 48px vertical padding; the CTA is at least 48px high and may become full width. Keep the hero image around 320–380px high with focal positioning adjusted per asset.

Product cards use a stable 2-column grid at 375px with a 12px gap and square/near-square image stages; switch to one column only when content or localization would make each card narrower than 156px. Scenario panels stack one per row with full-width images. The factory lead image, gallery, and video stack vertically; show the lead image first, the complete gallery second, and the glue-rolling video third. Never hide gallery images or the factory video behind a desktop-only interaction. Inquiry fields stack and span full width. Footer columns collapse into clear grouped rows or accordions while keeping contact details immediately discoverable.

All interactive targets are at least **44×44 CSS pixels**, with at least 8px between adjacent targets. Avoid horizontal page scrolling; only explicitly labelled carousels or chip rails may scroll horizontally, with visible affordances and keyboard alternatives.

## Elevation & Depth

The reference character is flat and editorial. Create hierarchy with image scale, whitespace, neutral surface shifts, and 1px rules rather than floating cards.

- Default content sits directly on `{colors.canvas}` or `{colors.surface}` with no shadow.
- Product and scenario cards have either no border or a single `1px solid {colors.border}` separator; do not use both a heavy border and shadow.
- Sticky navigation may use a bottom border plus `0 2px 8px rgba(24, 34, 37, 0.06)` only after scrolling.
- Gallery lightboxes and the mobile drawer use `{colors.overlay}`. Their white panels may use `0 12px 40px rgba(24, 34, 37, 0.18)` so they remain legible against the media behind them.
- Hover feedback should be restrained: image opacity or 1.01 scale over 180ms, link underline, or a surface change. Never use large zooms, glow, parallax, or bouncing motion.

Respect `prefers-reduced-motion`: remove nonessential image scaling and sliding; use an immediate state change or a short opacity transition. Content must remain understandable with all animation disabled.

## Shapes

The system is predominantly square and architectural, matching the reference site's flush hero panels and rectangular product imagery.

- `{rounded.none}` is the default for hero panels, product image stages, buttons, inputs, scenario frames, factory gallery tiles, and the video stage.
- `{rounded.sm}` and `{rounded.md}` are reserved for small utility surfaces and compact notices.
- `{rounded.lg}` or `{rounded.xl}` may appear only on overlays, drawer panels, and exceptional floating feedback; do not round every card.
- `{rounded.full}` is limited to carousel dots, status indicators, and circular media controls.

Use 1px borders. Icons are simple 1.5–2px monoline SVGs using `currentColor`. Keep product and factory photography rectangular; never mask whiteboards into circles or decorative blobs.

## Components

**Header and navigation.** `utility-bar` is a slim desktop-only strip with low-noise contact/trust information. `nav-bar` is white, horizontally calm, and never taller than the hero needs. Active navigation uses a 2px underline or clear weight change, not color alone. The mobile drawer opens from the menu button, traps focus, closes on Escape, returns focus to the trigger, and uses an explicit close label.

**Hero.** `hero-copy-panel` must remain a separate solid field so text is always readable. Include one H1, one short supporting sentence, and no more than two actions; one is preferred. The image is equally important and should show a real product being used, not a generic factory exterior. On mobile the exact order is copy then image.

**Buttons and links.** `button-primary` is the neutral high-intent action and `button-accent` is reserved for the main inquiry conversion. Use one filled priority action per section. Hover changes color, active uses `{colors.accent-active}` where applicable, and disabled states reduce contrast while retaining a readable label. Every interactive element gets a 2px `{colors.focus}` `:focus-visible` outline with 2px offset on light surfaces and `{colors.focus-on-dark}` on dark/hero surfaces. Underline inline links on hover and focus; never remove outlines.

**Product cards.** `product-card` is image first, then optional category eyebrow, product-family title, and at most one concise specification/value line. No copied prices, sale labels, favorite hearts, or cart affordances. Loading uses an aspect-ratio-preserving neutral skeleton; image errors retain the product name and a neutral fallback, never a broken icon.

**Scenario cards.** `scenario-card` presents one owned application image and a compact factual caption. Use exactly the three required intent categories—meeting collaboration, classroom teaching, and mobile-whiteboard discussion—while adapting wording to the actual asset. If cards are interactive, the entire card has a 44px minimum target and a visible focus state; if they are purely explanatory, do not add fake buttons.

**Factory gallery and video.** The factory section retains all existing showcase content and functionality. Gallery thumbnails show current/total position in text, include descriptive alt text, and expose previous/next buttons with accessible names. A lightbox closes via visible control, backdrop, and Escape without losing the user's place. The honeycomb-panel glue-rolling video uses the existing owned video source and playback behavior. `media-control` provides at least 48px controls; keyboard users can play/pause, seek, mute, adjust volume, and enter/exit fullscreen. Do not autoplay audio, remove controls, substitute a static image, or demote the video into an unrelated modal-only element.

**Inquiry.** Preserve the existing inquiry route, real contact values, and form behavior. Keep persistent labels above `input-field` and `textarea-field`; placeholders are examples, not labels. Required status is conveyed in text. Error states use `{colors.error}` plus an icon or message and `aria-describedby`; do not rely on border color alone. On submission, maintain button width, announce loading, then show a clear success or recoverable error state. Direct contact links remain available if form submission fails.

**Media.** Use only files already owned by the user in `public/assets/images/` and `public/assets/videos/`. Product images favor square or 4:3 crops; scenarios favor 3:2; factory lead and video favor 16:9. Set explicit dimensions/aspect ratios to prevent layout shift, provide meaningful alt text for informative images, use empty alt text for decoration, and lazy-load below-the-fold media without lazy-loading the hero image.

**Footer.** `footer-band` is the single dark close. It contains compact product/factory anchors, the existing real contact information, and required legal text. Do not repeat long company descriptions. Contact links must be real, selectable, keyboard reachable, and large enough to tap.

## Do's and Don'ts

- Do lead with owned product and application photography; do keep text short enough that images dominate each section.
- Do preserve the complete existing factory showcase, every factory gallery asset and interaction, and the honeycomb-panel glue-rolling video functionality at full prominence.
- Do preserve Kingbowen facts, brand, inquiry paths, and exact real contact details; verify against the existing project rather than inventing replacements.
- Do use the reference-derived structure: slim utility/navigation, flush split hero, centered gallery heading, image-dense product grid, editorial scenario strip, and spacious neutral bands.
- Do enforce at least 4.5:1 contrast for normal text, 3:1 for large text and essential graphical controls, and 44×44 CSS-pixel touch targets.
- Do make focus visible, trap and restore focus in overlays, support Escape, expose carousel/gallery position in text, and honor reduced-motion preferences.
- Do keep desktop and mobile image crops intentionally art-directed so the whiteboard, users, and relevant factory operation remain visible.
- Do consolidate repeated copy into one useful statement and repeat contact information only in the inquiry block and footer.
- Don't copy the reference site's trademark, logo, Swedish text, prices, product/customer data, imagery, or ecommerce-specific interface.
- Don't source new stock media or external media; use only `public/assets/images/` and `public/assets/videos/`.
- Don't delete, collapse into a token mention, hide on mobile, or visually weaken the factory gallery or glue-rolling video.
- Don't convert the page into a uniform stack of text-heavy cards; alternate the split hero, product grid, three-scene strip, factory mosaic/video, and compact inquiry block.
- Don't use long SEO paragraphs, repeated factory statistics, multiple equivalent CTAs, unsupported claims, fabricated metrics, or placeholder customer logos.
- Don't use gradients, decorative blobs, glass effects, oversized shadows, rounded primary buttons, autoplaying sound, or motion that is necessary to understand content.
- Don't place critical copy over uncontrolled photography or communicate hover, selection, progress, error, or playback state by color alone.
