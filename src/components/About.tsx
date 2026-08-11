import { Briefcase, GraduationCap, Code2, Rocket } from 'lucide-react';

const stats = [
  { value: '1st', label: 'Year B.Tech AI/ML' },
  { value: '12+', label: 'Technologies' },
  { value: '1', label: 'Project Built' },
  { value: '∞', label: 'Curiosity' },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    text: 'Writing maintainable, well-structured code that scales with your business needs.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    text: 'Shipping products efficiently without compromising on quality or performance.',
  },
  {
    icon: Briefcase,
    title: 'Full-Stack',
    text: 'End-to-end development from database design to pixel-perfect frontend.',
  },
  {
    icon: GraduationCap,
    title: 'Always Learning',
    text: 'Staying current with the latest technologies and industry best practices.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-2">01. About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm Arish Khan, a first-year B.Tech student specializing in Artificial Intelligence
              and Machine Learning. My journey in tech started with a curiosity about how websites
              work, and it has grown into a passion for full-stack development.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I work with React, Node.js, Express, and Python on the frontend and backend, with
              PostgreSQL and Supabase for databases. I'm always building projects to sharpen my
              skills and explore new technologies, from REST APIs to AI-driven applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new tools, testing APIs with Postman, or
              learning about the latest in AI and ML.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:border-cyan-500/50 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-bold text-cyan-400">{s.value}</p>
                <p className="text-sm text-gray-400 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
