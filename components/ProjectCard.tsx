import Toolchain from "./Toolchain";
import { Link2 } from "lucide-react";

type Tool = "Cursor" | "GitHub" | "Vercel" | "Claude Code" | "Claude";

type ProjectCardProps = {
  title: string;
  description: string;
  highlights: string[];
  tools: Tool[];
  href?: string;
  cta?: string;
  comingSoon?: boolean;
  imageSrc?: string;
};

export default function ProjectCard({
  title,
  description,
  highlights,
  tools,
  href,
  cta = "View",
  comingSoon = false,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="card p-6 h-full flex flex-col overflow-hidden">
      {imageSrc ? (
        <div className="-mx-6 -mt-6 mb-4 w-[calc(100%+3rem)] overflow-hidden rounded-t-xl" style={{ background: "var(--surface-2)" }}>
          <img src={imageSrc} alt="" className="w-full aspect-video object-cover object-top" />
        </div>
      ) : !comingSoon ? (
        <div className="-mx-6 -mt-6 mb-4 w-[calc(100%+3rem)] aspect-video flex items-center justify-center rounded-t-xl" style={{ background: "var(--surface-2)" }}>
          <span className="text-xs text-[var(--text-muted)]">Image</span>
        </div>
      ) : null}
      <h3 className="text-lg font-semibold">{title}</h3>
      {description ? <p className="mt-2 text-sm text-[var(--text-muted)]">{description}</p> : null}
      {highlights.length > 0 ? (
        <ul className="mt-4 space-y-1 text-sm list-disc pl-5">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
      {tools.length > 0 ? <Toolchain tools={tools} /> : null}
      <div className="mt-auto pt-5">
        {comingSoon ? (
          <button className="btn opacity-60 cursor-not-allowed" disabled>Coming Soon</button>
        ) : href ? (
          <a
            href={href}
            className="btn inline-flex items-center gap-2"
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Link2 className="h-4 w-4" />
            {cta}
          </a>
        ) : null}
      </div>
    </div>
  );
}

