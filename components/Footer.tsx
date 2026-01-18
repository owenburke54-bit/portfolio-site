export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/80 bg-white/60">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between text-sm text-gray-600">
        <p>Â© {year} Owen Burke</p>

        <div className="flex gap-3">
          <a
            className="hover:underline"
            href="https://github.com/owenburke54-bit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/owen-burke-0ab126257"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
