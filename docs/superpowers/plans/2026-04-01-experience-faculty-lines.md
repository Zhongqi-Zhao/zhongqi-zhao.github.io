# Experience Faculty Lines Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update experience entries so each item can render a faculty line above a separate school or institution line.

**Architecture:** Replace the combined `org` string in experience entries with explicit `faculty` and `school` fields, then update the timeline renderer to output those fields on separate lines. Update tests first so they require the new data shape and rendered ordering before changing the content and markup.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Vitest, jsdom

---

### Task 1: Update Tests For Faculty And School Lines

**Files:**
- Modify: `tests/app.test.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**

```js
expect(SITE_CONTENT.experience.items[0].faculty).toBeTruthy();
expect(SITE_CONTENT.experience.items[0].school).toBeTruthy();
expect(document.querySelector('.timeline__faculty')).not.toBeNull();
expect(document.querySelector('.timeline__school')).not.toBeNull();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/app.test.js`
Expected: FAIL because experience items still use `org` and the renderer does not output separate faculty and school lines.

### Task 2: Implement Faculty And School Fields

**Files:**
- Modify: `scripts/content.js`
- Modify: `scripts/app.js`
- Test: `tests/app.test.js`

- [ ] **Step 1: Write minimal implementation**

```js
{
  period: '2018 - 2022',
  title: '...',
  faculty: '...',
  school: '...',
}
```

```js
<div class="timeline__content">
  <strong>${item.title}</strong>
  <p class="timeline__faculty">${item.faculty}</p>
  <p class="timeline__school">${item.school}</p>
</div>
```

- [ ] **Step 2: Run targeted test to verify it passes**

Run: `npm test -- tests/app.test.js`
Expected: PASS with faculty displayed above school.

### Task 3: Verify Full Regression Surface

**Files:**
- Test: `tests/app.test.js`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS with all homepage tests green.
