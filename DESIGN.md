---
name: Literal Portfolio
description: A black-and-white system for presenting Literal's work as clear signals in a deep field.
colors:
  ink: "#000000"
  paper: "#f5f5f2"
  muted: "#a3a3a3"
  dim: "#5f5f5f"
  line: "rgba(255, 255, 255, 0.16)"
  line-strong: "rgba(255, 255, 255, 0.38)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  square: "0px"
  circle: "9999px"
spacing:
  control-x: "1.2rem"
  control-y: "0.85rem"
  section-mobile: "6rem"
  section: "8rem"
  page-edge: "clamp(1.25rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
---

# Design System: Literal Portfolio

## Overview

**Creative North Star: "Signals in the Dark"**

Literal's visual system places clear work, plain language, and direct actions in a deep black field. Paper-white sections interrupt that field when the content needs a firm change in pace. Hairline rules organize information without turning projects, reviews, or experience into a card grid.

The system is mostly square and flat. Barlow Condensed carries large names and section headings, Geist handles reading, and Geist Mono marks navigation, tags, status, and small technical labels. Circular forms belong to orbital paths, portraits, avatars, status marks, and a small number of icon controls; they are not a general container style.

**Key Characteristics:**

- Pure black and warm paper-white fields with a short graphite scale.
- Condensed uppercase display type paired with restrained sans-serif copy and mono labels.
- One-pixel rules, open rows, and generous section spacing instead of floating cards.
- Grayscale imagery and slow orbital motion.
- Square controls with visible, high-contrast focus outlines.

## Colors

The palette is strictly monochrome: hard black and warm white establish the field, while graphite tones and translucent white lines carry supporting information.

### Primary

- **Paper White:** The main foreground on dark fields, the fill for primary actions, and the background for light sections.

### Neutral

- **Deep Black:** The default page background, dark-section surface, and text color on paper-white sections.
- **Signal Gray:** Supporting copy and secondary labels that must remain readable without competing with headings.
- **Graphite:** Low-emphasis metadata, inactive labels, and secondary scrollbar treatment.
- **Hairline:** Quiet dividers and section boundaries on black.
- **Strong Hairline:** Secondary-control borders and circular geometry that needs more definition.

### Named Rules

**The Monochrome Rule.** Use black, paper white, and neutral grays only. State and hierarchy come from contrast, type, line, and motion rather than accent color.

**The Paper Break Rule.** Use a full paper-white section when the reading mode changes; do not scatter small white cards across the black field.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)  
**Body Font:** Geist (with sans-serif fallback)  
**Label/Mono Font:** Geist Mono (with monospace fallback)

**Character:** Display type is narrow, uppercase, and tightly set so names and section headings can carry scale without becoming wide blocks. Body and mono faces stay plain and legible around it.

### Hierarchy

- **Display** (600, fluid large scale, 0.88 line-height): Section headings and other major statements; uppercase with tight tracking.
- **Title** (600, fluid medium scale, 1 line-height): Project names, technology names, and smaller display statements.
- **Body** (400, 1rem, 1.75 line-height): Descriptions and supporting text; keep reading measures near 56–60 characters where practical.
- **Label** (400–600, 0.68rem, 0.12em tracking): Navigation, status, tags, and telemetry; uppercase only.

### Named Rules

**The Three-Voice Rule.** Use condensed display type for statements, Geist for reading, and Geist Mono for short labels. Do not use the mono face for paragraphs.

**The Short Display Rule.** Keep large display lines brief. Their scale and tight line-height are intended for names and compact phrases.

## Layout

The shared content width is 1440px. Section content is centered and uses a fluid page edge from 1.25rem to 4rem. Desktop sections have 8rem of vertical space; screens below 768px reduce this to 6rem. The main desktop pattern pairs a narrower introduction column with a wider evidence column, then collapses to one column on smaller screens.

Content is arranged as open rows, tables, and ruled grids. Dividers normally span the full width of the content they organize. Dense details such as tags and status use small gaps, while major sections and column changes use visibly larger gaps.

**The Open-Row Rule.** Projects, reviews, and records sit directly in the section field and are separated by one-pixel rules. Do not wrap each item in a detached card.

## Elevation & Depth

The system is flat and uses no decorative shadows on content containers. Depth comes from the change between black and paper-white fields, fixed background stars, grayscale image cropping, overlapping orbital lines, and the navigation bar's slight transparency and blur. The only glow is the small white marker on an orbit; it is a point of light, not a general elevation effect.

### Named Rules

**The Flat Field Rule.** Surfaces stay flat. Do not add card shadows, raised panels, or soft floating containers.

## Shapes

Controls, content rows, and section fields use square corners. One-pixel borders provide their edge. Circles are reserved for imagery, orbital diagrams, avatars, status marks, and compact icon controls tied to those uses. Grayscale crops keep external imagery inside the monochrome system.

**The Reserved Circle Rule.** A circle must represent an orbit, a person or server image, a status point, or a compact icon action. It is not a default badge or button shape.

## Components

### Buttons

Buttons are compact, square controls with mono uppercase labels and a one-pixel edge.

- **Shape:** Square corners with a minimum height of 48px.
- **Primary:** Paper-white fill with black text and balanced compact padding.
- **Secondary:** Transparent black-field fill, paper-white text, and a strong translucent border.
- **Hover / Focus:** Both variants rise by 2px on hover. The secondary becomes paper white with black text. Keyboard focus uses a 2px high-contrast outline offset by 4px; the outline reverses on light sections.

### Chips

- **Style:** Skill chips use a black fill, a translucent white border, paper-white mono text, and a fully circular edge because they sit on an orbital diagram.
- **State:** Status marks use a filled black dot for current work and an outlined dot for past work. Tags outside orbital diagrams remain plain text without pill containers.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Inherit the black or paper-white section field.
- **Shadow Strategy:** None.
- **Border:** One-pixel translucent rules separate adjacent content.
- **Internal Padding:** Row padding follows content density; review cells use more room than table records.

### Navigation

The navigation is a fixed 64px black bar with slight transparency, background blur, and a hairline bottom border. The name uses condensed display type; links use gray mono labels that turn paper white on hover. The Discord action uses the primary button. On mobile, links become full-width ruled rows beneath the bar and the primary action follows them.

### Editorial Row

Project and record links are full-width ruled rows rather than cards. A clear title leads, supporting copy stays narrower, and metadata remains small. Directional icons move only a few pixels on hover so the content remains steady.

## Do's and Don'ts

### Do:

- **Do** use black or paper-white as a full section field.
- **Do** organize repeated content with one-pixel rules and open rows.
- **Do** keep images grayscale and crop avatars or identity images to circles.
- **Do** use square controls and a 2px high-contrast focus outline with a 4px offset.
- **Do** stop continuous motion and shorten transitions when reduced motion is requested.

### Don't:

- **Don't** introduce accent colors, gradients, or colored status semantics.
- **Don't** turn projects, reviews, or experience into a conventional card grid.
- **Don't** add decorative shadows to content containers.
- **Don't** use rounded rectangles as the default control or container shape.
- **Don't** use circular forms without an orbital, image, status, or compact-action purpose.
