'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      const threshold = 12;
      if (Math.abs(delta) > threshold) {
        setHidden(delta > 0 && y > 80);
        setLastY(y);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container-px mx-auto max-w-6xl">
        <div className="mt-3 rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <div className="h-14 px-4 sm:px-6 flex items-center justify-between bg-[color:var(--surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70 rounded-xl">
            <Link href="/" className="font-semibold tracking-tight">
              Owen Burke
            </Link>
            <nav className="hidden md:flex items-center gap-2 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-3 py-1 rounded-md hover:bg-white/5">
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t" style={{ borderColor: "var(--border)" }}>
              <nav className="bg-[color:var(--surface)] rounded-b-xl px-4 py-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block px-2 py-2 rounded-md hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
