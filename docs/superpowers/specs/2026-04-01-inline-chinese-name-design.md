# Inline Chinese Name Design

## Goal

Adjust the homepage hero name so the English name is slightly smaller than the current version, and append the Chinese name `赵中琦` on the same line as secondary text.

## Scope

- Keep the existing hero layout and portrait structure
- Render the English and Chinese names in the same heading row
- Reduce the English name size slightly from the current implementation
- Render the Chinese name in a smaller size than the English name
- Render the Chinese name in a gray tone

## Structure

- Keep the hero name as a semantic `h1`
- Render the English name as the primary text node
- Append the Chinese name as an inline `span` inside the same `h1`
- Use a dedicated class on the Chinese name span so styling is isolated

## Styling

- Lower the `.hero__name` font size modestly without changing the overall typographic system
- Keep the English name as the visual anchor
- Style the Chinese name with:
  - smaller font size than the English name
  - gray text color using the muted palette
  - inline alignment that keeps both names on one line on desktop

## Testing

- Update homepage rendering tests to verify:
  - the hero heading still renders
  - the English name remains present
  - the Chinese name renders in a dedicated inline element

## Acceptance Criteria

- The about hero heading shows `Zhongqi Zhao 赵中琦` on the same line
- The English name is smaller than before
- The Chinese name is visibly smaller than the English name
- The Chinese name is gray
- Existing homepage tests continue to pass
