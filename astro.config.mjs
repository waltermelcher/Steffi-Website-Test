// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages deployment configuration.
// The repository "Steffi Website Test" becomes "Steffi-Website-Test" on GitHub,
// so the site is served from a sub-path.
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/Steffi-Website-Test',
});
