# Remove Theme Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the Light/Dark theme toggle completely so the homepage uses one fixed visual theme with no theme state or persistence.

**Architecture:** Update tests first so they require the absence of theme controls, theme storage, and dark-theme CSS. Then simplify the runtime by removing theme state from the renderer and deleting the dark-mode branch from the stylesheet.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Fixed Theme Behavior

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(stylesheet).not.toContain(":root[data-theme='dark']");
expect(document.querySelector('[data-theme-toggle]')).toBeNull();
expect(localStorage.getItem('homepage-theme')).toBeNull();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because the theme toggle button, theme storage logic, and dark-theme CSS still exist.

### Task 2: Remove Runtime Theme Logic

**Files:**
- Modify: `scripts/app.js`
- Modify: `styles/site.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
function renderNav(content) {
  // no theme button
}

export function renderSite(root, content) {
  document.documentElement.lang = 'en';
  // no theme state, no theme listeners
}
```

```css
/* delete :root[data-theme='dark'] */
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with a fixed single-theme homepage.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
