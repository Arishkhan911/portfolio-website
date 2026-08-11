import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import type { Message } from '@/lib/types';
import { ArrowLeft, LogOut, Mail, MailOpen, Trash2 } from 'lucide-react';

export default function Messages() {
  const { session, loading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  const fetchMessages = () => {
    supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setMessages(data);
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (session) fetchMessages();
  }, [session]);

  const toggleRead = async (id: string, read: boolean) => {
    await supabase.from('messages').update({ read: !read }).eq('id', id);
    fetchMessages();
  };

  const deleteMessage = async (id: string) => {
    await supabase.from('messages').delete().eq('id', id);
    fetchMessages();
  };

  if (loading || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-gray-400">
        {!session && !loading ? (
          <Link to="/login" className="text-cyan-400 hover:text-cyan-300">
            Please sign in
          </Link>
        ) : (
          'Loading…'
        )}
      </div>
    );
  }

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link
              to="/admin"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold">
              Messages {unreadCount > 0 && <span className="text-cyan-400 text-lg">({unreadCount} new)</span>}
            </h1>
          </div>
          <button
            onClick={() => supabase.auth.signOut()}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {dataLoading ? (
          <p className="text-gray-400">Loading…</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-400">No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`rounded-xl border p-5 transition-colors ${
                  m.read
                    ? 'border-white/10 bg-white/5'
                    : 'border-cyan-500/30 bg-cyan-500/5'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{m.name}</h3>
                      {!m.read && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{m.email}</p>
                    {m.subject && (
                      <p className="text-sm text-cyan-300 mt-2">{m.subject}</p>
                    )}
                    <p className="text-sm text-gray-300 mt-2 whitespace-pre-wrap">{m.message}</p>
                    <p className="text-xs text-gray-500 mt-3">
                      {new Date(m.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => toggleRead(m.id, m.read)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      title={m.read ? 'Mark as unread' : 'Mark as read'}
                    >
                      {m.read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => deleteMessage(m.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors p-1"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
