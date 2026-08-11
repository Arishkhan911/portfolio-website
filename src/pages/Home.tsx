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

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      supabase.from('skills').select('*').order('sort_order', { ascending: true }),
    ]).then(([projRes, skillRes]) => {
      if (projRes.data) setProjects(projRes.data);
      if (skillRes.data) setSkills(skillRes.data);
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
