# Arish Khan Portfolio

A responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Supabase. It includes an admin area for portfolio content and a Supabase-backed contact inbox.

## Tech stack

- React and TypeScript
- Vite and Tailwind CSS
- Supabase (database and authentication)

## Run locally

### 1. Requirements

- Node.js 18 or newer
- A Supabase project

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file:

```powershell
copy .env.example .env
```

On macOS/Linux, run `cp .env.example .env` instead.

Open `.env` and provide the values from **Supabase Dashboard > Project Settings > API**:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Apply database migrations

Run both SQL files in the Supabase SQL Editor, in this order:

1. `supabase/migrations/20260811142442_portfolio_schema.sql`
2. `supabase/migrations/20260811170000_seed_portfolio_skills.sql`

### 5. Start the site

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Profile photo

The homepage portrait is loaded from `public/profile.jpg`. Replace that file to use a different photo. You can also override it with a hosted image URL in `.env`:

```env
VITE_PROFILE_IMAGE_URL=https://example.com/profile.jpg
```

## Commands

```bash
npm run dev        # start the development server
npm run build      # create a production build
npm run preview    # preview the production build
npm run lint       # run ESLint
npm run typecheck  # run TypeScript checks
```

## GitHub push error (403)

If you see this error:

```text
remote: Permission to Arishkhan911/portfolio-website.git denied to Sadaf-Khan88.
fatal: ... 403
```

Git is logged in as `Sadaf-Khan88`, but the remote repository belongs to `Arishkhan911`. A commit author name does not grant repository access.

To resolve it, use one of these options:

1. Sign in as `Arishkhan911` when Git prompts for credentials. Use a GitHub Personal Access Token, not a GitHub password.
2. Add `Sadaf-Khan88` as a collaborator in the repository settings while signed in as `Arishkhan911`, then accept the invitation.
3. Create a repository under `Sadaf-Khan88` and point the remote to it:

   ```bash
   git remote set-url origin https://github.com/Sadaf-Khan88/portfolio-website.git
   git push -u origin main
   ```

Never commit `.env`; it may contain project-specific configuration.
