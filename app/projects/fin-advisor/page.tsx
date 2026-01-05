import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fin-Advisor | Owen Burke",
  description: "Personal portfolio tracker with performance analytics, benchmarking, and risk metrics.",
};

export default function FinAdvisorPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Fin-Advisor"
        subtitle="A portfolio dashboard for positions, transactions, returns (TWR/XIRR), benchmarks, and risk metrics."
      />

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Status</h2>
        <p className="text-gray-700">
          In progress. I’m finishing a quick round of UI + accuracy improvements, then I’ll publish a live build here.
        </p>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Planned features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Positions + transaction tracking (buys, sells, deposits/withdrawals)</li>
          <li>Cash-flow aware returns (TWR and XIRR)</li>
          <li>Benchmark comparison</li>
          <li>Risk metrics (volatility, beta, drawdown)</li>
        </ul>

        {/* When the live app is ready, replace the href below */}
        <div className="pt-2">
          <Link href="#" className="btn pointer-events-none opacity-50" aria-disabled>
            Live app (coming soon)
          </Link>
        </div>
      </section>
    </div>
  );
}
