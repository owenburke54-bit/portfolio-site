import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fin-Advisor | Owen Burke",
  description:
    "Personal portfolio tracker with performance analytics, benchmarking, and risk metrics.",
};

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

        {/* Status pill (keeps HydraIQ-like vibe without breaking PageHeader typing) */}
        <div>
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
            In progress
          </span>
        </div>
      </div>

      {/* Status */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Status</h2>
        <p className="text-gray-700">
          In progress. I’m finishing a round of UI polish and accuracy improvements (imports, totals,
          and return calculations), then I’ll publish a live build here.
        </p>
      </section>

      {/* App preview */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
            <p className="text-gray-600">Quick look before opening the full app.</p>
          </div>

          {/* When the live app is ready, replace the href below */}
          <Link href="#" className="btn pointer-events-none opacity-50" aria-disabled>
            Open app
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            Preview will appear here once the live deployment is public. For now, the fastest way to
            test the product is importing the example CSV below and validating totals, returns, and
            risk metrics.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">Portfolio value</div>
              <div className="mt-1 text-2xl font-semibold">$—</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">TWR</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">XIRR</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs text-gray-500">Max drawdown</div>
              <div className="mt-1 text-2xl font-semibold">—%</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Once the app is live, this section can embed screenshots or an interactive preview.
        </p>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700">
          Fin-Advisor is built for a realistic investing workflow: enter positions (or import them),
          log buys/sells and deposits/withdrawals, then see performance the right way — including
          cash-flow-aware returns and risk context against a benchmark.
        </p>

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

      {/* Example CSV */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Example CSV (test data)</h2>
            <p className="text-gray-600">
              Use this to quickly populate positions and validate totals, returns, and charts.
            </p>
          </div>

          {/* Download expects you to add /public/fin-advisor-example.csv */}
          <div className="flex flex-wrap gap-2">
            <Link href="/fin-advisor-example.csv" className="btn" download>
              Download CSV
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">How to use it:</span> download the file, then in Fin-Advisor
            use your <span className="font-semibold">Import CSV</span> flow on the Positions screen.
            This dataset includes money market placeholders, index funds, equities, and crypto so you
            can sanity-check calculations across asset types.
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
