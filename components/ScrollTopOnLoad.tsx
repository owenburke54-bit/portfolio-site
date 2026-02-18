'use client';
import { useEffect } from 'react';

export default function ScrollTopOnLoad() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent browser restoring a previous scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // If no hash, ensure we start at the top of the page
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  }, []);
  return null;
}

