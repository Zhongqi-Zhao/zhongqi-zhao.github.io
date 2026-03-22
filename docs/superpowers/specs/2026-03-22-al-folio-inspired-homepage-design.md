# al-folio-Inspired Homepage Design

## Goal

Refit the current static academic homepage so it keeps the existing plain HTML/CSS/JS stack while borrowing the reading rhythm of `al-folio`: slimmer navigation, a more restrained introduction block, narrower text width, serif-forward heading hierarchy, and lighter section separation.

## Scope

- Keep the current static site architecture
- Preserve bilingual switching and light/dark mode
- Replace the current card-heavy hero with a compact introduction layout
- Shift the page toward a single-column academic reading flow
- Restyle section spacing, headings, timeline, and publication list to feel closer to `al-folio`

## Structure

### Header

- Use a slimmer sticky header
- Add a small site brand on the left
- Keep navigation links and language/theme controls on the right

### Intro

- Keep a portrait, but reduce its visual dominance
- Present the name, short title line, affiliation, summary, and quick contact in a compact text-first layout
- Keep research tags as supporting metadata rather than primary visual elements

### Sections

- Remove the large card treatment from section wrappers
- Use lighter borders and more vertical spacing between sections
- Keep a single reading column with restrained width
- Treat experience and publications as clean list rows instead of large cards

## Typography

- Keep serif styling for the name and section headings
- Use smaller, more controlled display sizes than the current hero-first layout
- Increase paragraph readability with calmer line length and line height

## Constraints

- Do not migrate to Jekyll or `al-folio` source files
- Do not introduce build tooling beyond the current static setup
- Preserve existing DOM hooks where practical so current tests and behavior remain stable
