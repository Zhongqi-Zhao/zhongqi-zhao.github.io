# al-folio-Inspired Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the current static homepage into a slimmer, al-folio-inspired academic layout without changing the plain HTML/CSS/JS architecture.

**Architecture:** Keep `scripts/app.js` as the render entry point and `styles/site.css` as the sole stylesheet, but replace the large hero-card composition with a compact intro section and lighter section wrappers. Use tests to lock the intended structure and typography hooks before and after the refactor.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, Vitest, jsdom

---

### Task 1: Lock the new structure in tests

**Files:**
- Modify: `tests/app.test.js`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run the targeted test to verify it fails on the current layout**
- [ ] **Step 3: Assert the new brand and compact intro hooks**

### Task 2: Refactor the page structure

**Files:**
- Modify: `scripts/app.js`

- [ ] **Step 1: Update navigation markup to include a slim brand**
- [ ] **Step 2: Replace the large hero composition with a compact intro layout**
- [ ] **Step 3: Keep language/theme switching behavior unchanged**

### Task 3: Restyle the page rhythm

**Files:**
- Modify: `styles/site.css`

- [ ] **Step 1: Narrow the content width and slim down the header**
- [ ] **Step 2: Remove card-heavy section styling in favor of lighter separators**
- [ ] **Step 3: Restyle hero, timeline, publications, and contact to match the new academic rhythm**

### Task 4: Verify

**Files:**
- Modify: `tests/app.test.js` if selector expectations need refinement

- [ ] **Step 1: Run the targeted test and confirm it passes**
- [ ] **Step 2: Run the full test suite**
- [ ] **Step 3: Review the diff for unintended content changes**
