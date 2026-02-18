'use client';
import { useEffect } from "react";

export default function IframeModal({
  src,
  onClose,
  label = "Live preview",
}: {
  src: string;
  onClose: () => void;
  label?: string;
}) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-[101] w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="absolute top-2 right-2 z-[102]">
          <button className="btn-secondary text-xs px-3 py-1.5" onClick={onClose} aria-label="Close preview">
            Close
          </button>
        </div>
        <iframe
          title={label}
          src={src}
          className="h-full w-full block"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}

