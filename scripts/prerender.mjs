import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const SITE = 'https://www.kingbowen.com';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const { prerenderRoutes } = await vite.ssrLoadModule('/src/routes.jsx');
  const template = readFileSync(path.join(distDir, 'index.html'), 'utf8');

  let count = 0;
  for (const route of prerenderRoutes) {
    const appHtml = renderToString(
      React.createElement(MemoryRouter, { initialEntries: [route.path] }, React.createElement(App))
    );

    let html = template;
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(route.description)}$2`);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${SITE}${route.path}$2`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${SITE}${route.path}$2`);
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(route.title)}$2`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(route.description)}$2`);
    html = html.replace('id="root"></div>', `id="root">${appHtml}</div>`);

    const rel = route.path === '/' ? 'index.html' : route.path.replace(/^\//, '') + '.html';
    const outPath = path.join(distDir, rel);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf8');
    count++;
  }

  // Generate sitemap.xml from the same route list (single source of truth)
  const today = new Date().toISOString().slice(0, 10);
  const urls = prerenderRoutes.map((r) =>
    `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
  ).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`PRERENDER_OK routes=${count} sitemapUrls=${prerenderRoutes.length}`);
} catch (e) {
  console.error('PRERENDER_FAILED', e);
  process.exit(1);
} finally {
  await vite.close();
}
