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
  const brand = state.language === 'en' ? content.hero.name.split('/')[0].trim() : content.hero.name;

  return `
    <header class="site-header site-header--sticky">
      <nav class="site-nav" aria-label="Primary">
        <a class="site-nav__brand" href="#app">${brand}</a>
        <div class="site-nav__links">
          <a href="#about">${content.nav.about}</a>
          <a href="#experience">${content.nav.experience}</a>
          <a href="#publications">${content.nav.publications}</a>
          <a href="#contact">${content.nav.contact}</a>
        </div>
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
    .map((item) => `<li class="tag">${item}</li>`)
    .join('');

  return `
    <section id="about" class="section section--research">
      <h2>${content.research.heading}</h2>
      <p class="section__summary">${content.research.summary}</p>
      <ul class="research__tags">${tags}</ul>
    </section>
  `;
}

function renderTimeline(content) {
  const items = content.experience.items.length
    ? content.experience.items
        .map(
          (item) => `
            <li class="timeline__item">
              <span class="timeline__period">${item.period}</span>
              <div class="timeline__content">
                <strong>${item.title}</strong>
                <p>${item.org}</p>
              </div>
            </li>
          `,
        )
        .join('')
    : '<li class="timeline__item"><div class="timeline__content">No entries yet.</div></li>';

  return `
    <section id="experience" class="section section--timeline">
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
            <li class="publication-card">
              <strong>${item.title}</strong>
              <span>${item.authors}</span>
            </li>
          `,
        )
        .join('')
    : '<li class="publication-card">No publications yet.</li>';

  return `
    <section id="publications" class="section section--publications">
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
    <section id="contact" class="section section--contact">
      <h2>${content.contact.heading}</h2>
      <a class="contact__email" href="mailto:${content.contact.email}">${content.contact.email}</a>
      <ul class="contact__links">${links}</ul>
    </section>
  `;
}

function renderHero(content) {
  const researchTags = content.research.items
    .slice(0, 3)
    .map((item) => `<li class="tag">${item}</li>`)
    .join('');
  const title = content.hero.title ? `<p class="hero__title">${content.hero.title}</p>` : '';

  return `
    <section class="hero section" data-section="hero">
      <div class="hero__intro">
        <p class="hero__eyebrow">${content.nav.about}</p>
        ${title}
        <h1 class="hero__name">${content.hero.name}</h1>
        <p class="hero__affiliation">${content.hero.affiliation}</p>
        <p class="hero__tagline">${content.hero.tagline}</p>
        <div class="hero__meta">
          <a class="hero__contact-link" href="mailto:${content.contact.email}">${content.contact.email}</a>
        </div>
        <ul class="hero__tags">${researchTags}</ul>
      </div>
      <div class="hero__aside">
        <div class="hero__portrait">
          <img src="./Einstein.webp" alt="${content.hero.portraitAlt}">
        </div>
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
    <main class="page-shell">
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
