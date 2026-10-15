import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const html = renderToString(React.createElement(App));

  const distIndex = path.join(root, 'dist', 'index.html');
  let template = readFileSync(distIndex, 'utf8');
  if (!template.includes('id="root"></div>')) {
    throw new Error('root div anchor not found in dist/index.html');
  }
  template = template.replace('id="root"></div>', `id="root">${html}</div>`);
  writeFileSync(distIndex, template, 'utf8');

  console.log('PRERENDER_OK htmlLength=' + html.length + ' finalBytes=' + Buffer.byteLength(template, 'utf8'));
} finally {
  await vite.close();
}
