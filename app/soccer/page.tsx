import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Soccer | Owen Burke",
  description: "NCAA Division 1 Men's Soccer Player at Stonehill College.",
};

export default function SoccerPage() {
  return (
    <div className="space-y-8">
      {/* 1) PAGE HEADER */}
      <section className="space-y-2">
        <PageHeader
          title="Soccer"
          subtitle="NCAA Division I Men's Soccer Player at Stonehill College"
        />
        <p className="text-sm text-[var(--text-muted)]">Senior - Finance - Stonehill College</p>
      </section>

      {/* 2) BIO SECTION */}
      <section className="card p-6">
        <div className="grid gap-6 sm:grid-cols-5">
          {/* LEFT: Headshot */}
          <div className="sm:col-span-2">
            <div className="relative w-full overflow-hidden rounded-xl border bg-white aspect-[3/4]">
              <Image
                src="/images/soccer/headshot.jpg"
                alt="Owen Burke headshot"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* RIGHT: Bio */}
          <div className="sm:col-span-3 space-y-3">
            <div>
              <h2 className="text-xl font-semibold">Owen Burke</h2>
              <p className="text-[var(--text-muted)]">Jersey Number: #8</p>
            </div>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>Height: 5'11"</li>
              <li>Weight: 170 lbs</li>
              <li>Year: Senior</li>
              <li>Hometown: Holliston, MA</li>
              <li>High School: Holliston</li>
              <li>Major: Finance</li>
            </ul>
            <ul className="list-disc list-inside text-[var(--text)] space-y-1">
              <li>NCAA Division I, Northeast Conference</li>
              <li>Team Captain — Fall 2025 season</li>
              <li>3x NCAA Division I Academic All-District (2023–2025)</li>
              <li>NEC All-Conference Second Team (Fall 2025)</li>
              <li>20+ hours weekly for training, travel, and games</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) CAREER STATISTICS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Career Statistics</h2>
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead className="bg-[color:var(--surface-2)] text-[var(--text)]">
                <tr className="text-left">
                  <th className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>Year</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>GP</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>GS</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>G</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>A</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>PTS</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>SH</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>SH%</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>SOG</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>SOG%</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>GW</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>PK-ATT</th>
                  <th className="px-4 py-3 border-b text-right" style={{ borderColor: "var(--border)" }}>MIN</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text)]">
                {[
                  ["2022", "11", "2", "1", "0", "2", "3", "0.333", "2", "0.667", "0", "0-0", "237"],
                  ["2023", "16", "13", "0", "0", "0", "14", "0.000", "9", "0.643", "0", "0-0", "1063"],
                  ["2024", "17", "15", "3", "4", "10", "21", "0.143", "7", "0.333", "0", "0-0", "1177"],
                  ["2025", "19", "19", "4", "3", "11", "45", "0.089", "21", "0.467", "0", "1-1", "1536"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b" style={{ borderColor: "var(--border)" }}>
                    <td className="px-4 py-3">{row[0]}</td>
                    {row.slice(1).map((cell, idx) => (
                      <td key={idx} className="px-4 py-3 text-right tabular-nums">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="font-semibold bg-[color:var(--surface-2)] text-[var(--text)]">
                  {["TOTAL", "63", "49", "8", "7", "23", "83", "0.096", "39", "0.470", "0", "1-1", "4013"].map(
                    (cell, idx) => (
                      <td
                        key={idx}
                        className={`px-4 py-3 ${idx === 0 ? "text-left" : "text-right"} tabular-nums`}
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4) FEATURED ARTICLES */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Featured Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            className="card p-6 transition hover:shadow"
            href="https://stonehillskyhawks.com/news/2025/9/2/written-senior-reflection-owen-burke-mens-soccer.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">
                Written Senior Reflection - Owen Burke, Men's Soccer
              </h3>
              <span className="ml-4 text-xs text-[var(--text-muted)]">Sep 2, 2025</span>
            </div>
            <p className="mt-2 text-[var(--text)]">
              Senior reflection on growth, mindset, and leadership throughout a Division I career.
            </p>
          </a>

          <a
            className="card p-6 transition hover:shadow"
            href="https://stonehillskyhawks.com/news/2025/11/12/mens-soccer-lagoa-burke-recieve-nec-all-conference-recognition.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">
                Lagoa, Burke Receive NEC All-Conference Recognition
              </h3>
              <span className="ml-4 text-xs text-[var(--text-muted)]">Nov 12, 2025</span>
            </div>
            <p className="mt-2 text-[var(--text)]">
              NEC All-Conference recognition highlighting consistent performance and impact.
            </p>
          </a>
        </div>
      </section>

      {/* 5) HIGHLIGHT VIDEO PLACEHOLDER */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <div className="w-full overflow-hidden rounded-xl border" style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-[var(--text)]">Highlight video coming soon</p>
              <p className="text-sm text-[var(--text-muted)]">
                Game film and career highlights will be added here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
