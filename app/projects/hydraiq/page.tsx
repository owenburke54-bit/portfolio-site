import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HydraIQ | Owen Burke",
  description:
    "HydraIQ helps you hit daily hydration targets with an intake log, a daily score, simple insights, and WHOOP-powered adjustments.",
};

const HYDRAIQ_APP_URL = "https://hydra-iq-mvp.vercel.app";

export default function HydraIQPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="HydraIQ"
        subtitle="A hydration app that turns daily intake into a score and actionable recommendations - with WHOOP data to personalize targets."
      />

      {/* Preview (static, no inner scroll) */}
      <section className="card p-6 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Static preview. Open the live app for interaction.</p>
          </div>
          <Link href={HYDRAIQ_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Open app
          </Link>
        </div>
        <div className="flex justify-center">
          <div
            className="overflow-hidden rounded-2xl border bg-white shadow"
            style={{ width: 390, height: 760, borderColor: "var(--border)" }}
          >
            <iframe
              title="HydraIQ Preview"
              src={HYDRAIQ_APP_URL}
              width={390}
              height={760}
              loading="lazy"
              scrolling="no"
              style={{ pointerEvents: "none", border: "0" }}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          HydraIQ focuses on one thing: better hydration. Log drinks throughout the day, see your
          progress toward a personalized target, and get clear prompts that make it easy to stay on
          track. Your daily score reflects how consistently you hydrate over the day, not just
          whether you hit a single total.
        </p>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Daily Hydration Score that rewards steady intake</li>
          <li>Fast intake log with common sizes and quick-add buttons</li>
          <li>Insights feed that suggests what to do next (e.g., "Drink 12 oz now")</li>
          <li>Trends and streaks to reinforce consistency</li>
        </ul>
      </section>

      {/* Data & Integrations */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Integrations</h2>
        <p className="text-[var(--text)]">
          HydraIQ integrates WHOOP metrics (sleep, strain, recovery) to adjust daily hydration
          targets. On harder training days or short sleep, HydraIQ nudges the target up. On light
          days, it dials it back - keeping guidance practical instead of one-size-fits-all.
        </p>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>WHOOP: sleep duration/consistency and strain inform target adjustments</li>
          <li>Target changes are smoothed so they don't swing too much day-to-day</li>
          <li>Privacy-first: only the minimum metrics are fetched and stored</li>
        </ul>
      </section>

      {/* Problem -> Insight -> Action */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Problem -&gt; Insight -&gt; Action</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-2">
          <li>
            <span className="font-medium">Problem:</span> Wearable data is rich but overwhelming and hard to
            translate into daily decisions.
          </li>
          <li>
            <span className="font-medium">Insight:</span> Hydration, recovery, and training load interact in
            non-linear ways; small changes compound.
          </li>
          <li>
            <span className="font-medium">Action:</span> HydraIQ simplifies these signals into a daily target,
            score, and next-step recommendations.
          </li>
        </ul>
      </section>

      {/* WHOOP alignment */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">WHOOP alignment</h2>
        <p className="text-[var(--text)]">
          Designed with WHOOP-style recovery, strain, and behavioral data in mind. HydraIQ does not try to
          replace WHOOP; it complements the model by translating those metrics into clear hydration decisions
          and lightweight trends.
        </p>
      </section>

      {/* How it works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Set a baseline target (or use the suggested one)</li>
          <li>WHOOP data adjusts that target for today</li>
          <li>Log drinks; the score rewards steady intake across the day</li>
          <li>Insights recommend the next small step to stay on track</li>
        </ol>
      </section>

      {/* Tech */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js + React + TypeScript</li>
          <li>Vercel for hosting</li>
          <li>WHOOP API integration</li>
        </ul>
      </section>

      {/* What I'd build next */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">What I'd build next</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Correlation analysis between hydration, recovery, and strain</li>
          <li>Athlete-specific vs general population views</li>
          <li>Longitudinal trend detection vs daily noise</li>
        </ul>
      </section>
    </div>
  );
}
