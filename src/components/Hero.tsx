import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-cyan-400 font-mono text-sm tracking-wide mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Arish Khan
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400 mb-8 animate-fade-in-up-delay">
          Aspiring Full-Stack Developer
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2">
          First-year B.Tech student in AI/ML, passionate about building modern web applications.
          I work with React, Node.js, Python, and databases to bring ideas to life.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-cyan-400 text-white font-medium transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[
            { Icon: Github, href: 'https://github.com/Arishkhan911', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/arish-khan-709684277/', label: 'LinkedIn' },
            { Icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('#') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
