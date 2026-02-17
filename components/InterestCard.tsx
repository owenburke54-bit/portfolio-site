import { Trophy, BookOpenText, Globe2 } from "lucide-react";

type Interest = "Soccer" | "Writing" | "Study Abroad";

export default function InterestCard({
  title,
  bullets,
  body,
}: {
  title: Interest | string;
  bullets?: string[];
  body?: string;
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
    </div>
  );
}

