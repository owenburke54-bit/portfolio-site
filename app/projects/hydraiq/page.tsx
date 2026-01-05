import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Owen Burke",
  description: "A selection of projects I've built across data, finance, and sports performance.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        subtitle="A few things I've built — focused on performance, data, and practical tools."
      />

      {/* HydraIQ */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">HydraIQ</h2>
            <p className="mt-1 text-gray-600">
              A hydration app that turns daily intake into a score and actionable recommendations —
              with WHOOP data to personalize targets.
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href="/projects/hydraiq"
              className="btn"
            >
              Project page
            </Link>
            <Link
              href="https://hydra-iq-mvp.vercel.app"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open app
            </Link>
          </div>
        </div>

        <p className="text-gray-700">
          HydraIQ focuses on one thing: better hydration. Log drinks throughout the day, see your
          progress toward a personalized target, and get clear prompts that make it easy to stay on
          track. Your daily score reflects how consistently you hydrate over the day, not just
          whether you hit a single total.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Daily Hydration Score that rewards steady intake</li>
          <li>Fast intake log with common sizes and quick-add buttons</li>
          <li>Insights feed that suggests what to do next</li>
          <li>Trends and streaks to reinforce consistency</li>
        </ul>
      </section>

      {/* Fin-Advisor */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Fin-Advisor</h2>
              <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600">
                In progress
              </span>
            </div>
            <p className="mt-1 text-gray-600">
              Personal portfolio tracker with performance analytics (TWR/XIRR), benchmark comparison,
              and risk metrics.
            </p>
          </div>

          <div className="flex gap-2">
            <Link href="/projects/fin-advisor" className="btn">
              Project page
            </Link>
            {/* Optional: add live app link later */}
            {/* <Link href="https://YOUR_FIN_ADVISOR_URL" className="btn" target="_blank" rel="noopener noreferrer">
              Open app
            </Link> */}
          </div>
        </div>

        <p className="text-gray-700">
          This project is set up to be a clean portfolio dashboard experience: positions,
          transactions, cash-flow-aware returns, and a simple benchmark comparison. Once I finish a
          quick round of UI + accuracy improvements, I’ll link the live build here.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Positions + transaction tracking (buys, sells, deposits/withdrawals)</li>
          <li>Performance: time-weighted return (TWR) and money-weighted return (XIRR)</li>
          <li>Benchmark comparison vs S&amp;P 500</li>
          <li>Risk stats like volatility, beta, and max drawdown</li>
        </ul>
      </section>
    </div>
  );
}
