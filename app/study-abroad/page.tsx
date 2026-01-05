import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad | Owen Burke",
  description: "Interactive Power BI travel maps from studying abroad.",
};

const POWERBI_EMBED_URL =
  "https://app.powerbi.com/view?r=eyJrIjoiMjMwYTk3ODktYTdkNC00ODliLWE1NzItMjc4OTI3NWZjYTdkIiwidCI6IjJkMWM1MzcyLWY4OGYtNDZjMS1hNTU3LWVkNzViOWIyODkzYyIsImMiOjN9";

export default function StudyAbroadPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Study Abroad"
        subtitle="Interactive Power BI maps of my travels (cities, airports, and stadiums)."
      />

      <section className="card p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Europe Travel Map (Power BI)</h2>
          <p className="mt-2 text-sm text-gray-600">
            Hover for tooltips, click points to highlight related stops, and use the built-in filters.
          </p>
        </div>

        {/* Responsive 16:9 embed */}
        <div className="w-full overflow-hidden rounded-xl border bg-white">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Power BI - Study Abroad Maps"
              src={POWERBI_EMBED_URL}
              className="absolute left-0 top-0 h-full w-full"
              allowFullScreen
            />
          </div>
        </div>

        <div className="rounded-xl border bg-gray-50 p-4">
          <h3 className="text-sm font-semibold">What’s included</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Cities visited with counts and first/earliest dates</li>
            <li>Airports used and frequency</li>
            <li>Soccer stadium visits plotted geographically</li>
            <li>Filters to explore by country / time</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
