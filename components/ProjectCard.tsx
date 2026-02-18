import Toolchain from "./Toolchain";
import { Droplets, LineChart, Boxes, Link2 } from "lucide-react";

type Tool = "Cursor" | "GitHub" | "Vercel" | "Claude Code" | "Claude";

type ProjectCardProps = {
  title: string;
  description: string;
  highlights: string[];
  tools: Tool[];
  href?: string;
  cta?: string;
  comingSoon?: boolean;
};

export default function ProjectCard({
  title,
  description,
  highlights,
  tools,
  href,
  cta = "View",
  comingSoon = false,
}: ProjectCardProps) {
  const icon =
    title.toLowerCase().includes("hydra") ? <Droplets className="h-5 w-5" /> :
    title.toLowerCase().includes("fin") ? <LineChart className="h-5 w-5" /> :
    <Boxes className="h-5 w-5" />;

  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{description}</p>
      <ul className="mt-4 space-y-1 text-sm list-disc pl-5">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <Toolchain tools={tools} />
      <div className="mt-auto pt-5">
        {comingSoon ? (
          <button className="btn opacity-60 cursor-not-allowed">Coming Soon</button>
        ) : href ? (
          <a href={href} className="btn inline-flex items-center gap-2">
            <Link2 className="h-4 w-4" />
            {cta}
          </a>
        ) : null}
      </div>
    </div>
  );
}

