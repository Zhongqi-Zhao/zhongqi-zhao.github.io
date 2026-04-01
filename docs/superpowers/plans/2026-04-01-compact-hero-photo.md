# Compact Hero Photo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the hero portrait size and tighten the hero spacing so the section sits only slightly taller than the photo.

**Architecture:** Keep the existing hero structure and implement the change entirely in CSS. Update tests first to require the smaller portrait width and tighter hero spacing, then change the hero layout values with minimal edits.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Compact Hero Spacing

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(stylesheet).toContain('grid-template-columns: minmax(0, 1fr) 184px;');
expect(stylesheet).toContain('gap: 28px;');
expect(stylesheet).toContain('margin-top: 18px;');
expect(stylesheet).toContain('padding-bottom: 10px;');
expect(stylesheet).toContain('width: min(100%, 184px);');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because the hero still uses the larger portrait width and wider spacing.

### Task 2: Implement The Compact Hero

**Files:**
- Modify: `styles/site.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```css
.hero {
  grid-template-columns: minmax(0, 1fr) 184px;
  gap: 28px;
  margin-top: 18px;
  padding-bottom: 10px;
}

.hero__portrait {
  width: min(100%, 184px);
}
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with the more compact hero treatment.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
