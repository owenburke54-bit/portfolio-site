'use client';
import { useEffect, useRef, useState } from "react";

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  "Give me the 30-second intro",
  "What projects are you building?",
  "What are your technical skills?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Hi — I’m Owen (AI). Ask about projects, skills, or interests. I’ll answer from the site’s knowledge only.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (prompt?: string) => {
    const content = (prompt ?? input).trim();
    if (!content || loading) return;
    if (messages.filter((m) => m.role === 'user').length >= 15) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Free demo limit reached — feel free to contact Owen directly.',
        },
      ]);
      return;
    }
    setLoading(true);
    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { message: string };
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I don’t have that detail yet — you can check the project page or contact Owen directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Talk to Owen</h3>
        <div className="hidden sm:flex gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="btn-secondary text-xs px-3 py-1.5"
              onClick={() => send(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border" style={{ borderColor: 'var(--border)' }}>
        <div className="max-h-[360px] overflow-auto p-4 space-y-3 text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === 'user' ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}
            >
              <span className="font-medium">{m.role === 'user' ? 'You' : 'Owen'}:</span>{' '}
              <span>{m.content}</span>
            </div>
          ))}
          {loading ? <div className="text-[var(--text-muted)]">Thinking…</div> : null}
          <div ref={endRef} />
        </div>
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          className="flex-1 rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: 'var(--border)' }}
          placeholder="Ask about projects, skills, or interests…"
        />
        <button className="btn" onClick={() => send()} disabled={loading}>
          Send
        </button>
      </div>

      <div className="sm:hidden flex flex-wrap gap-2 pt-1">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="btn-secondary text-xs px-3 py-1.5"
            onClick={() => send(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

