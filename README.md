# Owen Burke — Portfolio

Production-quality portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Project Structure

- `app/` — App Router pages and layout
- `components/` — Reusable UI components
- `app/globals.css` — Tailwind and global styles

## Pages

- `/` — Home (hero, intro, snapshot cards)
- `/passions-values` — Passion Areas and Values
- `/projects` — Projects index (includes HydraIQ card)
- `/projects/hydraiq` — HydraIQ project details
- `/contact` — Contact info with mailto and social placeholders

## SEO / Metadata

Basic page titles and descriptions are set via the `metadata` export in each page or in `app/layout.tsx`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In the Vercel Dashboard, click “New Project” and import the repository.
3. Use the defaults for a Next.js app and deploy.
4. After the first deploy, add your custom domain in the Vercel project settings:
   - `owen-burke.com` → Add as a domain
   - Follow Vercel’s guided steps for DNS:
     - Either add A/CNAME records in GoDaddy pointing to Vercel, or
     - Switch your nameservers to Vercel (recommended by Vercel).

Note: DNS is managed in GoDaddy (logged in as `owenburke54@gmail.com`). No code changes required for DNS—follow Vercel’s dashboard prompts.

## Notes

- Components are small and reusable (e.g., `PageHeader`).
- Tailwind is used for layout and styling with simple hover states.
- Update placeholder URLs for GitHub/LinkedIn and the HydraIQ link when ready.


