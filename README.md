# Arish Khan Portfolio

Personal portfolio site built with React, TypeScript, Tailwind CSS, and Supabase.

## Requirements

- Node.js 18 or newer
- A Supabase project

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local environment file:

   ```bash
   copy .env.example .env
   ```

   On macOS/Linux, use `cp .env.example .env` instead.

3. In `.env`, enter your Supabase project URL and anonymous key. They are available in **Supabase Dashboard → Project Settings → API**. Optionally set `VITE_PROFILE_IMAGE_URL` to a public image URL for your portrait.

4. Run the SQL in `supabase/migrations/20260811142442_portfolio_schema.sql` using the Supabase SQL Editor (or apply it through the Supabase CLI).

5. Start the development server:

   ```bash
   npm run dev
   ```

Open the URL printed in the terminal, normally `http://localhost:5173`.

## Available commands

```bash
npm run dev        # start local development server
npm run build      # create a production build
npm run preview    # preview the production build
npm run lint       # check code quality
npm run typecheck  # check TypeScript types
```

Never commit `.env`; it contains project configuration specific to your Supabase instance.
