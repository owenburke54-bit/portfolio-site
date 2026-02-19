import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equity Research Workflow | Owen Burke",
  description:
    "Interactive stock screener and comps builder to streamline equity research from idea generation to investment thesis.",
};

export default function EquityResearchPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Equity Research Workflow"
        subtitle="Interactive stock screener and comps builder designed to streamline equity research from idea generation to investment thesis."
      />

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-[var(--text)]">
          <li>Intelligent stock screener with sector, market cap, and valuation filters</li>
          <li>One-click comparable company table with live valuation metrics</li>
          <li>Built-in thesis builder and DCF model workflow checklist</li>
        </ul>
        <p className="text-sm text-[var(--text-muted)]">
          Project page coming soon.
        </p>
      </section>
    </div>
  );
}
