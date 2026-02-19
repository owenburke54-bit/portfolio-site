'use client';
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  targetWidth: number; // logical width of the embedded app (e.g., 1280)
  targetHeight?: number; // logical height fallback/baseline (e.g., 1400)
  containerMaxHeight?: number; // pixels to contain within (e.g., 900)
  allowedOrigins: string[];
  className?: string;
  maxScale?: number; // cap scale (default 1)
  minScale?: number; // floor scale (default 0.5)
};

export default function ScaledEmbed({
  src,
  title,
  targetWidth,
  targetHeight = 1200,
  containerMaxHeight = 900,
  allowedOrigins,
  className,
  maxScale = 1,
  minScale = 0.5,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [logicalHeight, setLogicalHeight] = useState<number>(targetHeight);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!allowedOrigins.includes(event.origin)) return;
      const data = event.data as any;
      if (data?.type === "EMBED_HEIGHT" && typeof data.height === "number") {
        setLogicalHeight(Math.max(targetHeight, data.height));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [allowedOrigins, targetHeight]);

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

  // Scale to fit both width and a maximum container height to avoid page cutoff
  const scale = containerWidth
    ? Math.max(
        minScale,
        Math.min(
          maxScale,
          containerWidth / targetWidth,
          containerMaxHeight / (logicalHeight || targetHeight)
        )
      )
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

