'use client';
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/passions-values", label: "Passions & Values" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const segment = useSelectedLayoutSegment();

  const isActive = (href: string) => {
    if (href === "/") {
      return segment === null;
    }
    const first = href.split("/").filter(Boolean)[0];
    return segment === first;
  };

  return (
    <header className="border-b border-gray-200">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Owen Burke</Link>
        <nav className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-2 py-1 rounded-md transition hover:bg-gray-100 ${
                isActive(l.href) ? "bg-gray-100" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


