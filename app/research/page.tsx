import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Owen Burke",
  description: "Short essays and notes.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Writing" subtitle="Short essays and notes." />
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Coming soon</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>The Best 10 Soccer Players I've Seen from the Stands</li>
          <li>FinTech Q&A Trends</li>
        </ul>
      </section>
    </div>
  );
}
