import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/lib/types';
import { Link } from 'react-router-dom';
import { ExternalLink, LogOut, Mail } from 'lucide-react';

export default function Admin() {
  const { session, loading } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    if (!session) return;
    supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true })
      .then(({ data }) => {
        if (data) setProjects(data);
        setFetchLoading(false);
      });
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-gray-400">
        Loading…
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Admin Access Required</h1>
          <p className="text-gray-400 mb-6">Sign in to manage your portfolio, projects, and messages.</p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/messages"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" /> Messages
            </Link>
            <button
              onClick={() => supabase.auth.signOut()}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-6">Projects ({projects.length})</h2>
          {fetchLoading ? (
            <p className="text-gray-400">Loading…</p>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      {p.featured && (
                        <span className="rounded-full bg-cyan-500/20 text-cyan-300 text-xs px-2 py-0.5">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.tech_stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded bg-white/10 px-2 py-0.5 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {p.live_url && (
                      <a
                        href={p.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-sm text-gray-500">
          Full project CRUD, skill management, and message inbox are available. Sign in to add,
          edit, or remove projects.
        </p>
      </div>
    </div>
  );
}
