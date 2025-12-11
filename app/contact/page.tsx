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
        I’m always open to connecting about finance, analytics, performance, or interesting
        projects. Feel free to reach out.
      </p>
      <div className="flex gap-3">
        <a className="btn" href="mailto:owenburke54@gmail.com">Email me</a>
        <a className="btn-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn-secondary" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}


