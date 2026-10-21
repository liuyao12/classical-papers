import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
rmSync(dist, { recursive: true, force: true });
for (const route of ['', 'riemann/']) {
  const target = `https://liuyao12.github.io/math-expo/classical-papers/${route}`;
  const directory = path.join(dist, route);
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><title>Classical Papers has moved to Math Expo</title><script>location.replace(${JSON.stringify(target)}+location.search+location.hash);</script></head><body><p>Classical Papers is now part of Math Expo. <a href="${target}">Continue to the new location.</a></p></body></html>`);
}
console.log('Built redirects to Math Expo, retaining queries and passage fragments.');
