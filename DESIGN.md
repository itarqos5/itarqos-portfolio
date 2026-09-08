---
name: Literal Portfolio
description: A developer's corner of the Minecraft Ocean.
colors:
  ink: "#0b1726"
  paper: "#edf5fc"
  muted: "#a6bed2"
  accent: "#8bd2f3"
  line: "#2b4660"
  inventory: "#cedfeb"
typography:
  display:
    fontFamily: "Minecraft Ten, sans-serif"
    fontSize: "clamp(48px, 5.45vw, 83px)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Minecraft Ten, sans-serif"
    fontSize: "clamp(34px, 3.5vw, 51px)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "15px"
    fontWeight: 400
  label:
    fontFamily: "Minecraft Seven, sans-serif"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  compact: "12px"
  medium: "24px"
  section: "100px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#0d1a25"
    rounded: "{rounded.square}"
    padding: "14px 21px"
  button-primary-hover:
    backgroundColor: "#a1cbed"
  button-secondary:
    backgroundColor: "#0b1726b0"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 21px"
  button-secondary-hover:
    backgroundColor: "#1e3242"
---

# Design System: Literal Portfolio

## Overview

**Creative North Star: "A developer's corner of the Overworld"**

Literal's user-selected Minecraft identity combines authentic game scenery with deep deep blue fields and pale cyan accents. Large pixel lettering establishes the world; ordinary sans-serif descriptions keep the developer's work readable. Real projects, people, and links supply the content.

The interface is square and mostly flat. Landscape crops provide atmosphere, ruled lists organize evidence, and a pale inventory surface introduces the game's native inset material. This records the implemented Minecraft replacement; the former monochrome orbital system is superseded.

**Key Characteristics:**

- Authentic Minecraft scenery with dark overlays for foreground text.
- Minecraft Ten headings, Minecraft Seven short labels, and Geist reading copy.
- Ocean fields, sea blue actions, and a pale inventory section.
- Square imagery, open project entries, ruled records, and inset inventory slots.
- Optional landscape motion with a system reduced-motion fallback.

## Colors

Green-tinted neutrals connect the interface to its landscapes without competing with their original color.

### Primary

- **Sea Blue Accent:** Primary actions, heading emphasis, hover feedback, and keyboard focus on dark fields.

### Neutral

- **Ocean Ink:** Page field, mobile navigation, and dark foreground against the accent.
- **Pale Paper:** Main foreground on deep blue fields.
- **Muted Sage:** Descriptions and secondary information.
- **Ocean Line:** Quiet section, list, and review dividers.
- **Pale Inventory:** The broad light toolkit field, with dark deep blue text.

### Named Rules

**The Landscape Rule.** Keep authentic scenery in its original color family and use dark overlays where text sits over it.

## Typography

**Display Font:** Minecraft Ten, with sans-serif fallback.
**Body Font:** Locally loaded Geist, with sans-serif fallback.
**Label Font:** Minecraft Seven, with sans-serif fallback.

The type ramp is deliberately discontinuous: block-shaped headings dominate, while Geist handles compact descriptions and quotes. Minecraft Seven supplies short game-like labels and the wordmark. Both Minecraft faces are locally hosted at regular weight.

### Hierarchy

- **Display:** The fluid hero uses the frontmatter scale. Its mobile range is 37–58px with a 1.24 line-height; its wide-screen override is 90px.
- **Headline:** Section headings use the frontmatter scale, reducing to a 30–43px range on mobile. Accent spans maintain hierarchy inside a heading.
- **Title:** Project names use Geist at 16px and weight 500; image titles use Minecraft Ten.
- **Body:** The base is 15px. Main supporting paragraphs use 14px with a 1.8 line-height; reviews use 15px with a 1.85 line-height. Descriptions generally stop around 32–48 characters per line.
- **Label:** Minecraft Seven is reserved for short labels. Final readability overrides set project tags, server metadata, inventory names, footer copy, and related small reading text to 11px.

### Named Rules

**The Reading Rule.** Use pixel faces for identity and short statements, and Geist for paragraphs, reviews, and detailed records.

## Layout

Main content is centered at a maximum width of 1240px with 56px desktop gutters. Navigation can extend to 1360px. At 1100px and below, both use 32px gutters; at 760px and below, gutters become 20px. Repeated sections use the desktop and mobile spacing tokens.

Desktop project and review groups use three columns. Experience and toolkit pair a narrower introduction with a wider content region. At the mobile breakpoint these become single columns. The finished inventory uses four columns at every width and 91px-tall slots. Mobile section introductions stack above their secondary links.

## Elevation & Depth

