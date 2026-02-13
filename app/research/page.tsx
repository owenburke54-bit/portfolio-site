import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Owen Burke",
  description: "Short essays and notes.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Writing" />

      {/* Articles */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Soccer article */}
        <article className="card p-6 flex flex-col">
          <h2 className="text-lg font-semibold">
            The Best 10 Soccer Players I've Seen from the Stands
          </h2>
          <p className="mt-1 text-xs text-gray-500">January 28, 2026</p>
          <p className="mt-3 text-gray-700">
            Notes from seven European matches in 2024–2025. Rules, context, and a
            countdown from 10 to 1—with a few honorable mentions.
          </p>
          <div className="mt-4">
            <a href="/research/best-10-from-the-stands" className="btn">
              Read article
            </a>
          </div>
        </article>

        {/* Markets article */}
        <article className="card p-6 flex flex-col">
          <h2 className="text-lg font-semibold">
            The State of the Financial Markets: Nearing the Peak
          </h2>
          <p className="mt-1 text-xs text-gray-500">February 13, 2026</p>
          <p className="mt-3 text-gray-700">
            Late-cycle dynamics, rate path, inflation trajectory, and positioning implications as breadth narrows.
          </p>
          <div className="mt-4">
            <a href="/research/state-of-the-financial-markets-nearing-the-peak" className="btn">
              Read article
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
