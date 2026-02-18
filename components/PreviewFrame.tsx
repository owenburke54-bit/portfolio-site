'use client';
import { useState } from "react";
import IframeModal from "./IframeModal";

export default function PreviewFrame({
  src,
  mode, // 'mobile' | 'web'
  label = "App preview",
}: {
  src: string;
  mode: 'mobile' | 'web';
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <button className="btn-secondary text-xs px-3 py-1.5" onClick={() => setOpen(true)}>
          Interact here
        </button>
      </div>

      {mode === 'mobile' ? (
        <div className="flex justify-center">
          <div
            className="overflow-hidden rounded-2xl border bg-white shadow"
            style={{ width: 390, height: 760, borderColor: "var(--border)" }}
          >
            <iframe
              title={label}
              src={src}
              width={390}
              height={760}
              loading="lazy"
              scrolling="no"
              style={{ pointerEvents: "none", border: "0" }}
            />
          </div>
        </div>
      ) : (
        <div className="w-full overflow-hidden rounded-xl border bg-white" style={{ borderColor: "var(--border)" }}>
          <iframe
            title={label}
            src={src}
            className="block w-full"
            height={720}
            loading="lazy"
            scrolling="no"
            style={{ pointerEvents: "none", border: "0" }}
          />
        </div>
      )}

      {open ? <IframeModal src={src} onClose={() => setOpen(false)} label={label} /> : null}
    </div>
  );
}

