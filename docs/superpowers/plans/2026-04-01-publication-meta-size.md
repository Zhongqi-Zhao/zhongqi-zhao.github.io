# Publication Meta Size Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the font size of the publication author line and note line while preserving the current publication title emphasis.

**Architecture:** Add explicit classes for the publication author and note lines so their font sizes can be controlled independently from the title. Update tests first to require the smaller meta typography, then make the minimal rendering and CSS changes needed to satisfy them.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Publication Meta Typography

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(stylesheet).toContain('.publication__authors {');
expect(stylesheet).toContain('font-size: 0.92rem;');
expect(stylesheet).toContain('.publication__note {');
expect(stylesheet).toContain('font-size: 0.84rem;');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because the stylesheet does not yet define smaller publication author and note font sizes.

### Task 2: Implement Smaller Publication Meta Text

**Files:**
- Modify: `scripts/app.js`
- Modify: `styles/site.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
<span class="publication__authors">${renderPublicationAuthors(item.authors)}</span>
<span class="publication__note">${item.note}</span>
```

```css
.publication__authors {
  font-size: 0.92rem;
}

.publication__note {
  font-size: 0.84rem;
}
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with the smaller publication meta typography.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
