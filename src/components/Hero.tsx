import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const profileImageUrl = import.meta.env.VITE_PROFILE_IMAGE_URL?.trim();

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12 lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm tracking-wide mb-5 animate-fade-in"><Sparkles className="w-4 h-4" /> Available for opportunities</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 animate-fade-in-up">Arish Khan</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-cyan-100/80 mb-7 animate-fade-in-up-delay">Aspiring Full-Stack Developer</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-9 leading-relaxed animate-fade-in-up-delay-2">First-year B.Tech student in AI/ML, building thoughtful web applications with React, Node.js, Python, and databases.</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">View My Work</a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-white/20 hover:border-cyan-400 text-white font-medium transition-all hover:scale-105">Get In Touch</a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {[
                { Icon: Github, href: 'https://github.com/Arishkhan911', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/arish-khan-709684277/', label: 'LinkedIn' },
                { Icon: Mail, href: '#contact', label: 'Email' },
              ].map(({ Icon, href, label }) => <a key={label} href={href} target={href.startsWith('#') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"><Icon className="w-5 h-5" /></a>)}
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 animate-fade-in-up-delay">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 to-violet-500/20 blur-2xl" />
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-[2rem] border border-white/15 bg-[#111722] p-2 shadow-2xl shadow-cyan-950/40">
              {profileImageUrl ? <img src={profileImageUrl} alt="Arish Khan" className="h-full w-full rounded-[1.55rem] object-cover" /> : <div className="h-full w-full rounded-[1.55rem] bg-gradient-to-br from-cyan-500/25 via-[#142331] to-violet-500/20 flex flex-col items-center justify-center text-center px-6"><span className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-3xl font-bold text-cyan-200">AK</span><p className="mt-5 text-sm font-medium text-white">Your profile photo</p><p className="mt-1 text-xs leading-relaxed text-gray-400">Set VITE_PROFILE_IMAGE_URL in .env to add it.</p></div>}
            </div>
            <div className="absolute -bottom-4 -left-5 rounded-xl border border-white/10 bg-[#101722]/90 px-4 py-3 backdrop-blur"><p className="text-xs text-gray-400">Based in</p><p className="text-sm font-semibold text-white">India · AI/ML</p></div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce" aria-label="Scroll down"><ArrowDown className="w-6 h-6" /></a>
    </section>
  );
}
