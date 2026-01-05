import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study Abroad | Owen Burke",
  description: "Interactive Power BI travel maps + dataset from my study abroad travels.",
};

const POWERBI_EMBED_URL =
  "https://app.powerbi.com/view?r=eyJrIjoiMjMwYTk3ODktYTdkNC00ODliLWE1NzItMjc4OTI3NWZjYTdkIiwidCI6IjJkMWM1MzcyLWY4OGYtNDZjMS1hNTU3LWVkNzViOWIyODkzYyIsImMiOjN9";

// IMPORTANT: make sure this file exists at public/study-abroad/study-abroad-dataset.xlsx
const DATASET_XLSX = "/study-abroad/study-abroad-dataset.xlsx";

const SNAPSHOTS: { title: string; src: string; alt: string }[] = [
  { title: "Cities map", src: "/study-abroad/cities.png", alt: "Cities visited map" },
  { title: "Cities tooltip example", src: "/study-abroad/citiestooltip.png", alt: "Cities tooltip example" },
  { title: "Airports map", src: "/study-abroad/airports.png", alt: "Airports used map" },
  { title: "Airports tooltip example", src: "/study-abroad/airportstooltip.png", alt: "Airports tooltip example" },
  { title: "Stadiums map", src: "/study-abroad/stadiums.png", alt: "Soccer stadiums visited map" },
  { title: "Stadiums tooltip example", src: "/study-abroad/stadiumstooltip.png", alt: "Stadiums tooltip example" },
];

export default function StudyAbroadPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Study Abroad"
        subtitle="Interactive Power BI maps of my travels (cities, airports, and stadiums)."
      />

      {/* Interactive embed (TOP) */}
      <section className="card p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Europe Travel Map (Power BI)</h2>
          <p className="mt-1 text-sm text-gray-600">
            Hover for tooltips, click points to highlight related stops, and use the built-in filters.
          </p>
        </div>

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

      {/* Snapshots (SECOND) */}
      <section className="card p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Snapshots</h2>
          <p className="mt-1 text-sm text-gray-600">
            Static views from the dashboard (including tooltip examples).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SNAPSHOTS.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-xl border bg-white">
              <div className="border-b px-3 py-2">
                <figcaption className="text-sm font-medium">{img.title}</figcaption>
              </div>
              <Image src={img.src} alt={img.alt} width={1600} height={1000} className="h-auto w-full" />
            </figure>
          ))}
        </div>
      </section>

      {/* Dataset download */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Dataset</h2>
        <p className="text-gray-700">
          Download the dataset used to power the dashboard (cities, airports, stadiums, dates, and coordinates).
        </p>

        <div className="flex flex-wrap gap-2">
          <a className="btn" href={DATASET_XLSX} download>
            Download Excel (.xlsx)
          </a>

          <Link href={DATASET_XLSX} className="btn" target="_blank" rel="noopener noreferrer">
            Open in browser
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          If the download 404s, the filename in <code>public/study-abroad</code> doesn’t match the link.
        </p>
      </section>
    </div>
  );
}
