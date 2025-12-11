export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between text-sm text-gray-600">
        <p>© {year} Owen Burke</p>
        <div className="flex gap-3">
          <a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}


