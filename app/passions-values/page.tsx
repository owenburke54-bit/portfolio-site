import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passions & Values | Owen Burke",
  description: "What I care about and how I try to show up.",
};

export default function PassionsValuesPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Passions & Values" subtitle="What drives my work and life." />

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Passion Areas</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>Soccer &amp; high-performance sport</li>
            <li>Finance &amp; fintech</li>
            <li>Health, wellness &amp; wearable technology</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Values</h2>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-gray-700">
            <li>
              <span className="font-medium">Work ethic</span> – Show up prepared, outwork expectations, and always do the extra rep.
            </li>
            <li>
              <span className="font-medium">Thoughtfulness &amp; self-awareness</span> – Be intentional, reflective, and pay attention to how I show up for others.
            </li>
            <li>
              <span className="font-medium">Curiosity</span> – Keep asking questions, exploring new ideas, and learning new skills.
            </li>
            <li>
              <span className="font-medium">Team-first mindset</span> – Put the group’s success over individual credit and support the people around me.
            </li>
            <li>
              <span className="font-medium">Resilience</span> – Get comfortable with rejection and use setbacks as feedback, not as a definition of who I am.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}


