'use client';
import { useEffect, useRef, useState } from "react";

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  "Where are you from?",
  "Tell me about your soccer career",
  "What position did you play and what did you learn in college?",
  "Give me the 30-second intro",
  "What projects are you building?",
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
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Keep the message viewport scrolled to bottom without moving the whole page
    const el = viewportRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
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
    <div className="card p-3 space-y-2 max-w-lg mx-auto">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="font-semibold text-sm truncate">Talk to Owen</h3>
          <span className="text-[10px] rounded-full border px-1.5 py-0.5 flex-shrink-0" style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}>
            WIP
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--text-muted)] flex-shrink-0">
          <img src="/openai-logo.svg" alt="OpenAI" className="h-3.5 w-3.5 opacity-80" />
          <span className="text-[10px] font-medium">gpt-4.1-mini</span>
        </div>
      </div>
      <p className="text-[10px] text-[var(--text-muted)] leading-tight">
        Answers from Owen&apos;s published info only.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTIONS.slice(0, 3).map((s) => (
          <button
            key={s}
            className="btn-secondary text-[10px] px-2 py-1"
            onClick={() => send(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="rounded border" style={{ borderColor: 'var(--border)' }}>
        <div ref={viewportRef} className="max-h-[120px] overflow-auto p-2.5 space-y-1.5 text-xs">
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
        </div>
      </div>

      <div className="flex gap-1.5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          className="flex-1 rounded border bg-transparent px-2 py-1.5 text-xs min-w-0"
          style={{ borderColor: 'var(--border)' }}
          placeholder="Ask about projects, soccer, interests…"
        />
        <button className="btn text-xs px-3 py-1.5" onClick={() => send()} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

