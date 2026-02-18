'use client';
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  targetWidth: number; // logical width of the embedded app (e.g., 1280)
  minHeight?: number; // fallback logical height before first message
  allowedOrigins: string[];
  className?: string;
  maxScale?: number; // cap scale (default 1)
  minScale?: number; // floor scale (default 0.5)
};

export default function ScaledEmbed({
  src,
  title,
  targetWidth,
  minHeight = 1200,
  allowedOrigins,
  className,
  maxScale = 1,
  minScale = 0.5,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [logicalHeight, setLogicalHeight] = useState<number>(minHeight);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!allowedOrigins.includes(event.origin)) return;
      const data = event.data as any;
      if (data?.type === "EMBED_HEIGHT" && typeof data.height === "number") {
        setLogicalHeight(Math.max(minHeight, data.height));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [allowedOrigins, minHeight]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        setContainerWidth(w);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = containerWidth
    ? Math.max(minScale, Math.min(maxScale, containerWidth / targetWidth))
    : 1;

  const renderedHeight = logicalHeight * scale;

  return (
    <div ref={containerRef} className={className}>
      <div
        className="relative rounded-2xl border overflow-hidden bg-white"
        style={{ borderColor: "var(--border)", height: renderedHeight }}
      >
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0"
          style={{
            width: targetWidth,
            height: logicalHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            border: 0,
          }}
          scrolling="no"
        />
      </div>
    </div>
  );
}

