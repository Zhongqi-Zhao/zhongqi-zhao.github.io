# Publication arXiv Link Design

## Goal

Add the arXiv paper `arXiv:2511.03556` to the publications section with a linked title, bold rendering for `Zhongqi Zhao`, and a concise publication note indicating it is an arXiv preprint that is submitted.

## Scope

- Add the paper to the publications data
- Link the paper title to the arXiv abstract page
- Render `Zhongqi Zhao` in bold in the author list
- Show a note that reads as an arXiv preprint and submitted status

## Data Model

- Extend publication entries so they can store:
  - `title`
  - `href`
  - `authors`
  - `note`
- Keep the structure simple and compatible with future publications

## Rendering

- Render the title as a clickable link
- Render the author line separately below the title
- Render the note line below the author line
- Ensure `Zhongqi Zhao` appears bold while other author names remain regular weight

## Content

- Use the arXiv title and author list from `https://arxiv.org/abs/2511.03556`
- Use the note text: `arXiv preprint, submitted`

## Testing

- Update homepage tests to verify:
  - the publication title link exists
  - the title points to the arXiv URL
  - `Zhongqi Zhao` is rendered in a bold element
  - the publication note includes `arXiv preprint, submitted`

## Acceptance Criteria

- The paper appears in the publications section
- The title links to the arXiv abstract page
- `Zhongqi Zhao` is visually bold in the author list
- The publication note states `arXiv preprint, submitted`
- Automated tests continue to pass
