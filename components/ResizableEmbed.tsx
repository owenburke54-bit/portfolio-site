'use client';
import { useEffect, useState } from "react";

type ResizableEmbedProps = {
  src: string;
  title: string;
  minHeight?: number;
  allowedOrigins: string[];
  className?: string;
};

export default function ResizableEmbed({
  src,
  title,
  minHeight = 700,
  allowedOrigins,
  className,
}: ResizableEmbedProps) {
  const [height, setHeight] = useState<number>(minHeight);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!allowedOrigins.includes(event.origin)) return;
      const data = event.data as any;
      if (data?.type === "EMBED_HEIGHT" && typeof data.height === "number") {
        setHeight(Math.max(minHeight, data.height));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [allowedOrigins, minHeight]);

  return (
    <div className={className}>
      <div className="w-full rounded-2xl border overflow-hidden bg-white" style={{ borderColor: "var(--border)" }}>
        <iframe
          src={src}
          title={title}
          className="w-full block"
          style={{ height }}
          scrolling="no"
        />
      </div>
    </div>
  );
}

