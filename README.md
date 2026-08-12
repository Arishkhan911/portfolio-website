# Arish Khan — Portfolio

> A modern, responsive developer portfolio with a content-managed project showcase, skills dashboard, and contact inbox.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

**[View the live site](https://portfolio-website-xbdg.vercel.app/)** · **[Report an issue](../../issues)**

## Highlights

- Responsive single-page portfolio with dedicated About, Skills, Projects, and Contact sections
- Project and skill data served from Supabase, with useful fallback content while data loads
- Contact form that stores messages securely in a Supabase inbox
- Authenticated admin dashboard for managing portfolio projects and reviewing messages
- Row Level Security (RLS) policies for public portfolio data and protected admin actions

## Built with

| Area | Technologies |
| --- | --- |
| Frontend | React, TypeScript, React Router |
| Styling | Tailwind CSS, Lucide icons |
| Tooling | Vite, ESLint |
| Backend | Supabase Auth, PostgreSQL, Row Level Security |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A [Supabase](https://supabase.com/) project

### Installation

1. Clone the repository and enter the project directory.

   ```bash
   git clone https://github.com/Arishkhan911/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a local environment file from the example.

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env`.

4. Add your Supabase project credentials to `.env`. Find them under **Project Settings → API** in the Supabase dashboard.

   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

5. In the Supabase SQL Editor, run these migrations in order:

   ```text
   supabase/migrations/20260811142442_portfolio_schema.sql
   supabase/migrations/20260811170000_seed_portfolio_skills.sql
   ```

6. Start the development server.

   ```bash
   npm run dev
   ```

   Visit the local URL shown by Vite (usually `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types without emitting files |

## Content management

After creating a Supabase Auth user, sign in at `/login` to access the admin area:

- `/admin` — review and manage project content
- `/admin/messages` — read, update, and remove contact messages

The database migrations enable RLS. Visitors can read projects and skills and submit contact messages; authenticated users can manage portfolio content and the inbox.

## Customization

- **Profile image:** replace `public/profile.jpg`, or set a hosted image with:

  ```env
  VITE_PROFILE_IMAGE_URL=https://example.com/profile.jpg
  ```

- **Portfolio content:** manage projects and skills in Supabase after signing in, or add records directly through the Supabase dashboard.

## Deployment

Build the application with `npm run build`. The deployable static output is created in `dist/`. Configure the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables in your hosting provider.

## Security note

Do not commit `.env`. It contains project-specific configuration. Only the public Supabase URL and anon key should be exposed to the client; keep all privileged Supabase keys on the server.

---

Built and maintained by [Arish Khan](https://github.com/Arishkhan911).
