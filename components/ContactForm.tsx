'use client';
import { useToast } from "@/components/Toast";

export default function ContactForm() {
  const { show } = useToast();
  return (
    <form
      className="card p-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        show("Thanks — I’ll reply soon.");
      }}
    >
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          rows={4}
          className="w-full rounded-md border bg-transparent px-3 py-2"
          style={{ borderColor: "var(--border)" }}
          required
        />
      </div>
      <button className="btn" type="submit">Send</button>
    </form>
  );
}

