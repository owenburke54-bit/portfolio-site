import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Owen Burke",
  description: "Areas I'm exploring and research notes.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Research" subtitle="Areas I'm exploring and research notes." />
      <section className="card p-6">
        <p className="text-gray-700">
          More to come - I'll publish short write-ups as I experiment and learn.
        </p>
      </section>
    </div>
  );
}
