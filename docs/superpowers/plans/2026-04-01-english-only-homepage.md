# English-Only Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the homepage from bilingual rendering to an English-only implementation without changing the overall layout or breaking theme toggling.

**Architecture:** Collapse the content model from a language map into a single English content object, then simplify the renderer so it no longer tracks or persists language state. Update tests first so they describe the English-only contract, then make the minimal application changes to satisfy those tests.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Rewrite Tests Around English-Only Behavior

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing tests**

```js
it('provides a single English content object for all homepage sections', async () => {
  const { SITE_CONTENT } = await import('../scripts/content.js');

  expect(SITE_CONTENT.hero.name).toBeTruthy();
  expect(SITE_CONTENT.research.heading).toBe('Research Interests');
  expect(Array.isArray(SITE_CONTENT.experience.items)).toBe(true);
  expect(Array.isArray(SITE_CONTENT.publications.items)).toBe(true);
  expect(SITE_CONTENT.contact.email).toContain('@');
});

it('renders the homepage in English without language controls', async () => {
  const { renderSite } = await import('../scripts/app.js');
  const { SITE_CONTENT } = await import('../scripts/content.js');

  document.body.innerHTML = '<div id="app"></div>';

  renderSite(document.querySelector('#app'), SITE_CONTENT, {
    theme: 'light',
  });

  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('.hero__name')?.textContent).toContain('Zhongqi Zhao');
  expect(document.querySelector('#about h2')?.textContent).toBe('Research Interests');
  expect(document.querySelector('[data-language="zh"]')).toBeNull();
  expect(document.querySelector('[data-language="en"]')).toBeNull();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand tests/app.test.js`
Expected: FAIL because tests still expect `SITE_CONTENT.zh`, `SITE_CONTENT.en`, and language toggle behavior.

### Task 2: Simplify Homepage Data And Rendering

**Files:**
- Modify: `scripts/content.js`
- Modify: `scripts/app.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
export const SITE_CONTENT = {
  nav: { ... },
  hero: { ... },
  research: { ... },
  experience: { ... },
  publications: { ... },
  contact: { ... },
};
```

```js
const STORAGE_KEYS = {
  theme: 'homepage-theme',
};

function renderNav(content, state) {
  const brand = content.hero.name;
  // render links plus theme toggle only
}

export function renderSite(root, content, state) {
  const nextState = {
    theme: state.theme,
  };

  document.documentElement.lang = 'en';
  // render all sections from content
  // bind theme toggle only
}
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- --runInBand tests/app.test.js`
Expected: PASS with the updated English-only rendering behavior.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
