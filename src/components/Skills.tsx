import type { Skill } from '@/lib/types';

interface Props {
  skills: Skill[];
  loading: boolean;
}

const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Design'];

export default function Skills({ skills, loading }: Props) {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technologies I Work With</h2>
        </div>

        {loading ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-white/10 rounded w-24 mb-4" />
                <div className="space-y-3">
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (catSkills.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 className="text-lg font-semibold text-white mb-5">{cat}</h3>
                  <div className="space-y-4">
                    {catSkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 font-mono">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
