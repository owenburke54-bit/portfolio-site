import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Owen Burke",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Projects" subtitle="A few things I'm building and exploring." />
      <div className="grid gap-6 sm:grid-cols-2">
        <article className="card p-6 flex flex-col">
          <h3 className="text-lg font-semibold">HydraIQ</h3>
          <p className="mt-2 text-sm text-gray-600">
            Personal analytics app for turning daily habits and wearable data into
            simple, actionable insights.
          </p>
          <div className="mt-4">
            <Link href="/projects/hydraiq" className="btn">
              View project
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}



