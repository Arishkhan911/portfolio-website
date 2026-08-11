import type { Skill } from '@/lib/types';
import { Braces, Database, Figma, LayoutPanelTop, ServerCog, TerminalSquare, Wrench } from 'lucide-react';

interface Props { skills: Skill[]; loading: boolean; }

const categories = [
  { name: 'Frontend', icon: LayoutPanelTop, description: 'Interfaces that feel fast and intuitive.' },
  { name: 'Backend', icon: ServerCog, description: 'Reliable APIs and application logic.' },
  { name: 'Database', icon: Database, description: 'Structured, useful data foundations.' },
  { name: 'Tools', icon: Wrench, description: 'Workflow tools that help me ship.' },
  { name: 'Design', icon: Figma, description: 'Thoughtful visual and interaction details.' },
  { name: 'Programming', icon: TerminalSquare, description: 'Core languages and problem solving.' },
];

export default function Skills({ skills, loading }: Props) {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16"><p className="text-cyan-400 font-mono text-sm mb-2">02. Skills</p><h2 className="text-3xl sm:text-4xl font-bold text-white">Tools I use to bring ideas to life</h2><p className="mt-4 text-gray-400 max-w-xl mx-auto">A growing toolkit across product development, from polished interfaces to dependable data.</p><div className="mt-7 flex flex-wrap justify-center gap-3 text-sm"><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300"><Braces className="mr-2 inline h-4 w-4 text-cyan-300" />{skills.length} technologies</span><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300">Hands-on learning, one project at a time</span></div></div>
        {loading ? <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">{[1, 2, 3].map((i) => <div key={i} className="h-64 rounded-2xl bg-white/5 animate-pulse" />)}</div> : <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {categories.map(({ name, icon: Icon, description }) => {
            const catSkills = skills.filter((skill) => skill.category === name);
            if (!catSkills.length) return null;
            return <article key={name} className="rounded-2xl border border-white/10 bg-[#101722]/70 p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/20">
              <div className="flex items-start gap-4 mb-6"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-300/10"><Icon className="h-5 w-5 text-cyan-300" /></div><div><h3 className="text-lg font-semibold text-white">{name}</h3><p className="mt-1 text-sm text-gray-400">{description}</p></div></div>
              <div className="space-y-4">{catSkills.map((skill) => <div key={skill.id}><div className="flex justify-between mb-2"><span className="text-sm font-medium text-gray-200">{skill.name}</span><span className="text-xs text-cyan-200 font-mono rounded-full bg-cyan-400/10 px-2 py-0.5">{skill.proficiency}%</span></div><div className="h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-1000 ease-out" style={{ width: `${skill.proficiency}%` }} /></div></div>)}</div>
            </article>;
          })}
        </div>}
      </div>
    </section>
  );
}
