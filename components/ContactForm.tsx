'use client';
import { useState } from "react";
import { useToast } from "@/components/Toast";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

export default function ContactForm() {
  const { show } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      show("Form not configured — add NEXT_PUBLIC_FORMSPREE_FORM_ID to your environment.");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        show("Thanks — I'll reply soon.");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        show(data.error || "Something went wrong. Please try again or email me directly.");
      }
    } catch {
      show("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          name="name"
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
          disabled={loading}
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          name="_replyto"
          type="email"
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
          disabled={loading}
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
          disabled={loading}
        />
      </div>
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
