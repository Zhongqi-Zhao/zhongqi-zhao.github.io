import { describe, expect, it } from 'vitest';
import { renderSite } from '../scripts/app.js';
import { SITE_CONTENT } from '../scripts/content.js';

describe('homepage shell', () => {
  it('renders the core section anchors', () => {
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
});
