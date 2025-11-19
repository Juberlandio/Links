# Copilot / AI Agent Instructions — Links (berlantec)

Purpose
- Help AI agents make small, safe, and productive changes to this static single-page site.

Big picture
- This repository is a static SPA-like landing page served as files (no build system detected).
- Primary runtime: `index.html` (root) loads `css/style.min.css` and `js/script.js` and references assets in `assets/`.

Key files & components
- `index.html` — single entry HTML (links to `css/style.min.css`, `js/script.js`, fonts and CDN icon fonts).
- `css/style.css` & `css/style.min.css` — source CSS and minified CSS. The site currently includes `style.min.css` in production HTML.
- `js/script.js` — client-side behavior: dark-mode toggle, share button, and click-sound behavior.
- `assets/img/` — images and SVGs referenced from HTML (e.g. `../assets/img/logonovo.svg`, `../assets/img/instagram-logo.svg`).
- `assets/sons/` — audio assets (notably `click-sound.mp3` used by `.soundButton`).

Project-specific patterns & conventions
- Static-only: there is no bundler/packager, task runner, or package.json in the repo. Do not assume automated CSS/JS build steps exist.
- Minified file is checked in: `css/style.min.css`. Prefer editing `css/style.css` (the readable source) and then regenerate `style.min.css` manually if necessary.
- Relative paths in `index.html` use `../assets/...` for images. When editing files in subfolders, verify resulting relative paths in the served environment.
- Interactive patterns:
  - Dark mode: implemented in `js/script.js` — toggles `document.documentElement.classList` and persists theme in `localStorage` under key `theme`.
  - Sound on click: all elements with class `soundButton` play `assets/sons/click-sound.mp3` (volume set in `js/script.js`).
  - Share button: `#share-button` uses the Web Share API with a clipboard fallback.

Safe-editing rules for AI agents
- Small, single-purpose PRs. Keep changes scoped to 1–2 files unless the change explicitly touches multiple assets.
- Never modify `css/style.min.css` directly unless also updating `css/style.css` and documenting why.
- Preserve external CDN references (Google Fonts, RemixIcon) unless replacing them intentionally — changing them can affect visuals globally.
- When changing asset paths, verify in-browser that images/audio load (paths are relative to where `index.html` is served).

Concrete examples agents can follow
- To change the dark-mode icon classes, update `js/script.js` where it sets `toggleButton.querySelector('i').className` to `'ri-sun-line'` or `'ri-moon-line'`.
- To change the sound effect volume or file, edit `js/script.js` where `new Audio('assets/sons/click-sound.mp3')` is created.
- To add or change social links, edit the list inside `index.html` under `<ul class="soundButton">` — each list item contains the `img` and `<span>` shown to users.

Developer workflows (manual)
- Preview locally: open `index.html` in a browser or use a VS Code Live Server extension for live reload.
- Regenerating minified CSS (manual): there is no automated minifier. If you change `css/style.css`, update `css/style.min.css` manually (example using npm if available locally):

```bash
# install temporarily and run from project root (optional)
npx clean-css-cli -o css/style.min.css css/style.css
```

- No test harness detected — validate changes visually in a browser and check console for runtime errors.

What not to do
- Do not introduce new build tools or package manifests without explicit instruction.
- Do not change CDN URLs without confirming visual impact.

If something is unclear
- Ask the maintainer which file is the canonical CSS source (here we assume `css/style.css` is editable and `style.min.css` is the deployed artifact).
- If you need to add tooling (formatters/minifiers), propose it in a PR and include minimal config and docs.

Questions for reviewer
- Do you want CI-driven minification or keep manual workflow?
- Which file should be considered the single source of truth for styles: `style.css` or `style.min.css`?

---
Edit scope: concise, actionable, and limited to discoverable project patterns.
