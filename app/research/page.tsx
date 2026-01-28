import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Owen Burke",
  description: "Short essays and notes.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Writing" subtitle="Short essays and notes." />

      {/* Articles */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Soccer article */}
        <article className="card p-6 flex flex-col">
          <h2 className="text-lg font-semibold">
            The Best 10 Soccer Players I've Seen from the Stands
          </h2>
          <p className="mt-1 text-xs text-gray-500">January 28, 2026</p>
          <p className="mt-3 text-gray-700">
            A fan-eye perspective after attending seven European matches across 2024–2025.
            Rules, context, and a countdown from 10 to 1—with a few honorable mentions.
          </p>
          <div className="mt-4">
            <a href="/research/best-10-from-the-stands" className="btn">
              Read article
            </a>
          </div>
        </article>

        {/* Placeholder future post */}
        <article className="card p-6 flex flex-col">
          <h2 className="text-lg font-semibold">FinTech Q&A Trends</h2>
          <p className="mt-1 text-xs text-gray-500">Coming soon</p>
          <p className="mt-3 text-gray-700">
            Notes on common questions, themes, and signals from recent FinTech Q&A discussions.
          </p>
        </article>
      </section>
    </div>
  );
}
