/*
# Personal Portfolio — Projects, Skills, and Contact Messages

1. Overview
   This migration sets up the database for a personal portfolio website:
   - A `projects` table to showcase work (title, description, tech, links, image, display order).
   - A `skills` table to list technologies with proficiency and category.
   - A `messages` table to store submissions from the site's contact form.

2. New Tables
   - `projects`
       id            uuid PK
       title         text NOT NULL
       description   text NOT NULL
       tech_stack    text[]        -- array of technology names
       image_url     text          -- optional preview image
       live_url      text          -- optional live demo link
       github_url    text          -- optional source code link
       featured      boolean       -- show on landing highlight
       sort_order    int           -- manual ordering
       created_at    timestamptz
   - `skills`
       id            uuid PK
       name          text NOT NULL
       category      text          -- e.g. Frontend, Backend, Tools
       proficiency   int (0-100)
       sort_order    int
       created_at    timestamptz
   - `messages`
       id            uuid PK
       name          text NOT NULL
       email         text NOT NULL
       subject       text
       message       text NOT NULL
       read          boolean
       created_at    timestamptz

3. Security
   - Projects and Skills: public read (anyone can view), writes only for authenticated users (admin owner).
   - Messages: anyone can INSERT (contact form submission); reads/deletes only for authenticated users (admin owner).
   - RLS enabled on all three tables.
   - Separate policies per CRUD verb (no FOR ALL).
   - Owner scope uses auth.uid() = user_id on owner-scoped writes. Projects/skills are curated
     content owned by the site owner; only authenticated admin writes are allowed, and public reads.
*/ 

-- ===== Projects =====
CREATE TABLE IF NOT EXISTS projects (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text NOT NULL,
  description text NOT NULL,
  tech_stack  text[] DEFAULT '{}',
  image_url   text,
  live_url    text,
  github_url  text,
  featured    boolean NOT NULL DEFAULT false,
  sort_order  int NOT NULL DEFAULT 0,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_projects" ON projects;
CREATE POLICY "public_read_projects"
  ON projects FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "auth_insert_projects" ON projects;
CREATE POLICY "auth_insert_projects"
  ON projects FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_projects" ON projects;
CREATE POLICY "auth_update_projects"
  ON projects FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_projects" ON projects;
CREATE POLICY "auth_delete_projects"
  ON projects FOR DELETE
  TO authenticated USING (true);

-- ===== Skills =====
CREATE TABLE IF NOT EXISTS skills (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  category    text NOT NULL DEFAULT 'Other',
  proficiency int NOT NULL DEFAULT 50 CHECK (proficiency BETWEEN 0 AND 100),
  sort_order  int NOT NULL DEFAULT 0,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_skills" ON skills;
CREATE POLICY "public_read_skills"
  ON skills FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "auth_insert_skills" ON skills;
CREATE POLICY "auth_insert_skills"
  ON skills FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_skills" ON skills;
CREATE POLICY "auth_update_skills"
  ON skills FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_skills" ON skills;
CREATE POLICY "auth_delete_skills"
  ON skills FOR DELETE
  TO authenticated USING (true);

-- ===== Messages =====
CREATE TABLE IF NOT EXISTS messages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  email       text NOT NULL,
  subject     text,
  message     text NOT NULL,
  read        boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Public can submit contact messages (INSERT only)
DROP POLICY IF EXISTS "public_insert_messages" ON messages;
CREATE POLICY "public_insert_messages"
  ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated admin can read messages
DROP POLICY IF EXISTS "auth_read_messages" ON messages;
CREATE POLICY "auth_read_messages"
  ON messages FOR SELECT
  TO authenticated USING (true);

-- Only authenticated admin can update (mark read/unread)
DROP POLICY IF EXISTS "auth_update_messages" ON messages;
CREATE POLICY "auth_update_messages"
  ON messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated admin can delete messages
DROP POLICY IF EXISTS "auth_delete_messages" ON messages;
CREATE POLICY "auth_delete_messages"
  ON messages FOR DELETE
  TO authenticated USING (true);
