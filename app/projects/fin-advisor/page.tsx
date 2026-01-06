import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fin-Advisor | Owen Burke",
  description:
    "Personal portfolio tracker with performance analytics, benchmarking, and risk metrics.",
};

// Standalone live app (separate Vercel project)
const LIVE_APP_URL = "https://fin-advisor-five.vercel.app";

const EXAMPLE_CSV = `ticker,name,assetClass,accountType,quantity,costBasisPerUnit,purchaseDate,currentPrice
MMKT-ROTH,Money Market,Money Market,Roth IRA,1,7000,2025-08-13,7100.57
MMKT-TAX,Money Market,Money Market,Taxable,1,7329,2025-08-13,7496.37
VOO,Vanguard 500 Index Fund,ETF,Taxable,8,588,2025-08-13,628.30
FXAIX,Fidelity 500 Index Fund,Mutual Fund,Taxable,3,219,2025-07-03,238.23
NVDA,NVIDIA Corp,Equity,Taxable,4,181,2025-08-13,188.45
AMZN,Amazon.com Inc,Equity,Taxable,3,224,2025-08-13,226.50
META,Meta Platforms Inc,Equity,Taxable,2,784,2025-08-13,650.41
BTC-USD,Bitcoin,Crypto,Taxable,0.01,119966,2025-08-14,91315
ETH-USD,Ethereum,Crypto,Taxable,0.09,4622,2025-08-14,3145`;

export default function FinAdvisorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageHeader
          title="Fin-Advisor"
          subtitle="A portfolio dashboard for positions, transactions, returns (TWR/XIRR), benchmarks, and risk metrics."
        />

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
            Live demo available
          </span>

          <span className="text-sm text-gray-500">
            Educational demo only — not financial advice.
          </span>
        </div>
      </div>

      {/* Status */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Status</h2>
        <p className="text-gray-700">
          Live demo is deployed. I’m continuing to improve accuracy (imports, totals, return calculations)
          and UI polish as I expand benchmarking and analytics.
        </p>
      </section>

      {/* App preview */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
            <p className="text-gray-600">Open the live demo to explore the full dashboard.</p>
          </div>

          <Link
            href={LIVE_APP_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open app
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            The fastest way to test Fin-Advisor is importing the example CSV below and validating totals,
            returns (TWR/XIRR), and risk metrics.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">Portfolio value</div>
              <div className="mt-1 text-2xl font-semibold">$—</div>
              <div className="mt-1 text-xs text-gray-500">Auto-populates after import</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">TWR</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
              <div className="mt-1 text-xs text-gray-500">Cash-flow aware</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">XIRR</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
              <div className="mt-1 text-xs text-gray-500">Time-weighted IRR</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">Max drawdown</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
              <div className="mt-1 text-xs text-gray-500">Peak-to-trough</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Tip: if you don’t see data right away, confirm you’re on the “Positions” or “Import” section in the live app.
        </p>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="text-gray-700">
              Fin-Advisor is built for a realistic investing workflow: enter positions (or import them),
              log buys/sells and deposits/withdrawals, then analyze performance the right way — including
              cash-flow-aware returns and risk context against a benchmark.
            </p>
          </div>

          <Link
            href={LIVE_APP_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open live demo
          </Link>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Positions + transaction tracking (buys, sells, deposits/withdrawals)</li>
          <li>Cash-flow aware returns (TWR and XIRR)</li>
          <li>Benchmark comparison</li>
          <li>Risk metrics (volatility, beta, drawdown)</li>
        </ul>
      </section>

      {/* Example CSV */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Example CSV (test data)</h2>
            <p className="text-gray-600">
              Download and import this to instantly populate a sample portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href="/fin-advisor-example.csv" className="btn" download>
              Download CSV
            </Link>
            <Link
              href={LIVE_APP_URL}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open app to import
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">How to use it:</span> download the file, open Fin-Advisor,
            then use the <span className="font-semibold">Import CSV</span> flow. This dataset includes
            money market placeholders, index funds, equities, and crypto so you can sanity-check
            calculations across asset types.
          </p>

          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <pre className="max-h-[280px] overflow-auto p-3 text-xs leading-relaxed text-gray-800">
              {EXAMPLE_CSV}
            </pre>
          </div>

          <p className="text-xs text-gray-500">
            Tip: keep <span className="font-semibold">purchaseDate</span> in{" "}
            <span className="font-semibold">YYYY-MM-DD</span> format (as shown) for clean parsing.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Next.js + React + TypeScript</li>
          <li>Vercel for hosting</li>
          <li>Local-first storage while prototyping (privacy-friendly)</li>
        </ul>
      </section>
    </div>
  );
}
