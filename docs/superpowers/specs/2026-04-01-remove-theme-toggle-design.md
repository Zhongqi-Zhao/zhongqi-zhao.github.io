# Remove Theme Toggle Design

## Goal

Remove the Light/Dark theme toggle completely so the homepage uses a single fixed visual theme.

## Scope

- Remove the theme toggle button from the header
- Remove theme state from the rendering flow
- Remove local storage persistence for theme
- Remove dark-theme CSS branching
- Keep the current fixed KU red header and white page treatment

## Structure

- Keep the existing header and page layout
- Remove the theme control area if it becomes empty, or collapse it cleanly
- Keep the rest of the navigation links and section structure unchanged

## Behavior

- The homepage should render with one fixed theme only
- No user interaction should switch theme
- No theme value should be written to or read from local storage
- The document should no longer depend on `data-theme`

## Styling

- Remove the `:root[data-theme='dark']` variant
- Keep the current base palette as the only active stylesheet state
- Preserve readability and spacing after removing the header control

## Testing

- Remove tests for theme toggling and persistence
- Add or update tests to verify the theme button is absent and no theme storage key is written

## Acceptance Criteria

- No Light/Dark button is rendered
- No theme state or local storage logic remains in runtime code
- No dark-theme CSS branch remains
- Existing homepage layout and content rendering still work
- Automated tests continue to pass
