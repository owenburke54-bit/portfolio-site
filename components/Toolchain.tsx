import { Github, Triangle, Sparkles, MousePointer2, ArrowRight } from "lucide-react";

type Tool = "Cursor" | "GitHub" | "Vercel" | "Claude Code" | "Claude";

const ICONS: Record<Tool, React.ReactNode> = {
  "Cursor": <MousePointer2 className="h-3.5 w-3.5" />,
  "GitHub": <Github className="h-3.5 w-3.5" />,
  "Vercel": <Triangle className="h-3.5 w-3.5" />,
  "Claude Code": <Sparkles className="h-3.5 w-3.5" />,
  "Claude": <Sparkles className="h-3.5 w-3.5" />,
};

export default function Toolchain({ tools }: { tools: Tool[] }) {
  return (
    <div className="mt-3 flex items-center flex-wrap gap-2 text-xs text-[var(--text-muted)]">
      {tools.map((t, i) => (
        <div key={t + i} className="inline-flex items-center gap-1 rounded-full border px-2 py-1" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
          {ICONS[t] as any}
          <span>{t}</span>
          {i < tools.length - 1 ? <ArrowRight className="ml-1 h-3 w-3 opacity-60" /> : null}
        </div>
      ))}
    </div>
  );
}

