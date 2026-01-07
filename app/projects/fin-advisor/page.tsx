"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const copyCsv = async () => {
    try {
      await navigator.clipboard.writeText(EXAMPLE_CSV);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // Fallback for older browsers / blocked clipboard permissions
      try {
        const ta = document.createElement("textarea");
        ta.value = EXAMPLE_CSV;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      } catch {
        // If everything fails, do nothing silently (keeps page clean)
      }
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Fin-Advisor"
        subtitle="A portfolio tracker for positions, transactions, performance (TWR/XIRR), benchmark comparison, and risk metrics."
      />

      {/* Preview */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
            <p className="mt-1 text-sm text-gray-600">
              Quick look before opening the full app.
            </p>
          </div>

          <Link
            href={FIN_ADVISOR_APP_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open app
          </Link>
        </div>

        <div className="w-full overflow-hidden rounded-xl border bg-white">
          {/* 16:9 responsive container */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Fin-Advisor Preview"
              src={FIN_ADVISOR_APP_URL}
              className="absolute left-0 top-0 h-full w-full"
              loading="lazy"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </div>

        <p className="text-xs text-gray-500">
          If the preview is blocked by browser security settings, use the “Open app” button above.
        </p>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700">
          Fin-Advisor helps you understand your portfolio beyond “up or down today.” Add positions
          and transactions, then view performance the right way with cash-flow-aware returns
          (TWR/XIRR), benchmark comparison, and risk metrics that explain the ride.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Positions + transaction tracking (buys, sells, deposits/withdrawals)</li>
          <li>Cash-flow-aware returns (TWR and XIRR)</li>
          <li>Benchmark comparison (S&amp;P 500)</li>
          <li>Risk metrics (volatility, beta, drawdown)</li>
        </ul>
      </section>

      {/* Data & Integrations */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data &amp; Integrations</h2>
        <p className="text-gray-700">
          Fin-Advisor supports quick onboarding with CSV import for positions, so users can validate
          totals and analytics immediately. Portfolio metrics are computed directly from positions
          and cash flows, and benchmark data is used for performance context.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>CSV import for positions (tickers, quantities, dates, cost basis)</li>
          <li>Benchmark series for comparison (S&amp;P 500)</li>
          <li>Analytics computed from positions + transactions/cash flows</li>
        </ul>

        {/* Example CSV */}
        <div className="pt-3 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold">Example CSV</h3>

            <button
              type="button"
              onClick={copyCsv}
              className="btn"
              aria-label="Copy example CSV to clipboard"
            >
              {copied ? "Copied!" : "Copy CSV"}
            </button>
          </div>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">How to use it:</span> copy the CSV, open Fin-Advisor, then
            paste/import it from the Positions screen.
          </p>

          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <pre className="max-h-[280px] overflow-auto p-3 text-xs leading-relaxed text-gray-800">
              {EXAMPLE_CSV}
            </pre>
          </div>

          <p className="text-xs text-gray-500">
            Tip: keep <span className="font-semibold">purchaseDate</span> in{" "}
            <span className="font-semibold">YYYY-MM-DD</span> format (as shown).
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Add positions manually or import via CSV</li>
          <li>Log buys/sells and deposits/withdrawals</li>
          <li>View performance (TWR/XIRR) and benchmark comparison</li>
          <li>Review risk metrics like volatility and drawdown</li>
        </ol>
      </section>

      {/* Tech */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Next.js + React + TypeScript</li>
          <li>Vercel for hosting</li>
          <li>Local-first storage + CSV import</li>
        </ul>
      </section>
    </div>
  );
}
