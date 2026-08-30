# Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. No database, no auth, no CMS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build (test before deploying)

```bash
npm run build
npm run start
```

## Edit content

All text, project data, skills, and links live in `data/portfolio.ts`.
You will not need to touch any `.tsx` file to update content — only to
change layout or styling.

Two placeholders to replace before publishing:

- `data/portfolio.ts` — `profile.email`, `profile.socials`, and each
  project's `githubUrl` / `demoUrl`.
- `public/resume.pdf` — add your resume file here (referenced by
  `profile.resumeUrl`).

## Deploy

Push this to a GitHub repo, then import it at https://vercel.com/new.
No environment variables or extra configuration are required — Vercel
detects Next.js automatically.
