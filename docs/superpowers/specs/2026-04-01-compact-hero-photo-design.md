# Compact Hero Photo Design

## Goal

Reduce the hero portrait size and tighten the vertical spacing of the hero section so the hero block is only slightly taller than the portrait itself.

## Scope

- Reduce the displayed portrait size
- Reduce the hero section top and bottom spacing
- Reduce hero internal gap if needed to keep the section compact
- Keep the existing hero content structure unchanged

## Layout

- Keep the current two-column hero layout
- Shrink the portrait column width from the current value
- Tighten the space above and below the hero block
- Keep enough extra height so the hero remains slightly taller than the portrait

## Styling

- Update `.hero` spacing values to create a shorter block
- Update `.hero__portrait` width to a smaller maximum size
- Preserve readability of the text column and portrait alignment
- Keep mobile behavior intact while allowing a slightly more compact desktop presentation

## Testing

- Update style tests to assert the new compact hero spacing and portrait width values
- Keep existing hero structure tests intact

## Acceptance Criteria

- The portrait appears smaller than before
- The hero section has less vertical space above and below
- The hero section remains only slightly taller than the portrait
- Existing homepage layout and tests continue to pass
