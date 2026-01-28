import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best 10 Soccer Players I've Seen from the Stands | Owen Burke",
  description:
    "Notes from seven European matches in 2024–2025. Rules, context, and a countdown from 10 to 1.",
};

export default function Best10FromTheStands() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="The Best 10 Soccer Players I've Seen from the Stands"
        subtitle="A personal list based on live matches attended in 2024–2025"
      />

      {/* Meta */}
      <section className="card p-6">
        <p className="text-sm text-gray-600">
          Date: 1/28/2026 · Author: Owen Burke
        </p>
      </section>

      {/* Rules */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Rules</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>I've watched every player on this list in person.</li>
          <li>Each player performed well and stood out on the pitch.</li>
          <li>
            Consistency matters, but a single performance can carry a lot of
            weight.
          </li>
          <li>
            Evaluations are primarily the eye test and on‑field impact I saw,
            not analytics or reputation.
          </li>
          <li>Reputation was ignored to the best of my ability.</li>
          <li>Maximum of two players per team.</li>
          <li>This is my personal opinion based on my live experiences.</li>
        </ol>
      </section>

      {/* Matches attended */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Matches I attended (2024–2025)</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Mar 2, 2024: Valencia vs Real Madrid — La Liga</li>
          <li>Feb 2, 2025: Fiorentina vs Genoa — Serie A</li>
          <li>Feb 16, 2025: Fiorentina vs Como — Serie A</li>
          <li>Mar 9, 2025: Empoli vs Roma — Serie A</li>
          <li>Mar 16, 2025: Fiorentina vs Juventus — Serie A</li>
          <li>Mar 20, 2025: Italy vs Germany — UEFA Nations League QF (Leg 1)</li>
          <li>May 8, 2025: Fiorentina vs Real Betis — UEFA Conference League SF (Leg 2)</li>
        </ul>
      </section>

      {/* Countdown sections */}
      <section className="card p-6 space-y-6">
        <h2 className="text-xl font-semibold">Top 10</h2>
        <div className="space-y-6 text-gray-700">
          {[
            { n: 10, name: "Robin Gosens (Fiorentina)" },
            { n: 9, name: "Nico Paz (Como)" },
            { n: 8, name: "Antony (Real Betis)" },
            { n: 7, name: "Isco (Real Betis)" },
            { n: 6, name: "Kouadio Manu Kone (Roma)" },
            { n: 5, name: "Jamal Musiala (Germany)" },
            { n: 4, name: "Nicolo Barella (Italy)" },
            { n: 3, name: "Sandro Tonali (Italy)" },
            { n: 2, name: "Vinicius Jr. (Real Madrid)" },
            { n: 1, name: "Joshua Kimmich (Germany)" },
          ].map((p) => (
            <div key={p.n} className="space-y-2">
              <h3 className="text-lg font-semibold">
                {p.n}. {p.name}
              </h3>
              <p className="text-gray-700">
                Write‑up coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Honorable mentions */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Honorable mentions</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Moise Kean (Fiorentina)</li>
          <li>David De Gea (Fiorentina)</li>
          <li>Matias Soule (Roma)</li>
          <li>Alessandro Bastoni (Italy)</li>
          <li>Toni Kroos (Real Madrid)</li>
          <li>Eduardo Camavinga (Real Madrid)</li>
          <li>Destiny Udogie (Italy)</li>
          <li>Weston McKennie (Juventus)</li>
        </ul>
      </section>
    </div>
  );
}

