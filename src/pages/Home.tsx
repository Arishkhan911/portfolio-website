import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Project, Skill } from '@/lib/types';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const portfolioProject: Project = {
  id: 'arish-portfolio',
  title: 'Personal Portfolio Website',
  description: 'A responsive portfolio with an admin area for managing projects and skills, plus a Supabase-powered contact inbox.',
  tech_stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  image_url: null,
  live_url: '/',
  github_url: null,
  featured: true,
  sort_order: -1,
  created_at: '',
};

const starterSkills: Skill[] = [
  ['React', 'Frontend', 82], ['TypeScript', 'Frontend', 72], ['JavaScript', 'Frontend', 85], ['HTML5', 'Frontend', 90], ['CSS3', 'Frontend', 82],
  ['Node.js', 'Backend', 76], ['Express', 'Backend', 74],
  ['Python', 'Programming', 78], ['C', 'Programming', 70], ['C++', 'Programming', 72],
  ['Git', 'Tools', 80], ['GitHub', 'Tools', 80], ['Postman', 'Tools', 78],
].map(([name, category, proficiency], index) => ({
  id: `starter-${(name as string).toLowerCase().replace(/[^a-z0-9]/g, '')}`,
  name: name as string,
  category: category as string,
  proficiency: proficiency as number,
  sort_order: index,
  created_at: '',
}));

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      supabase.from('skills').select('*').order('sort_order', { ascending: true }),
    ]).then(([projRes, skillRes]) => {
      if (projRes.data) {
        setProjects(projRes.data.some((project) => project.title === portfolioProject.title)
          ? projRes.data
          : [portfolioProject, ...projRes.data]);
      } else {
        setProjects([portfolioProject]);
      }
      const savedSkills = skillRes.data ?? [];
      const savedNames = new Set(savedSkills.map((skill) => skill.name.toLowerCase()));
      setSkills([
        ...savedSkills,
        ...starterSkills.filter((skill) => !savedNames.has(skill.name.toLowerCase())),
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills skills={skills} loading={loading} />
        <Projects projects={projects} loading={loading} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
