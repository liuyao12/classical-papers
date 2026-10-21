# Classical Papers

A growing collection of classical mathematical papers, carefully typeset with modern commentary, worked details, and geometric drawings in the margins.

The first reading is a sample from Bernhard Riemann’s geometry lecture: the complete introduction and part II, §1 in William Kingdon Clifford’s historical English translation. The edition links to the handwritten manuscript at Göttingen, an original printed facsimile at ETH Zürich, and the full English translation at Trinity College Dublin.

## Develop

Requires Node.js 24. There are no package dependencies to install.

```sh
npm run build
npm run check
python3 -m http.server 8000 --directory dist
```

The collection is generated as static HTML in `dist/`. All links are relative, so the collection works under a GitHub Pages project path. The Riemann reader is at `riemann/`.

- `src/riemann.mjs`: historical passages and modern commentary.
- `src/figures.mjs`: geometric drawings.
- `public/`: styles, reader interactions, and vendored math assets.
- `scripts/build.mjs`: generates the collection and paper pages.
- `scripts/check.mjs`: checks LaTeX expressions, links, resources, and JavaScript syntax.

## Publish

The GitHub Actions workflow builds, validates, and publishes the collection to GitHub Pages on every push to `main`. It can also be run manually from the Actions tab. The repository’s Pages source must be set to GitHub Actions.

## Sources and third-party assets

Historical wording is distinguished from modern editorial commentary. Each reading includes its own sources and editorial notes. Mathematical notation is written in LaTeX and rendered with local KaTeX assets. The accompanying Computer Modern fonts are loaded locally as well. KaTeX’s license is retained in `public/vendor/katex/LICENSE`.
