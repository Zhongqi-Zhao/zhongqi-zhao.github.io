# Publication Meta Size Design

## Goal

Reduce the font size of the publication author line and note line while keeping the linked publication title at its current emphasis level.

## Scope

- Keep the publication title styling as-is
- Reduce the author line font size
- Reduce the note line font size
- Preserve the current publication card structure

## Styling

- Introduce or use dedicated classes for the author line and note line
- Make the author line slightly smaller than the title
- Make the note line at least as small as the author line, or slightly smaller
- Preserve readability and spacing

## Testing

- Update style tests to verify the reduced font sizes for the author and note lines
- Keep existing publication structure and link tests intact

## Acceptance Criteria

- The publication title keeps its current visual prominence
- The author line appears smaller than before
- The note line appears smaller than before
- Existing publications rendering and tests continue to pass
