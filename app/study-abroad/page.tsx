import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad | Owen Burke",
  description: "Notes and highlights from studying abroad.",
};

export default function StudyAbroadPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Study Abroad" subtitle="Experiences and takeaways." />
      <section className="card p-6">
        <p className="text-gray-700">
          Content coming soon. Iâ€™ll share stories, photos, and what I learned through the
          experience.
        </p>
      </section>
    </div>
  );
}
