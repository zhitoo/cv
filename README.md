# CV / Resume — Next.js + Cloudflare

A modern, single-page resume template built with **Next.js**, **Tailwind CSS**, and deployed on **Cloudflare Workers**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview your CV.

## Customize Your Resume

Replace the placeholder content with your own information:

| File | What to edit |
|---|---|
| `app/components/Sidebar.tsx` | Name, title, contact info, skills, languages, and profile photo |
| `app/components/Main.tsx` | Profile summary, work experience, projects, and education |
| `public/avatar.jpeg` | Your profile photo |
| `app/layout.tsx` | Page title and meta description |

### Sidebar (`app/components/Sidebar.tsx`)

- **Photo**: Replace `/avatar.jpeg` in `public/` with your own image
- **Name & Title**: Edit the `h1` and `p` tags in the first `div`
- **Contact**: Update email, phone, location, LinkedIn, and GitHub links
- **Skills**: Modify the `SkillGroup` components to match your stack
- **Languages**: Update language levels

### Main Content (`app/components/Main.tsx`)

- **Profile**: Write a short professional summary
- **Experience**: Add or remove `Job` components with your work history
- **Education**: Update degree and institution

## Deploy to Cloudflare

### Prerequisites

1. Install dependencies:

```bash
npm install
```

2. Authenticate with Cloudflare:

```bash
npx wrangler login
```

### Deploy

```bash
npm run cf:deploy
```

### Preview Production Build Locally

```bash
npm run cf:preview
```

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework
- [Tailwind CSS 4](https://tailwindcss.com) — Styling
- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) — Deployment
