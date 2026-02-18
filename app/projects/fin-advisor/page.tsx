import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import CopyCsvButton from "@/components/CopyCsvButton";
import ScaledEmbed from "@/components/ScaledEmbed";

export const metadata: Metadata = {
  title: "Fin-Advisor | Owen Burke",
  description:
    "Personal portfolio tracker with performance analytics, benchmarking, and risk metrics.",
};

const FIN_ADVISOR_APP_URL = "https://fin-advisor-five.vercel.app";

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
      <PageHeader
        title="Fin-Advisor"
        subtitle="A portfolio tracker for positions, transactions, performance (TWR/XIRR), benchmark comparison, and risk metrics."
      />

      {/* Preview (auto-resize, no inner scroll) */}
      <section className="card p-6 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
          </div>
          <Link href={FIN_ADVISOR_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Open app
          </Link>
        </div>
        <ScaledEmbed
          src={FIN_ADVISOR_APP_URL}
          title="Fin-Advisor Preview"
          targetWidth={1280}
          minHeight={1400}
          allowedOrigins={["https://fin-advisor-five.vercel.app"]}
          minScale={0.6}
          maxScale={1}
        />
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          Fin-Advisor helps you understand your portfolio beyond “up or down today.” Add positions
          and transactions, then view performance the right way with cash-flow-aware returns
          (TWR/XIRR), benchmark comparison, and risk metrics that explain the ride.
        </p>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Positions + transaction tracking (buys, sells, deposits/withdrawals)</li>
          <li>Cash-flow-aware returns (TWR and XIRR)</li>
          <li>Benchmark comparison (S&amp;P 500)</li>
          <li>Risk metrics (volatility, beta, drawdown)</li>
        </ul>
      </section>

      {/* Data & Integrations */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data &amp; Integrations</h2>
        <p className="text-[var(--text)]">
          Fin-Advisor supports quick onboarding with CSV import for positions, so users can validate
          totals and analytics immediately. Portfolio metrics are computed directly from positions
          and cash flows, and benchmark data is used for performance context.
        </p>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>CSV import for positions (tickers, quantities, dates, cost basis)</li>
          <li>Benchmark series for comparison (S&amp;P 500)</li>
          <li>Analytics computed from positions + transactions/cash flows</li>
        </ul>

        {/* Example CSV (HydraIQ-like format) */}
        <div className="pt-3 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold">Example CSV</h3>
            <CopyCsvButton textToCopy={EXAMPLE_CSV} />
          </div>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">How to use it:</span> copy the CSV, open Fin-Advisor,
            then paste/import it from the Positions screen.
          </p>

          <div className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
            <pre className="max-h-[280px] overflow-auto p-3 text-xs leading-relaxed">
              {EXAMPLE_CSV}
            </pre>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            Tip: keep <span className="font-semibold">purchaseDate</span> in{" "}
            <span className="font-semibold">YYYY-MM-DD</span> format (as shown).
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Add positions manually or import via CSV</li>
          <li>Log buys/sells and deposits/withdrawals</li>
          <li>View performance (TWR/XIRR) and benchmark comparison</li>
          <li>Review risk metrics like volatility and drawdown</li>
        </ol>
      </section>

      {/* Tech */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js + React + TypeScript</li>
          <li>Vercel for hosting</li>
          <li>Local-first storage + CSV import</li>
        </ul>
      </section>
    </div>
  );
}
