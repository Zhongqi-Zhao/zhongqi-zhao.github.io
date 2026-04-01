# Experience Faculty Lines Design

## Goal

Extend the experience section so each education or work entry can show a faculty line above the school or institution line.

## Scope

- Add a dedicated faculty field to experience entries
- Add a dedicated school or institution field to experience entries
- Render faculty and school on separate lines
- Keep the current timeline layout and ordering intact

## Data Model

- Replace the single `org` field with explicit fields for:
  - `faculty`
  - `school`
- Keep `period` and `title` unchanged
- Allow entries without a faculty only if needed in the future, but structure the renderer around separate fields

## Rendering

- Keep the entry title as the primary line under each period
- Render the faculty as the next line
- Render the school or institution on the line below the faculty
- Preserve current spacing and timeline semantics

## Styling

- Reuse the existing muted timeline text treatment as much as possible
- Give faculty and school separate classes so they can be adjusted independently later

## Testing

- Update homepage tests to verify the new `faculty` and `school` fields exist
- Verify the rendered timeline includes a faculty line above the school line for at least one experience item

## Acceptance Criteria

- Experience entries no longer depend on a single combined organization string
- Faculty appears on its own line above the school or institution
- Existing timeline structure remains intact
- Automated tests continue to pass
