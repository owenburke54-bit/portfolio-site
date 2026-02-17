import { Trophy, BookOpenText, Globe2 } from "lucide-react";

type Interest = "Soccer" | "Writing" | "Study Abroad";

export default function InterestCard({
  title,
  bullets,
  body,
  actions,
}: {
  title: Interest | string;
  bullets?: string[];
  body?: string;
  actions?: { label: string; href: string }[];
}) {
  const icon =
    title === "Soccer" ? <Trophy className="h-5 w-5" /> :
    title === "Writing" ? <BookOpenText className="h-5 w-5" /> :
    title === "Study Abroad" ? <Globe2 className="h-5 w-5" /> :
    <BookOpenText className="h-5 w-5" />;

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {bullets ? (
        <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {body ? <p className="mt-3 text-sm text-[var(--text-muted)]">{body}</p> : null}
      {actions && actions.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((a) => (
            <a key={a.href + a.label} href={a.href} className="btn-secondary text-xs px-3 py-1.5">
              {a.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

