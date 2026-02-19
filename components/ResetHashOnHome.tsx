'use client';
import { useEffect } from "react";

export default function ResetHashOnHome() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Always start at top and clear any stray hash on initial mount of the homepage
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);
  return null;
}

