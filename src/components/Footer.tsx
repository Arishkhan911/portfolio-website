import { Code2, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Arish Khan</span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { Icon: Github, href: 'https://github.com/Arishkhan911', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/arish-khan-709684277/', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-cyan-400" /> using React &amp; Supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
