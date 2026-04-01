# Publication arXiv Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the arXiv paper to the publications section with a linked title, bolded rendering for Zhongqi Zhao, and a note reading `arXiv preprint, submitted`.

**Architecture:** Extend the publications data shape so each item can hold a link target, a structured author list, and a note. Update tests first to require the linked title, bold author rendering, and publication note, then implement the minimal rendering changes in the publications section.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Publication Rendering

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(SITE_CONTENT.publications.items[0].href).toBe('https://arxiv.org/abs/2511.03556');
expect(document.querySelector('.publication-card a')?.getAttribute('href')).toBe('https://arxiv.org/abs/2511.03556');
expect(document.querySelector('.publication-card strong.publication__author')?.textContent).toBe('Zhongqi Zhao');
expect(document.querySelector('.publication-card .publication__note')?.textContent).toContain('arXiv preprint, submitted');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because publications still use the old flat `title` and `authors` strings with no title link, no bold author node, and no note line.

### Task 2: Implement Linked Publication Rendering

**Files:**
- Modify: `scripts/content.js`
- Modify: `scripts/app.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
{
  title: 'Quantum error mitigation using energy sampling and extrapolation enhanced Clifford data regression',
  href: 'https://arxiv.org/abs/2511.03556',
  authors: [
    { name: 'Zhongqi Zhao', highlight: true },
    ...
  ],
  note: 'arXiv preprint, submitted',
}
```

```js
<strong><a href="${item.href}">${item.title}</a></strong>
<span>${renderAuthors(item.authors)}</span>
<span class="publication__note">${item.note}</span>
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with the linked title, bold author, and note rendered.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
