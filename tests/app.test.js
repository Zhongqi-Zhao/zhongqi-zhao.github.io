import { describe, expect, it } from 'vitest';

describe('homepage shell', () => {
  it('renders the core section anchors', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
      language: 'zh',
      theme: 'light',
    });

    expect(document.querySelector('[data-section="hero"]')).not.toBeNull();
    expect(document.querySelector('#about')).not.toBeNull();
    expect(document.querySelector('#experience')).not.toBeNull();
    expect(document.querySelector('#publications')).not.toBeNull();
    expect(document.querySelector('#contact')).not.toBeNull();
  });

  it('provides zh and en content for all homepage sections', async () => {
    const { SITE_CONTENT } = await import('../scripts/content.js');

    expect(SITE_CONTENT.zh.hero.name).toBeTruthy();
    expect(SITE_CONTENT.en.hero.name).toBeTruthy();
    expect(Array.isArray(SITE_CONTENT.zh.research.items)).toBe(true);
    expect(Array.isArray(SITE_CONTENT.en.experience.items)).toBe(true);
    expect(Array.isArray(SITE_CONTENT.zh.publications.items)).toBe(true);
    expect(SITE_CONTENT.en.contact.email).toContain('@');
  });

  it('renders hero, research, experience, publications, and contact from zh data', async () => {
    const { renderSite } = await import('../scripts/app.js');
    const { SITE_CONTENT } = await import('../scripts/content.js');

    document.body.innerHTML = '<div id="app"></div>';

    renderSite(document.querySelector('#app'), SITE_CONTENT, {
      language: 'zh',
      theme: 'light',
    });

    expect(document.querySelector('.hero__name')?.textContent).toContain('Zhongqi Zhao');
    expect(document.querySelector('#about h2')?.textContent).toBe('研究方向');
    expect(document.querySelector('#experience .timeline')).not.toBeNull();
    expect(document.querySelector('#publications .publication-list')).not.toBeNull();
    expect(document.querySelector('#contact a[href^="mailto:"]')).not.toBeNull();
  });
});
