# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

This is a **course platform** for learning Claude Code, built with Angular 21 + SSR. Users navigate through 11 modules, each with multiple lessons. The content already exists as static HTML pages (`modulo-XX-nombre.html` + `styles.css`) and is being **migrated progressively** into this Angular app — preserving the existing design and content while applying Angular best practices.

## Commands

```bash
npm start          # Dev server → http://localhost:4200
npm run build      # Production build (outputs to dist/)
npm test           # Unit tests (Karma + Jasmine)
npm run watch      # Incremental dev build (development config)
node dist/claude-code-course/server/server.mjs  # Run SSR after build
```

## Architecture

**Angular 21 SSR app** (`src/`)
- Standalone components only — no NgModules
- State via Angular signals (`signal()`, `computed()`)
- `src/app/app.routes.ts` — client-side routes (to be built out per module)
- `src/app/app.routes.server.ts` — SSR route config
- `src/app/app.config.ts` — browser bootstrap (router + hydration with event replay)
- `src/app/app.config.server.ts` — server bootstrap
- `src/server.ts` — Express 5 server handling SSR

**Static source content** (root level, read-only reference)
- `modulo-01-fundamentos.html` … `modulo-11-*.html` — one file per module, standalone pages
- `styles.css` — shared dark theme (bg `#0f1117`, accent purple `#c084fc`, Inter + JetBrains Mono fonts)
- Each HTML module follows a fixed layout: module header → numbered sections (concept, code examples, good/bad practice callouts) → inter-module navigation footer

## Migration strategy

**Step 1 — Shared component analysis (do this first, every time)**
Before writing any Angular code for a new module, read the provided HTML and identify recurring UI patterns that are or will be reusable across modules. Look for:
- Info/warning/tip callout boxes (good practice ✅ / bad practice ❌ / note 💡)
- Code blocks with syntax highlighting and optional copy button
- Comparison tables (side-by-side good vs bad)
- Section headers with numbering (e.g. "1.1 — Qué es Claude Code")
- Cards or grid items grouping related concepts
- Module navigation footer (prev / next links)

For each pattern found: check if a shared component already exists in `src/app/shared/`. If yes, use it. If no, create it there before building the module page.

**Step 2 — Build the module page**
1. Create a lazy-loaded route per module: `courses/claude-code/modulo-01`
2. Compose the module page using shared components — no duplicated markup
3. Reuse CSS variables from `styles.css` via `src/styles.scss` (global stylesheet)
4. Preserve all existing content verbatim — do not rewrite or summarize lesson text
5. Inter-module navigation must use Angular `RouterLink`, not `<a href>`

**Component reuse principle:** if a UI pattern appears in more than one module, it must live in `src/app/shared/` as a standalone component with `@Input()` for its variable parts. Never copy-paste markup between module components.

## Conventions

- Prettier: 100-char width, single quotes, Angular HTML parser for `.html` template files (config in `package.json`)
- Content language: Spanish (all course content is in Spanish)
- The full 46-topic index and study workflow are documented in the parent `../CLAUDE.md`
