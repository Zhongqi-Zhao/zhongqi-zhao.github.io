# Academic Homepage Design

**Date:** 2026-03-20

## Goal

Build a personal academic homepage for GitHub Pages with a strong introduction-first layout. The site should be bilingual (`ZH / EN`), support `Light / Dark` mode, and stay fully static so it can be deployed directly from this repository.

## Project Context

- Repository is currently minimal and intended for GitHub Pages deployment.
- The homepage will be a single-page scrolling site.
- The homepage is for an academic profile, but the first impression should emphasize the person before the publication list.

## Confirmed Product Decisions

- Site type: academic homepage
- Primary emphasis: personal introduction first
- Navigation model: single-page scrolling
- Primary languages: Chinese and English
- Content sections:
  - portrait / photo
  - one-line introduction
  - research interests
  - unified experience timeline
  - publications
  - contact information
  - social links
  - language switch
  - light/dark mode switch

## Visual Direction

Selected structure and visual tone:

- Layout direction: `Classic Scholar`
- Visual style: `Cool Research Slate`

This means the homepage should feel modern, calm, and research-oriented rather than decorative or institutional. The design should use cool neutral colors, clear hierarchy, restrained motion, and strong readability in both languages.

## Information Architecture

The page should be organized in this order:

1. `Hero`
2. `About / Research`
3. `Experience`
4. `Publications`
5. `Contact`

### 1. Hero

The first screen should immediately communicate:

- name
- current role / title
- affiliation or current location if available
- portrait
- one-line bilingual introduction
- short list of research interests
- key links and contact entry points

The language switch and theme switch should be visible in the top navigation, with fast access from the first screen.

### 2. About / Research

This section should contain:

- a short bilingual personal summary
- 3 to 5 concise research directions or keywords

The section should feel readable and personal, not like a dense CV block.

### 3. Experience

This section should use a single chronological timeline.

Requirements:

- do not split education and work into separate sections
- combine both into one timeline
- each entry should include time, institution, role or degree, and a short description if needed
- ordering should be easy to scan and visually continuous

### 4. Publications

This section should present the publication list directly, without a separate `Selected Publications` subset.

Each publication entry should support:

- title
- author line
- venue / journal / conference
- year
- optional external link

The implementation should allow the list to stay manageable even if it grows later, but the current scope is a straightforward publication section, not search, filtering, or categorization.

### 5. Contact

This section should act as the page footer and final call-to-action area.

It should include:

- email or preferred contact method
- social links such as GitHub, Google Scholar, LinkedIn, or similar

## Interaction Design

### Navigation

- sticky top navigation
- anchor links to `About`, `Experience`, `Publications`, and `Contact`
- navigation should remain simple and unobtrusive on desktop and mobile

### Language Switching

- the page should support full-page language switching between Chinese and English
- do not show both languages at once for the main content
- language switching should update the visible content consistently across all sections
- the switch should be available globally from the navigation area

### Theme Switching

- support `Light` and `Dark` modes
- dark mode should be designed intentionally, not produced by naive color inversion
- colors for text, surfaces, dividers, and accents should be tuned separately for each mode

### Motion

- use only restrained motion
- acceptable examples: subtle reveal on load, mild hover states, smooth anchor scrolling
- avoid heavy animation or decorative effects that hurt academic tone

## Visual System

### Tone

- cool, composed, modern
- academic but not overly institutional
- distinctive enough to avoid looking like a generic default template

### Color Direction

Use a palette in the family of:

- slate blue
- steel gray
- off-white / cool neutral surfaces

The dark theme should preserve this same identity rather than switching to unrelated colors.

### Typography

- English headings may use a refined serif or semi-serif style for character
- body text should prioritize readability
- Chinese typography should stay clean and stable for mixed bilingual layouts
- bilingual rhythm and spacing must be handled carefully so one language does not feel visually secondary

## Technical Boundaries

The implementation should remain intentionally simple:

- fully static
- compatible with GitHub Pages
- no backend
- no CMS
- no search
- no heavy framework requirement unless there is a clear need

The preferred implementation direction is lightweight HTML/CSS/JavaScript or an equivalently simple static setup.

## Content Management Approach

Content should be stored in a centralized, maintainable structure rather than scattered through markup.

Target behavior:

- personal info, research areas, timeline items, publications, and links should be easy to edit later
- bilingual content should be stored in pairs
- adding or editing entries should not require changing multiple unrelated files

This requirement exists to make future updates practical, especially for publications and timeline entries.

## Responsive Requirements

The homepage must work cleanly on:

- desktop
- tablet
- mobile

Responsive behavior should preserve:

- readability of bilingual text
- a stable hero section
- usable timeline layout
- publication entries that do not collapse into clutter

## Verification Requirements

Implementation should be verified against the following:

- desktop layout renders correctly
- mobile layout renders correctly
- `ZH / EN` switching updates all visible content correctly
- `Light / Dark` switching remains visually coherent
- anchor navigation works
- static hosting works in GitHub Pages conditions

## Out of Scope

The following are explicitly out of scope for this iteration:

- backend services
- admin dashboard or CMS
- publication search or filtering
- blog system
- complex animation system
- multi-page architecture

## Open Content Inputs Needed Later

Implementation will still need actual user content for:

- portrait image
- Chinese and English name formatting
- one-line introduction in both languages
- research interest text
- timeline entries
- publication entries
- contact details
- social profile URLs

These are content inputs, not design blockers.
