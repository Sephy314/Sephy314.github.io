# Sephy314.github.io

Personal developer portfolio — backend engineering, distributed systems, security, and infrastructure.
Built as engineering documentation rather than a marketing site: architecture, design decisions, and
trade-offs are the content.

## Stack

- [Astro](https://astro.build) — static site generation
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) — dark engineering theme
- [MDX](https://mdxjs.com) — project pages with embedded components

Deployed to **GitHub Pages** via GitHub Actions.

## Project structure

```
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── astro.config.mjs               # site URL, base path, MDX, Tailwind plugin
├── src/
│   ├── content.config.ts          # content collection schema (projects)
│   ├── content/
│   │   └── projects/              # MDX project pages (chinwag, cnps, ...)
│   ├── components/                # ProjectCard, ArchitectureDiagram, TechBadge, ...
│   ├── layouts/                   # BaseLayout, DocLayout
│   ├── pages/                     # home, about, projects/*
│   └── styles/global.css          # Tailwind v4 theme + doc prose styles
└── public/                        # static assets
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # preview the production build
```

## Adding content

- **Project** — add `src/content/projects/<slug>.mdx` with frontmatter matching the schema in
  `src/content.config.ts` (title, tagline, description, category, status, featured, order, languages,
  tech, repo, started, updated, highlights). MDX can import components such as
  `ArchitectureDiagram`, `CodeSnippet`, and `SystemOverview`.

## Deployment

The site is a GitHub Pages **user site** (`Sephy314.github.io`), so it is served at the root path and
`base` is set to `/` in `astro.config.mjs`.

1. Push to `main` — the workflow builds and deploys automatically.
2. In the repo **Settings → Pages**, set the source to **GitHub Actions** (one-time).
3. The site is live at `https://sephy314.github.io`.

## License

Content and code in this repository are for the author's personal portfolio.
