import type { Project } from '@/lib/types';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Props {
  projects: Project[];
  loading: boolean;
}

export default function Projects({ projects, loading }: Props) {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Some Things I've Built</h2>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-white/10" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-white/10 rounded w-1/2" />
                  <div className="h-4 bg-white/10 rounded w-full" />
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {project.image_url && (
                  <div className="relative h-52 overflow-hidden bg-white/5">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                    {project.featured && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-cyan-500/90 text-white text-xs px-2.5 py-1 font-medium">
                        <Star className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono rounded-md bg-cyan-500/10 text-cyan-300 px-2.5 py-1 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
