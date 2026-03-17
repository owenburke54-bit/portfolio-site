"use client";

import Image from "next/image";
import Toolchain from "./Toolchain";
import { Link2 } from "lucide-react";
import { useRouter } from "next/navigation";

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
  imagePosition?: "top" | "center" | "bottom";
  imageFit?: "cover" | "contain";
  imageAspect?: "video" | "taller";
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
  imagePosition = "top",
  // imageFit/imageAspect kept for backwards compatibility, but the
  // card media frame is intentionally standardized across projects.
  imageFit: _imageFit = "cover",
  imageAspect: _imageAspect = "video",
}: ProjectCardProps) {
  const router = useRouter();
  const clickable = Boolean(href) && !comingSoon;

  const onCardActivate = () => {
    if (!href || comingSoon) return;
    router.push(href);
  };

  return (
    <div
      className={`card h-full flex flex-col overflow-hidden ${clickable ? "cursor-pointer" : ""}`}
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={(e) => {
        if (!clickable) return;
        const target = e.target as HTMLElement | null;
        if (target?.closest("a,button")) return;
        onCardActivate();
      }}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardActivate();
        }
      }}
    >
      {/* Image wrapper with consistent spacing */}
      <div className="px-6 pt-6 pb-4">
        <div
          className="w-full overflow-hidden rounded-xl border relative"
          style={{
            background: "#0d1220",
            borderColor: "var(--border)",
            aspectRatio: "16/9",
          }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
              className="object-cover"
              style={{
                objectPosition:
                  imagePosition === "center"
                    ? "center"
                    : imagePosition === "bottom"
                    ? "bottom"
                    : "top",
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-[var(--text-muted)]">
                {comingSoon ? "Coming Soon" : "Image"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card content on a consistent grid */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm text-[var(--text-muted)]">{description}</p>
        ) : null}
        {highlights.length > 0 ? (
          <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
        {tools.length > 0 ? <Toolchain tools={tools} /> : null}
        <div className="mt-auto pt-4">
          {comingSoon ? (
            <button className="btn opacity-60 cursor-not-allowed" disabled>
              Coming Soon
            </button>
          ) : href ? (
            <a
              href={href}
              className="btn inline-flex items-center gap-2"
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Link2 className="h-4 w-4" />
              {cta}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

