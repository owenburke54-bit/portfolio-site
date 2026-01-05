import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Owen Burke",
  description: "A few things I'm building and exploring.",
};

const PROJECTS = [
  {
    title: "HydraIQ",
    description: "Personal analytics app for turning daily habits and wearable data into simple, actionable insights.",
    href: "/projects/hydraiq",
    cta: "View project",
    badge: null as string | null,
  },
  {
    title: "Fin-Advisor",
    description:
      "Personal portfolio tracker with performance analytics (TWR/XIRR), benchmark comparison, and risk metrics.",
    href: "/projects/fin-advisor",
    cta: "View project",
    badge: "In progress",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Projects" subtitle="A few things I'm building and exploring." />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <div key={p.title} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                {p.badge ? (
                  <span className="mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-gray-600">
                    {p.badge}
                  </span>
                ) : null}
                <p className="mt-3 text-gray-700">{p.description}</p>
              </div>
            </div>

            <div className="mt-5">
              <Link href={p.href} className="btn">
                {p.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
