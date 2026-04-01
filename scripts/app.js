import { SITE_CONTENT } from './content.js';

function renderNav(content) {
  return `
    <header class="site-header site-header--sticky">
      <nav class="site-nav" aria-label="Primary">
        <a class="site-nav__brand" href="#app">${content.hero.name}</a>
        <div class="site-nav__links">
          <a href="#about">${content.nav.about}</a>
          <a href="#experience">${content.nav.experience}</a>
          <a href="#publications">${content.nav.publications}</a>
          <a href="#contact">${content.nav.contact}</a>
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
                <p class="timeline__faculty">${item.faculty}</p>
                <p class="timeline__school">${item.school}</p>
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
  const title = content.hero.title ? `<p class="hero__title">${content.hero.title}</p>` : '';
  const nameZh = content.hero.nameZh ? `<span class="hero__name-zh">${content.hero.nameZh}</span>` : '';

  return `
    <section class="hero section" data-section="hero">
      <div class="hero__intro">
        <p class="hero__eyebrow">${content.nav.about}</p>
        ${title}
        <h1 class="hero__name">${content.hero.name}${nameZh}</h1>
        <p class="hero__affiliation">${content.hero.affiliation}</p>
        <p class="hero__tagline">${content.hero.tagline}</p>
        <div class="hero__meta">
          <a class="hero__contact-link" href="mailto:${content.contact.email}">${content.contact.email}</a>
        </div>
      </div>
      <div class="hero__aside">
        <div class="hero__portrait">
          <img src="./P4101150.JPG" alt="${content.hero.portraitAlt}">
        </div>
      </div>
    </section>
  `;
}

export function renderSite(root, content) {
  document.documentElement.lang = 'en';

  root.innerHTML = `
    ${renderNav(content)}
    <main class="page-shell">
      ${renderHero(content)}
      ${renderResearch(content)}
      ${renderTimeline(content)}
      ${renderPublications(content)}
      ${renderContact(content)}
    </main>
  `;
}

const appRoot = document.querySelector('#app');

if (appRoot) {
  renderSite(appRoot, SITE_CONTENT);
}
