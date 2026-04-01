# KU Red Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the navigation header into a full-width KU red band while keeping the main page body white and clearly separated below it.

**Architecture:** Keep the current HTML structure and drive the visual separation through CSS on the existing `header`, `nav`, and page shell elements. Update style tests first so they require the KU red header band, white body treatment, and a strong separation line before changing the stylesheet.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Header Color Separation

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(stylesheet).toContain('--ku-red: #901a1e;');
expect(stylesheet).toContain('background: #ffffff;');
expect(stylesheet).toContain('background: var(--ku-red);');
expect(stylesheet).toContain('width: 100%;');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because the stylesheet still uses the old tinted page background and narrow header container.

### Task 2: Implement The KU Red Header Band

**Files:**
- Modify: `styles/site.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```css
:root {
  --ku-red: #901a1e;
}

body {
  background: #ffffff;
}

.site-header {
  width: 100%;
  background: var(--ku-red);
}
```

- [ ] **Step 2: Adjust header foreground styles**

```css
.site-nav__brand,
.site-nav__links a,
.site-nav__controls button {
  color: #ffffff;
}
```

- [ ] **Step 3: Run test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with the new full-width red header treatment.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
