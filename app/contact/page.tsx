import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Owen Burke",
  description: "Get in touch with Owen.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

      <p className="text-gray-700">
        I'm always open to connecting about finance, analytics, performance, or interesting
        projects. Feel free to reach out.
      </p>

      {/* Email */}
      <div className="text-gray-800">
        <span className="font-medium">Email:</span>{" "}
        <a
          href="mailto:owenburke54@gmail.com"
          className="underline underline-offset-4 hover:text-black"
        >
          owenburke54@gmail.com
        </a>
      </div>

      {/* Social links */}
      <div className="flex gap-3 pt-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Resume (PDF)
        </a>

        <a
          href="https://www.linkedin.com/in/owen-burke-0ab126257"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/owenburke54-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
