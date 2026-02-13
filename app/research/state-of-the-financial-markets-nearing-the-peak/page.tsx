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

      <div className="text-sm text-gray-500">
        <p>Updated: 2/9/2026</p>
        <p>Author: Owen Burke</p>
      </div>

      <article className="prose prose-gray max-w-none">
        <div className="space-y-6">
          <p style={{ textIndent: "2em" }}>
            In terms of the overall market and business cycle, we are currently in the latter stages of 
            an expansion cycle. The economy has been resilient and has entered 2026 with considerable 
            momentum. The labor market is cooling, but in a gradual and healthy manner. The risk of 
            extreme inflation has diminished. Inflation has been slightly decreasing and is projected to 
            continue moving towards 2%. The FED recently made the decision to maintain a Federal Funds 
            Rate of 3.64%. U.S. GDP is projected to expand in 2026, and inflation is expected to fall to 2.1% 
            by the end of 2026. The FED is predicted to make two rate cuts in 2026 and unemployment has stabilized at a healthy 4.5%. The stock market has been supported by AI investment, strong earnings from big players, and continued expansion. The markets are strong, but performance has been narrow and heavily driven by leaders in AI advancement. 
          </p>
          <p style={{ textIndent: "2em" }}>
            Overall, the economy is still growing but growth has slowed. This is a signal of a late
            stage expansion cycle. Due to this, I would recommend investors cautiously deploy more capital.  Investors should be cautious because interest rates are still relatively high, growth is slowing, valuations may be too high, and there is still a risk of recession. With this information, investors should favor quality companies with strong cash flows, maintain diversification in their portfolios, keep cash on hand, and avoid speculative growth stocks.
          </p>
        </div>
      </article>
    </div>
  );
}

