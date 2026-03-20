import { SITE_CONTENT } from './content.js';

const STORAGE_KEYS = {
  language: 'homepage-language',
  theme: 'homepage-theme',
};

function readStoredValue(key, fallback) {
  const value = localStorage.getItem(key);
  return value || fallback;
}

function writeStoredValue(key, value) {
  localStorage.setItem(key, value);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  writeStoredValue(STORAGE_KEYS.theme, theme);
}

function renderNav(content, state) {
  return `
    <header class="site-header">
      <nav class="site-nav" aria-label="Primary">
        <a href="#about">${content.nav.about}</a>
        <a href="#experience">${content.nav.experience}</a>
        <a href="#publications">${content.nav.publications}</a>
        <a href="#contact">${content.nav.contact}</a>
        <div class="site-nav__controls">
          <button type="button" data-language="zh" aria-pressed="${state.language === 'zh'}">ZH</button>
          <button type="button" data-language="en" aria-pressed="${state.language === 'en'}">EN</button>
          <button type="button" data-theme-toggle>${state.theme === 'light' ? 'Dark' : 'Light'}</button>
        </div>
      </nav>
    </header>
  `;
}

function renderResearch(content) {
  const tags = content.research.items
    .map((item) => `<li>${item}</li>`)
    .join('');

  return `
    <section id="about">
      <h2>${content.research.heading}</h2>
      <p>${content.research.summary}</p>
      <ul>${tags}</ul>
    </section>
  `;
}

function renderTimeline(content) {
  const items = content.experience.items.length
    ? content.experience.items
        .map(
          (item) => `
            <li>
              <strong>${item.period}</strong>
              <div>${item.title}</div>
              <p>${item.org}</p>
            </li>
          `,
        )
        .join('')
    : '<li>No entries yet.</li>';

  return `
    <section id="experience">
      <h2>${content.experience.heading}</h2>
      <ul class="timeline">${items}</ul>
    </section>
  `;
}

function renderPublications(content) {
  const items = content.publications.items.length
    ? content.publications.items
        .map(
          (item) => `
            <li>
              <strong>${item.title}</strong>
              <span>${item.authors}</span>
            </li>
          `,
        )
        .join('')
    : '<li>No publications yet.</li>';

  return `
    <section id="publications">
      <h2>${content.publications.heading}</h2>
      <ul class="publication-list">${items}</ul>
    </section>
  `;
}

function renderContact(content) {
  const links = content.contact.links
    .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join('');

  return `
    <section id="contact">
      <h2>${content.contact.heading}</h2>
      <a href="mailto:${content.contact.email}">${content.contact.email}</a>
      <ul>${links}</ul>
    </section>
  `;
}

function renderHero(content) {
  return `
    <section class="hero" data-section="hero">
      <div class="hero__portrait">
        <img src="./assets/profile-placeholder.svg" alt="${content.hero.portraitAlt}">
      </div>
      <div class="hero__content">
        <p class="hero__title">${content.hero.title}</p>
        <h1 class="hero__name">${content.hero.name}</h1>
        <p>${content.hero.tagline}</p>
        <p>${content.hero.affiliation}</p>
      </div>
    </section>
  `;
}

export function renderSite(root, contentMap, state) {
  const nextState = {
    language: state.language,
    theme: state.theme,
  };
  const content = contentMap[nextState.language];

  setTheme(nextState.theme);
  document.documentElement.lang = nextState.language === 'zh' ? 'zh-CN' : 'en';

  root.innerHTML = `
    ${renderNav(content, nextState)}
    <main>
      ${renderHero(content)}
      ${renderResearch(content)}
      ${renderTimeline(content)}
      ${renderPublications(content)}
      ${renderContact(content)}
    </main>
  `;

  root.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      nextState.language = button.dataset.language;
      writeStoredValue(STORAGE_KEYS.language, nextState.language);
      renderSite(root, contentMap, nextState);
    });
  });

  root.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    nextState.theme = nextState.theme === 'light' ? 'dark' : 'light';
    setTheme(nextState.theme);
    renderSite(root, contentMap, nextState);
  });
}

const appRoot = document.querySelector('#app');

if (appRoot) {
  renderSite(appRoot, SITE_CONTENT, {
    language: readStoredValue(STORAGE_KEYS.language, 'zh'),
    theme: readStoredValue(STORAGE_KEYS.theme, 'light'),
  });
}
