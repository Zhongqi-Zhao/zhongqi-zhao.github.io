# Inline Chinese Name Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render `赵中琦` inline after the English hero name while slightly reducing the English name size and styling the Chinese name as smaller muted text.

**Architecture:** Keep the current hero heading as a single `h1`, but add a dedicated inline span for the Chinese name so the markup stays semantic and the styling remains isolated. Update tests first to require the new inline structure and then make the minimal content, rendering, and CSS changes needed to satisfy them.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Inline Name Rendering

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
it('renders the English and Chinese hero names inline', async () => {
  const { renderSite } = await import('../scripts/app.js');
  const { SITE_CONTENT } = await import('../scripts/content.js');

  document.body.innerHTML = '<div id="app"></div>';

  renderSite(document.querySelector('#app'), SITE_CONTENT, {
    theme: 'light',
  });

  expect(document.querySelector('.hero__name')?.textContent).toContain('Zhongqi Zhao');
  expect(document.querySelector('.hero__name-zh')?.textContent).toBe('赵中琦');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because the hero heading does not yet render a dedicated Chinese-name element.

### Task 2: Add Inline Chinese Name Data And Styling

**Files:**
- Modify: `scripts/content.js`
- Modify: `scripts/app.js`
- Modify: `styles/site.css`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
hero: {
  name: 'Zhongqi Zhao',
  nameZh: '赵中琦',
}
```

```js
<h1 class="hero__name">
  ${content.hero.name}
  <span class="hero__name-zh">${content.hero.nameZh}</span>
</h1>
```

```css
.hero__name {
  font-size: clamp(...smaller values...);
}

.hero__name-zh {
  color: var(--muted);
  font-size: 0.5em;
}
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with the new inline heading structure.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
