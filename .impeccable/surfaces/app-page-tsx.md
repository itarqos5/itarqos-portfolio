---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/HeroSection.tsx","components/Footer.tsx"]
---

# Home portfolio

## Scope and mode

The homepage is an Experience surface for potential clients, employers, and open-source collaborators.

## Visitor job and action

Visitors should understand Literal's technical range, inspect real work and feedback, and contact Literal on Discord. GitHub remains the main secondary path.

## Direction

The approved composition combines `.impeccable/mocks/orbital-hero.png` and `.impeccable/mocks/eclipse-aperture.png`: oversized left-set typography faces a circular grayscale profile framed by a white eclipse and moving orbital paths. The close repeats Discord at large scale.

## Implementation inventory

- Navigation: fixed monochrome bar with plain text anchors and a white Discord control; semantic HTML.
- Hero: Barlow Condensed headline, semantic copy and links, generated eclipse treatment based on the supplied profile image, CSS orbital geometry, and canvas star field.
- Projects: three full-width editorial rows with real repository links; semantic HTML and Framer Motion.
- Servers: light table-like list with real remote icons and plain status text.
- Reviews: large pull quotes with existing avatars and text.
- Skills: concentric CSS circles, labeled language nodes, and a slow orbital path.
- Technologies: monochrome text marquee with pause on hover and reduced-motion fallback.
- Primary action: solid white Discord controls in the hero and a large text link in the footer.

## Component rules

Corners stay square except for circular orbital elements and small status marks. Lines are one pixel. There are no decorative shadows on content containers. Display type is condensed and large; body copy uses Geist; telemetry labels use Geist Mono. Motion is slow orbit, star drift, and limited section reveal.

## Constraints

Preserve current sections, factual content, profile image, reviews, projects, server history, and links. Use black, white, and neutral grays only. Respect reduced-motion settings. Avoid invented metrics, claims, and marketing language.
