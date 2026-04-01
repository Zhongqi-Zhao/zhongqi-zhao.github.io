# English-Only Homepage Design

## Goal

Convert the current bilingual academic homepage into a strictly English-only site by removing Chinese content, language switching UI, and language persistence logic while keeping the existing static HTML/CSS/JS architecture and the current theme toggle behavior.

## Scope

- Remove all Chinese homepage content from the central content module
- Remove language toggle controls from the header
- Remove language state and local storage handling
- Render the site in English by default and only
- Preserve the existing page structure, theme toggle, portrait, and section anchors
- Update automated tests to validate the English-only behavior

## Non-Goals

- Redesign the visual layout
- Change the current section order or information architecture
- Remove the light/dark theme toggle
- Replace the current static site stack

## Content Model

- Replace the `SITE_CONTENT` language map with a single English content object
- Keep the current section groupings: navigation, hero, research, experience, publications, and contact
- Preserve the existing English copy as the source of truth

## Rendering Changes

### Application State

- Remove `language` from the render state
- Keep `theme` as the only persisted UI preference
- Set `document.documentElement.lang` to `en` unconditionally

### Header

- Remove the `ZH` and `EN` buttons
- Keep the brand, section links, and theme toggle
- Render the brand directly from the English name without language-specific branching

### Page Sections

- Keep hero, research, experience, publications, and contact rendering intact
- Continue using the current portrait asset and anchor structure
- Avoid introducing any new conditional rendering tied to localization

## Testing

- Remove tests that assert Chinese content exists
- Remove tests that verify language switching
- Update render tests to initialize with the simplified English-only state
- Add or retain assertions that verify:
  - the page renders expected English headings and hero text
  - no language toggle buttons are present
  - theme persistence still works
  - the existing section hooks and portrait still render

## Risks

- Tests may still assume the old `language` property shape and fail until updated consistently
- The app bootstrap path may still read the removed language storage key unless that logic is fully deleted

## Acceptance Criteria

- The homepage renders only English copy
- No Chinese content remains in runtime homepage rendering
- No language switcher is visible or interactive
- Theme toggling still updates the DOM and local storage
- Automated tests pass with the English-only implementation
