import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intrinsic | Owen Burke",
  description:
    "A lightweight equity research workspace for building valuation-backed investment theses.",
};

const INTRINSIC_APP_URL = "https://intrinsic-equities.vercel.app";

export default function IntrinsicPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Intrinsic"
        subtitle="A lightweight equity research workspace for building valuation-backed investment theses."
      />

      {/* Open app */}
      <section className="card p-6">
        <Link href={INTRINSIC_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
          Open app
        </Link>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          Intrinsic started with something I kept running into. My research process was structured in my head, but scattered across tabs.
        </p>
        <p className="text-[var(--text)]">
          Screeners in one place. Comps in another. Notes in a doc. Models in Excel.
        </p>
        <p className="text-[var(--text)]">
          The thinking was organized. The workflow was not.
        </p>
        <p className="text-[var(--text)]">
          Most platforms focus on giving you more data. Intrinsic focuses on helping you think clearly. It guides you from idea to comps to thesis in a deliberate sequence.
        </p>
        <p className="text-[var(--text)]">
          You start with a stock, define a peer set, size valuation dispersion, write out your bull and bear case, and track model progress. Everything lives in one workspace.
        </p>
        <p className="text-[var(--text)]">
          Research becomes intentional instead of reactive.
        </p>
      </section>

      {/* Core Features */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Clean screener with universe filtering</li>
          <li>Comparable companies table with automatic median benchmarks</li>
          <li>Anchor based valuation comparison</li>
          <li>Thesis builder with bull, bear, catalysts, and risks</li>
          <li>Model build checklist to track analytical progress</li>
          <li>Saved research sets for reusable comps and notes</li>
        </ul>
      </section>

      {/* Data & Methodology */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Methodology</h2>
        <p className="text-[var(--text)]">
          Intrinsic pulls live pricing and fundamental data through Yahoo Finance.
        </p>
        <p className="text-[var(--text)]">
          Comps are built around an anchor company. Median valuation metrics are calculated across peers, excluding missing data, so the benchmarks stay clean.
        </p>
        <p className="text-[var(--text)]">
          Premium versus median dispersion is calculated directly:
        </p>
        <p className="text-[var(--text)] font-mono text-sm">
          (Anchor Multiple ÷ Peer Median) − 1
        </p>
        <p className="text-[var(--text)]">
          The goal is not to add more numbers. It is to make valuation context obvious and fast to interpret.
        </p>
      </section>

      {/* Design Principles */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Design Principles</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Structure over noise</li>
          <li>Anchored comparisons instead of raw lists</li>
          <li>Median benchmarks instead of averages</li>
          <li>Explicit bull and bear framing</li>
          <li>Progress tracking to reinforce disciplined thinking</li>
          <li>Minimal interface with clear hierarchy</li>
        </ul>
        <p className="text-[var(--text)] pt-2">
          Intrinsic is intentionally simple. It removes friction from the analysis process instead of adding visual complexity.
        </p>
      </section>

      {/* Problem -> Insight -> Action */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Problem → Insight → Action</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-2">
          <li>
            <span className="font-medium">Problem:</span> Equity research requires structure, but most workflows are fragmented.
          </li>
          <li>
            <span className="font-medium">Insight:</span> Conviction builds through sequence. Screen. Compare. Model. Document. Revisit.
          </li>
          <li>
            <span className="font-medium">Action:</span> Intrinsic compresses that sequence into one focused workspace with persistent research sets.
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Screen a universe and select an anchor stock</li>
          <li>Build a peer set and inspect valuation dispersion</li>
          <li>Document your thesis with bull and bear framing</li>
          <li>Track model build steps and target price</li>
          <li>Save the full research set for review and iteration</li>
        </ol>
        <p className="text-[var(--text)] pt-2">
          Each step supports the next.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js with React and TypeScript</li>
          <li>LocalStorage persistence for research sets</li>
          <li>Live pricing data via Yahoo Finance</li>
          <li>Deployed on Vercel</li>
        </ul>
      </section>
    </div>
  );
}
