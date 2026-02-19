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
          targetHeight={1400}
          containerMaxHeight={900}
          allowedOrigins={["https://fin-advisor-five.vercel.app"]}
          minScale={0.55}
          maxScale={1}
        />
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          Fin-Advisor is a portfolio analysis tool built around one idea.
        </p>
        <p className="text-[var(--text)]">
          Performance should reflect your actual decisions, not just whether the market went up or down.
        </p>
        <p className="text-[var(--text)]">
          Instead of showing only daily gains or losses, Fin-Advisor tracks positions, transactions, deposits, and withdrawals so you can understand what is actually driving results.
        </p>
        <p className="text-[var(--text)]">
          It helps separate market movement from capital allocation decisions.
        </p>
      </section>

      {/* Core Capabilities */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Capabilities</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Track positions and transactions such as buys, sells, deposits, and withdrawals</li>
          <li>Performance calculations that account for cash flows</li>
          <li>Benchmark comparison using the S&P 500</li>
          <li>Risk metrics including volatility and drawdown</li>
        </ul>
      </section>

      {/* Data & Structure */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Structure</h2>
        <p className="text-[var(--text)]">
          Fin-Advisor supports CSV import so users can onboard quickly and verify totals right away.
        </p>
        <p className="text-[var(--text)]">
          All portfolio metrics are calculated directly from positions and transaction history. Benchmark data is layered in to provide context.
        </p>
        <p className="text-[var(--text)]">
          The focus is clarity. You should understand what happened and why.
        </p>

        {/* Example CSV */}
        <div className="pt-3 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold">Example CSV</h3>
            <CopyCsvButton textToCopy={EXAMPLE_CSV} />
          </div>

          <p className="text-sm text-[var(--text)]">
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
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Add positions manually or import them via CSV</li>
          <li>Log transactions and capital movements</li>
          <li>Review performance alongside a benchmark</li>
          <li>Analyze risk metrics such as volatility and drawdown</li>
        </ol>
      </section>

      {/* Tech */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js with React and TypeScript</li>
          <li>Vercel for hosting</li>
          <li>Local-first storage with CSV import</li>
        </ul>
      </section>
    </div>
  );
}
