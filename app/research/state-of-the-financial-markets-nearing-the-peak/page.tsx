import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The State of the Financial Markets: Nearing the Peak | Writing",
  description:
    "Late-cycle market overview covering inflation, rates, labor, earnings, market breadth, and investor positioning.",
};

export default function MarketsNearingPeakPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="The State of the Financial Markets: Nearing the Peak"
        subtitle="Late-stage expansion dynamics and practical implications for investors."
      />

      <article className="prose prose-gray max-w-none">
        <p>
          The economy remains in an expansion phase heading into 2026, though the pace of growth is
          moderating. Inflation has eased from prior extremes and continues drifting toward the 2%
          target. The Federal Reserve recently held the policy rate near 3.64% and is expected to
          cut twice in 2026 if inflation progress persists. Unemployment has stabilized around 4.5%,
          and GDP growth is projected to remain positive through year end.
        </p>
        <p>
          Equity markets have been supported by AI-driven investment, resilient earnings, and
          continued expansion. However, market performance has narrowed, with leadership concentrated
          in a handful of large-cap names tied to AI and productivity narratives. This narrowing
          breadth is a classic late-cycle signal that warrants closer risk management.
        </p>
        <p>
          Overall, growth continues but has slowed—consistent with a late-stage expansion. With
          rates still relatively high and valuations elevated in leadership segments, investors
          should be selective about new risk deployments. Quality balance sheets, durable free cash
          flow, and diversified exposures may offer better risk-adjusted outcomes if volatility
          rises or leadership rotates.
        </p>

        <h2>Key takeaways</h2>
        <ul>
          <li>Inflation trending toward 2% keeps gradual cuts on the table for 2026.</li>
          <li>Unemployment stable near 4.5%; growth moderating, not collapsing.</li>
          <li>AI investment continues to buoy earnings and capex plans.</li>
          <li>Narrow market breadth elevates concentration risk in mega-cap leaders.</li>
          <li>
            Positioning: favor quality cash flows, prudent diversification, and discipline on
            entry/position sizing.
          </li>
        </ul>

        <div className="not-prose mt-6">
          <div className="rounded-md border bg-gray-50 p-4 text-sm text-gray-700">
            Full article text: If you have a finalized draft, paste it here and I’ll replace this
            summary with your complete write-up.
          </div>
        </div>
      </article>
    </div>
  );
}

