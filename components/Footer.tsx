export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)", background: "transparent" }}>
      <div className="container-px mx-auto max-w-6xl py-6 text-sm text-[var(--text-muted)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Owen Burke</p>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <a className="hover:underline" href="mailto:owenburke54@gmail.com">
              owenburke54@gmail.com
            </a>
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/owen-burke-0ab126257"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:underline"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume (PDF)
            </a>
            <a
              className="hover:underline"
              href="https://github.com/owenburke54-bit"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

