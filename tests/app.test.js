import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('homepage shell', () => {
  it('uses the approved al-folio-inspired typography scale for the hero name and section headings', () => {
    const stylesheet = readFileSync(resolve(process.cwd(), 'styles/site.css'), 'utf8');
    const heroBlock = stylesheet.match(/\.hero\s*\{[\s\S]*?\n\}/)?.[0] ?? '';

    expect(stylesheet).not.toContain(":root[data-theme='dark']");
    expect(stylesheet).toContain('--ku-red: #901a1e;');
    expect(stylesheet).toContain('background: #ffffff;');
    expect(stylesheet).toContain('background: var(--ku-red);');
    expect(stylesheet).toContain('.site-header {');
    expect(stylesheet).toContain('width: 100%;');
    expect(stylesheet).toContain('grid-template-columns: minmax(0, 1fr) 184px;');
    expect(stylesheet).toContain('gap: 28px;');
    expect(stylesheet).toContain('margin-top: 18px;');
    expect(stylesheet).toContain('padding-bottom: 10px;');
    expect(stylesheet).toContain('width: min(100%, 184px);');
    expect(stylesheet).toContain('font-size: clamp(2.05rem, 4vw, 3.45rem);');
    expect(stylesheet).toContain('font-size: clamp(1.35rem, 2.2vw, 1.75rem);');
    expect(stylesheet).toContain('font-size: 2.3rem;');
    expect(stylesheet).toContain('.hero__name-zh');
    expect(stylesheet).toContain('.publication__authors {');
    expect(stylesheet).toContain('font-size: 0.92rem;');
    expect(stylesheet).toContain('.publication__note {');
    expect(stylesheet).toContain('font-size: 0.84rem;');
    expect(stylesheet).toContain('color: var(--muted);');
    expect(heroBlock).not.toContain('border-bottom');
  });

  it('renders the core section anchors', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.querySelector('[data-section="hero"]')).not.toBeNull();
    expect(document.querySelector('#about')).not.toBeNull();
    expect(document.querySelector('#experience')).not.toBeNull();
    expect(document.querySelector('#publications')).not.toBeNull();
    expect(document.querySelector('#contact')).not.toBeNull();
  });

  it('provides a single English content object for all homepage sections', async () => {
    const { SITE_CONTENT } = await import('../scripts/content.js');

    expect(SITE_CONTENT.hero.name).toBe('Zhongqi Zhao');
    expect(SITE_CONTENT.hero.nameZh).toBe('赵中琦');
    expect(SITE_CONTENT.research.heading).toBe('Research Interests');
    expect(Array.isArray(SITE_CONTENT.research.items)).toBe(true);
    expect(Array.isArray(SITE_CONTENT.experience.items)).toBe(true);
    expect(SITE_CONTENT.experience.items[0].faculty).toBeTruthy();
    expect(SITE_CONTENT.experience.items[0].school).toBeTruthy();
    expect(Array.isArray(SITE_CONTENT.publications.items)).toBe(true);
    expect(SITE_CONTENT.publications.items[0].href).toBe('https://arxiv.org/abs/2511.03556');
    expect(SITE_CONTENT.publications.items[0].note).toBe('arXiv preprint, submitted');
    expect(SITE_CONTENT.contact.email).toContain('@');
  });

  it('renders hero, research, experience, publications, and contact from English data', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('.hero__name')?.textContent).toContain('Zhongqi Zhao');
    expect(document.querySelector('.hero__name-zh')?.textContent).toBe('赵中琦');
    expect(document.querySelector('#about h2')?.textContent).toBe('Research Interests');
    expect(document.querySelector('.hero__tags')).toBeNull();
    expect(document.querySelector('#about .section__summary')).toBeNull();
    expect(document.querySelectorAll('#about .research__tags .tag')).toHaveLength(SITE_CONTENT.research.items.length);
    expect(document.querySelector('#experience .timeline')).not.toBeNull();
    expect(document.querySelector('#experience .timeline__faculty')).not.toBeNull();
    expect(document.querySelector('#experience .timeline__faculty')?.textContent).toContain(
      SITE_CONTENT.experience.items[0].faculty,
    );
    expect(document.querySelector('#experience .timeline__school')).not.toBeNull();
    expect(document.querySelector('#experience .timeline__school')?.textContent).toContain(
      SITE_CONTENT.experience.items[0].school,
    );
    expect(document.querySelector('#publications .publication-list')).not.toBeNull();
    expect(document.querySelector('.publication-card a')?.getAttribute('href')).toBe('https://arxiv.org/abs/2511.03556');
    expect(document.querySelector('.publication-card a')?.textContent).toContain(
      'Quantum error mitigation using energy sampling and extrapolation enhanced Clifford data regression',
    );
    expect(document.querySelector('.publication-card strong.publication__author')?.textContent).toBe('Zhongqi Zhao');
    expect(document.querySelector('.publication-card .publication__note')?.textContent).toContain(
      'arXiv preprint, submitted',
    );
    expect(document.querySelector('#contact a[href^="mailto:"]')).not.toBeNull();
  });

  it('does not render language toggle controls', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.querySelector('[data-language="zh"]')).toBeNull();
    expect(document.querySelector('[data-language="en"]')).toBeNull();
    expect(localStorage.getItem('homepage-language')).toBeNull();
  });

  it('does not render or persist a theme toggle', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.querySelector('[data-theme-toggle]')).toBeNull();
    expect(localStorage.getItem('homepage-theme')).toBeNull();
    expect(document.documentElement.dataset.theme).toBeUndefined();
  });

  it('renders the layout hooks needed for hero, timeline, and publications styling', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.querySelector('.site-header--sticky')).not.toBeNull();
    expect(document.querySelector('.hero__portrait img')).not.toBeNull();
    expect(document.querySelector('.hero__portrait img')?.getAttribute('src')).toBe('./P4101150.JPG');
    expect(document.querySelector('.timeline__item')).not.toBeNull();
    expect(document.querySelector('.publication-card, .publication-list')).not.toBeNull();
  });

  it('renders the slimmer academic homepage structure', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
    });

    expect(document.querySelector('.site-nav__brand')).not.toBeNull();
    expect(document.querySelector('.site-nav__brand')?.textContent).toBe('Zhongqi Zhao');
    expect(document.querySelector('.hero__intro')).not.toBeNull();
    expect(document.querySelector('.hero__name-zh')).not.toBeNull();
    expect(document.querySelector('.hero__contact-link[href^="mailto:"]')).not.toBeNull();
    expect(document.querySelector('.hero__contact[href="#contact"]')).toBeNull();
  });
});