Depth comes from landscape cropping, dark gradients over imagery, subtle section color changes, and inset game controls. Content entries have no exterior card shadows. Text shadows support hero legibility and are not container elevation.

### Shadow Vocabulary

- **Action bevel:** `inset 0 2px #bcd1e3, inset 0 -3px #3571a2` gives primary buttons a native game-control edge.
- **Inventory recess:** `inset 2px 2px #688ba8, inset -2px -2px #e5eef5` creates recessed item slots.

### Named Rules

**The Inset Rule.** Keep content containers flat; reserve structural bevels for game controls and inventory slots.

## Shapes

Controls, portraits, tags, image crops, and inventory slots have square corners. Thin borders and small square status marks repeat the block geometry. The hero's stepped lower edge is a surface-specific silhouette rather than a mandatory section divider.

## Components

### Buttons

Primary actions are sea blue-filled with an inset bevel, a 50px minimum height, and Geist labels at 13px/600. Hover lightens the fill and moves the control up 2px. Secondary buttons use a translucent deep blue fill and pale border, then a brighter deep blue fill on hover. Discord uses the primary treatment in the hero and contact section; exploration uses the secondary treatment.

Interactive elements receive a 2px sea blue focus outline offset by 6px. On the pale toolkit field, the focus color changes to dark deep blue (`#203d54`).

### Chips

Project tags are static square outlined labels that wrap with their content. They are metadata, not filters or buttons. Their final reading size is 11px.

### Cards / Containers

Project entries pair a landscape crop with an unboxed title, description, and tags. Hover zooms the image slightly and restores its saturation. Reviews form a ruled grid with square portraits; server records use compact ruled rows and written current/past status alongside filled or outlined squares.

### Navigation

The header is a fixed deep blue bar, 84px high on desktop and 72px on mobile. Its nearly opaque background keeps navigation readable over every section. Desktop links turn sea blue on hover. Below 760px, an expanded-state menu button reveals dark full-width link rows. Selecting a link or pressing Escape closes the menu; the Discord action stays visible beside the toggle.

### Inventory

Languages sit in recessed square slots within a bordered tray. Inline SVG icons, text labels, and decorative slot numbers connect the tools to the game vocabulary. Slots lighten on hover. Technologies wrap below as plain text, separated from additional systems by a rule.

### Motion and Disclosure

The hero landscape moves from 0 to 150px and scales from 1.035 to 1.16 while scrolling through the hero. The hero clips its transformed scenery so it cannot spill over the stepped edge into the introduction. The hero uses a native 1920×1080 underwater coral scene from the Complementary Reimagined shader gallery, compressed as WebP without upscaling or additional blur. Natural underwater haze softens the scene while preserving reef detail; text and controls remain sharp. The entrance lasts 1.1 seconds; the scroll cue nudges on a 3-second cycle. The motion control disables animations and transitions, including parallax. System reduced motion also disables smooth scrolling and makes the manual motion control unavailable.

Reviews initially show three entries and expand to the full data set with an expanded-state button. Discord profile copying confirms success for 2.5 seconds or presents an error with the existing contact link as fallback. Portraits fall back to name initials when images fail.

## Do's and Don'ts

### Do:

- **Do** use authentic Minecraft scenery with readable foreground contrast.
- **Do** keep pixel type for identity and short statements, and Geist for reading.
- **Do** use square controls, ruled records, and native inset inventory bevels.
- **Do** preserve keyboard focus, accessible disclosure states, and reduced-motion support.

### Don't:

- **Don't** restore the superseded monochrome orbital identity.
- **Don't** add exterior card shadows to the flat content system.
- **Don't** turn decorative scene labels or cramped metadata into a required pattern.

Not canonized: unused hero-eyebrow styles and superseded 7–9px reading sizes remain in CSS but are not rendered system rules; the final build removes the eyebrow and overrides cramped metadata.

### Creator reviews

The three creator testimonials (DashPum4, Seltop, wSmoothie) live exclusively in a gold section before the general client reviews. The field is #e7cd94, ink #302713, and borders #b69a5a. Names and handles link to the user-specified YouTube channels. The longer wSmoothie quote occupies the left column on desktop; mobile follows the natural quote order. Quotes remain verbatim, with no invented ratings or audience statistics. The general review list contains the other five entries.

### Minecraft films

Two official Minecraft films use their matching real ocean and beach stills. A play control loads a YouTube privacy-enhanced player on demand; only one player is mounted at a time. Closing a film restores its poster. Each film retains a direct YouTube fallback. The hero links to these films. No video autoplays before the visitor asks to play it, and no generated footage is used.
