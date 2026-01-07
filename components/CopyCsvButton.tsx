"use client";

import { useState } from "react";

export default function CopyCsvButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // Fallback for older browsers / blocked permissions
      try {
        const ta = document.createElement("textarea");
        ta.value = textToCopy;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      } catch {
        // fail silently
      }
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="btn"
      aria-label="Copy example CSV to clipboard"
    >
      {copied ? "Copied!" : "Copy CSV"}
    </button>
  );
}
