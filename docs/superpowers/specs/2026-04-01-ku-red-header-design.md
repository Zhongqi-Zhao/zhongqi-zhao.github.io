# KU Red Header Design

## Goal

Visually separate the navigation header from the rest of the homepage by turning the header into a full-width KU red band while keeping the remaining page content on a white background.

## Scope

- Apply the color separation to the navigation header only
- Make the header background span the full viewport width
- Keep the navigation content centered within the current reading width
- Render the rest of the page on a white background
- Create a clear visual separation between the red header band and the content below

## Structure

- Keep the existing header and navigation structure semantically intact
- Treat the outer header as the full-width colored band
- Keep the inner navigation content constrained to the current centered width

## Styling

- Use KU red for the header background
- Use light or white foreground text in the header for contrast
- Adjust header button, link, and brand styles so they remain readable on the red background
- Use a strong bottom divider or shadow so the red band feels fully separated from the white body area
- Change the main page background from the current tinted treatment to white for the non-header area

## Testing

- Update style tests to assert the KU red header band and white page body treatment
- Keep existing structure tests for the header and page shell intact

## Acceptance Criteria

- The navigation header appears as a full-width KU red band
- The main content area below appears on a white background
- The header visually spans edge to edge
- The transition between header and body is clearly defined
- Existing homepage behavior and tests continue to pass
