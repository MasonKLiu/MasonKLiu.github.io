# Mason Liu (`MasonKLiu.github.io`) — Blue Digital Scroll Portfolio

A tech-focused, blue digital scroll-driven personal portfolio and engineering showcase built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, incorporating UI components and design intelligence adapted from the **Fullend · Agent Design Library** (`Magic UI`, `shadcn/ui`, `UI UX Pro Max`, `frontend-design`, `motion-design-skill`).

- Live URL: <https://masonkliu.github.io>
- Repository: <https://github.com/MasonKLiu/MasonKLiu.github.io>

## Environment Configuration (`.env`)

All public URLs, server host/port settings, base path, and profile links are centralized in `.env` (with `.env.example` as template). For local overrides without modifying tracked config, create `.env.local`.

Key variables:
- `VITE_SITE_URL` — Public HTTPS site URL (`https://masonkliu.github.io`)
- `VITE_DEV_URL` / `VITE_DEV_HOST` / `VITE_DEV_PORT` — Local Vite dev server configuration (`http://127.0.0.1:5173`)
- `VITE_PREVIEW_PORT` — Local preview port (`4173`)
- `VITE_BASE_PATH` — Static base path (`/` for `MasonKLiu.github.io`)
- `VITE_GITHUB_PROFILE_URL`, `VITE_REPO_FULLEND_URL`, `VITE_REPO_AGENT_TEAM_URL`, `VITE_REPO_PORTFOLIO_URL` — External GitHub links
- `VITE_DEFAULT_LANG` — Default language (`zh` | `en` | `ja`)

## Local Development

```bash
npm install
npm run dev
```

## Build Static Bundle

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

Push to `main` — `.github/workflows/deploy.yml` automatically builds `./dist` using Node 22 and publishes to **GitHub Pages**.
