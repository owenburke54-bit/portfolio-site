'use client';
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

type Msg = { role: 'user' | 'assistant'; content: string };

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content: "Hi — I'm Owen (AI). Ask anything about my work or background.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading]);

  const send = async () => {
    const content = input.trim();
    if (!content || loading) return;
    if (messages.filter((m) => m.role === 'user').length >= 15) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Free demo limit reached — feel free to contact Owen directly.',
        },
      ]);
      return;
    }
    setLoading(true);
    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const contentType = res.headers.get('content-type') ?? '';
      if (contentType.includes('application/json')) {
        const data = (await res.json()) as { message?: string };
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === 'assistant' && last.content === '') {
            return [...prev.slice(0, -1), { ...last, content: data.message ?? "I don't have that detail yet — you can check the relevant page or contact Owen directly." }];
          }
          return prev;
        });
        return;
      }
      if (!res.ok || !res.body) throw new Error('Stream failed');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.delta) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === 'assistant') {
                    return [...prev.slice(0, -1), { ...last, content: last.content + data.delta }];
                  }
                  return prev;
                });
              }
              if (data.done && data.message) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === 'assistant' && !last.content) {
                    return [...prev.slice(0, -1), { ...last, content: data.message }];
                  }
                  return prev;
                });
              }
            } catch {
              /* skip parse errors */
            }
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && last.content === '') {
          return [
            ...prev.slice(0, -1),
            { role: 'assistant', content: "I don't have that detail yet — you can check the relevant page or contact Owen directly." },
          ];
        }
        return prev;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)] shadow-xl shadow-black/30 px-4 py-4 sm:px-5"
    >
      {/* Header */}
      <div className="flex flex-col gap-1.5 pb-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-medium text-sm tracking-tight">Talk to Owen</h3>
          <span
            className="h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: 'rgba(74, 222, 128, 0.8)',
              boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)',
            }}
            aria-hidden
          />
          <span
            className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-md"
            style={{ color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.06)' }}
          >
            In Progress
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <img
              src="/openai-logo.png"
              alt="OpenAI"
              className="h-4 w-4 shrink-0 opacity-80"
              style={{ filter: 'brightness(0) invert(1)' }}
              width={16}
              height={16}
            />
            <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
              gpt-4.1-mini
            </span>
          </div>
          <span
            className="hidden text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-md sm:inline"
            style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)' }}
          >
            AI Agent
          </span>
        </div>
      </div>

      <p className="text-[11px] pb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
        This AI answers from Owen&apos;s published info only.
      </p>

      {/* Chat area */}
      <div className="mb-2 overflow-hidden rounded-xl border border-white/5 bg-[color:var(--surface-2)]">
        <div
          ref={viewportRef}
          className="overflow-y-auto overflow-x-hidden px-3 py-3 space-y-2.5 text-[13px] leading-relaxed sm:px-4 min-h-0 bg-[color:var(--surface-2)]"
          style={{
            height: '160px',
            maxHeight: '160px',
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.role === 'user'
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-muted)]'
              }
            >
              <span className="font-medium text-[11px] uppercase tracking-wider opacity-60">
                {m.role === 'user' ? 'You' : 'Owen'}
              </span>
              <span className="block mt-0.5">{m.content}</span>
            </div>
          ))}
          {loading ? (
            <div className="text-[var(--text-muted)] text-[13px]">Thinking…</div>
          ) : null}
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 rounded-xl overflow-hidden border border-white/5 bg-[color:var(--surface-2)]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm placeholder:opacity-50 sm:px-4"
          style={{ color: 'var(--text)' }}
          placeholder="Ask about work, soccer, or background…"
        />
        <button
          onClick={send}
          disabled={loading}
          className="p-2.5 flex-shrink-0 transition-opacity hover:opacity-80 disabled:opacity-40"
          style={{ color: 'var(--accent)' }}
          aria-label="Send"
        >
          <Send className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
