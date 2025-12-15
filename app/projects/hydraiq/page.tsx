import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HydraIQ | Hydration Tracker",
  description:
    "HydraIQ helps you hit daily hydration targets with an intake log, a daily score, simple insights, and WHOOP-powered adjustments.",
};

export default function HydraIQPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="HydraIQ"
        subtitle="A hydration app that turns daily intake into a score and actionable recommendations - with WHOOP data to personalize targets."
      />

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700">
          HydraIQ focuses on one thing: better hydration. Log drinks throughout the day, see your
          progress toward a personalized target, and get clear prompts that make it easy to stay on
          track. Your daily score reflects how consistently you hydrate over the day, not just
          whether you hit a single total.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Daily Hydration Score that rewards steady intake</li>
          <li>Fast intake log with common sizes and quick-add buttons</li>
          <li>Insights feed that suggests what to do next (e.g., "Drink 12 oz now")</li>
          <li>Trends and streaks to reinforce consistency</li>
        </ul>
        <div className="pt-2">
          <Link
            href="https://hydra-iq-mvp.vercel.app"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open HydraIQ
          </Link>
        </div>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Integrations</h2>
        <p className="text-gray-700">
          We integrate the WHOOP API (sleep, strain, recovery) to adjust daily hydration targets.
          On harder training days or short sleep, HydraIQ nudges the target up. On light days, it
          dials it back. This keeps guidance practical instead of one-size-fits-all.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>WHOOP: sleep duration/consistency and strain inform target adjustments</li>
          <li>App logic smooths changes so targets don't swing too much day-to-day</li>
          <li>Privacy-first: only the minimum metrics are fetched and stored</li>
        </ul>
      </section>

      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Set a baseline target (e.g., 119 oz) or use the suggested one</li>
          <li>WHOOP data adjusts that target for today</li>
          <li>Log drinks; the score rewards steady intake across the day</li>
          <li>Insights recommend the next small step to stay on track</li>
        </ol>
      </section>

      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Example Insights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>"Drink 20 oz now, then 12 oz each hour until 9pm."</li>
          <li>"You're front-loaded today. Pace at ~8-10 oz/hour this afternoon."</li>
          <li>"Yesterday's low intake after workouts led to a lower score - plan a bottle for the ride home."</li>
        </ul>
      </section>

      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Next.js + React + TypeScript</li>
          <li>Vercel for hosting</li>
          <li>WHOOP API integration</li>
        </ul>
      </section>
    </div>
  );
}
