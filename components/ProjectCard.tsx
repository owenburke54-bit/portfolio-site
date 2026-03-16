import Image from "next/image";
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
  imageFit = "cover",
  imageAspect = "video",
}: ProjectCardProps) {
  return (
    <div className="card h-full flex flex-col overflow-hidden">
      {/* Image wrapper with consistent spacing */}
      <div className="px-6 pt-6 pb-4">
        <div
          className="w-full flex items-center justify-center rounded-xl border"
          style={{
            background: "#0d1220",
            borderColor: "var(--border)",
            aspectRatio: imageAspect === "taller" ? "4/3" : "16/9",
          }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              width={320}
              height={180}
              quality={95}
              className={imageFit === "contain" ? "max-w-full h-auto object-contain" : "max-w-full h-auto object-cover"}
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
            <span className="text-xs text-[var(--text-muted)]">
              {comingSoon ? "Coming Soon" : "Image"}
            </span>
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

