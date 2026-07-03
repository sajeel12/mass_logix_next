# MassLogix

Marketing site for **MassLogix** — a software engineering studio building web,
mobile, AI/ML, and cloud products, plus **FBR IRIS e-invoicing** for Pakistani
businesses.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and
**Framer Motion**. Light/dark theme with a toggle, and full SEO (structured data,
sitemap, robots, generated OG/social cards, and a logo signal for search).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint                                 |

## Project structure

```
src/
  app/                 # App Router: layout, page, SEO routes
    opengraph-image.tsx  # generated 1200x630 social card
    twitter-image.tsx
    icon.tsx, apple-icon.tsx
    sitemap.ts, robots.ts
    globals.css        # theme tokens (light default + .dark override)
  components/
    sections/          # Hero, Stats, Services, Solutions (FBR), Industries, …
    ui/                # SectionHeading, Button
  lib/site.ts          # all site content / copy in one place
public/images/         # brand assets
```

## Editing content

Almost all copy lives in [`src/lib/site.ts`](src/lib/site.ts) — services,
industries, the FBR solution (features / steps / FAQ), tech stack, and process.

## SEO

- Organization + WebSite + FAQ **JSON-LD** (with `logo` for search results)
- `sitemap.xml`, `robots.txt`, canonical URL
- Auto-generated OpenGraph & Twitter cards
- Update the production domain in `src/lib/site.ts` (`url` / `domain`).
