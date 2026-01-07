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

      <div className="flex flex-wrap gap-3">
        {/* Email */}
        <a
          href="mailto:owenburke54@gmail.com?subject=Connecting&body=Hi Owen,%0D%0A%0D%0A"
          className="btn"
        >
          Email me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/owen-burke-0ab126257"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          LinkedIn
        </a>

        {/* GitHub */}
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
