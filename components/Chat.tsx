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
            "I don't have that detail yet — you can check the relevant page or contact Owen directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative mx-auto max-w-5xl overflow-hidden rounded-lg px-5 py-4"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.2), 0 4px 24px rgba(0,0,0,0.15)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sm tracking-tight">Talk to Owen</h3>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'rgba(74, 222, 128, 0.8)',
              boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)',
            }}
            aria-hidden
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V3.8762a4.4992 4.4992 0 0 1 6.1408 1.6464 4.4873 4.4873 0 0 1-2.3655 1.9728v5.6772a.7664.7664 0 0 0-.3879.6765zm-12.2515 4.2274l-2.0201-1.1638a.0804.0804 0 0 1-.0332-.0615V6.0756a4.4992 4.4992 0 0 1 6.1408-1.6464 4.485 4.485 0 0 1 2.3655 1.9728v5.6772a.79.79 0 0 0-.407.667z"/>
            </svg>
            <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
              gpt-4.1-mini
            </span>
          </div>
          <span
            className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-md"
            style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)' }}
          >
            AI Agent
          </span>
        </div>
      </div>

      <p className="text-[11px] pb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
        This AI answers from Owen&apos;s published info only.
      </p>

      {/* Chat area */}
      <div
        className="mb-3 overflow-hidden rounded-md"
        style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          ref={viewportRef}
          className="overflow-auto px-4 py-3 space-y-2.5 text-[13px] leading-relaxed"
          style={{ maxHeight: '300px' }}
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
      <div className="flex items-center gap-2 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
          }}
          className="flex-1 bg-transparent px-4 py-2.5 text-sm min-w-0 placeholder:opacity-50"
          style={{ color: 'var(--text)' }}
          placeholder="Ask about projects, soccer, or background…"
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
