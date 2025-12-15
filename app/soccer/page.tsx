import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soccer | Owen Burke",
  description: "NCAA Division 1 Men's Soccer Player at Stonehill College.",
};

export default function SoccerPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Soccer"
        subtitle="NCAA Division 1 Men's Soccer Player at Stonehill College."
      />
      <section className="card p-6">
        <p className="text-gray-700">
          More content coming soon - highlights, reflections, and what soccer has taught me about
          preparation, resilience, and teamwork.
        </p>
      </section>
    </div>
  );
}
