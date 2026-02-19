import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import ResizableEmbed from "@/components/ResizableEmbed";

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

      {/* Preview (auto-resize, no inner scroll) */}
      <section className="card p-6 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
          </div>
          <Link href={HYDRAIQ_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Open app
          </Link>
        </div>
        <div className="flex justify-center">
          <div style={{ width: 390 }}>
            <ResizableEmbed
              src={HYDRAIQ_APP_URL}
              title="HydraIQ Preview"
              allowedOrigins={["https://hydra-iq-mvp.vercel.app"]}
              minHeight={800}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          HydraIQ started with a simple frustration. Hydration advice is generic, but performance is not.
        </p>
        <p className="text-[var(--text)]">
          Most apps tell you to drink more water. HydraIQ focuses on how and when you hydrate, not just whether you hit a number.
        </p>
        <p className="text-[var(--text)]">
          You log drinks throughout the day, track progress toward a dynamic target, and get practical prompts that help you stay consistent. The daily score rewards steady intake across the day instead of late-night catch up.
        </p>
        <p className="text-[var(--text)]">
          Hydration becomes a structured habit instead of a guess.
        </p>
      </section>

      {/* Core Features */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Daily Hydration Score that rewards consistent intake</li>
          <li>Fast logging with common sizes and quick add buttons</li>
          <li>Simple prompts such as "Drink 12 oz now"</li>
          <li>Trends and streaks that reinforce behavior</li>
        </ul>
      </section>

      {/* Data & Integrations */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Integrations</h2>
        <p className="text-[var(--text)]">
          HydraIQ integrates WHOOP metrics such as sleep, strain, and recovery to adjust daily hydration targets.
        </p>
        <p className="text-[var(--text)]">
          On harder training days or short sleep, the target increases. On lighter days, it scales back. Adjustments are smoothed so targets do not swing dramatically from one day to the next.
        </p>
        <p className="text-[var(--text)]">
          The goal is not to add more data. It is to translate performance signals into simple hydration decisions.
        </p>
      </section>

      {/* Design Principles */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Design Principles</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Daily targets informed by WHOOP metrics</li>
          <li>Gradual changes to avoid overcorrection</li>
          <li>Privacy focused. Only the minimum necessary data is stored</li>
        </ul>
      </section>

      {/* Problem -> Insight -> Action */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Problem → Insight → Action</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-2">
          <li>
            <span className="font-medium">Problem:</span> Wearable data is powerful, but it does not always tell you what to do today.
          </li>
          <li>
            <span className="font-medium">Insight:</span> Hydration, recovery, and training load interact in meaningful ways. Small daily decisions compound over time.
          </li>
          <li>
            <span className="font-medium">Action:</span> HydraIQ simplifies those signals into one target, one score, and one clear next step.
          </li>
        </ul>
      </section>

      {/* WHOOP Alignment */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">WHOOP Alignment</h2>
        <p className="text-[var(--text)]">
          HydraIQ does not replace WHOOP. It complements it.
        </p>
        <p className="text-[var(--text)]">
          WHOOP measures recovery and strain. HydraIQ translates those metrics into clear hydration decisions.
        </p>
      </section>

      {/* How it works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Set a baseline hydration target or use the suggested one</li>
          <li>WHOOP data adjusts today's target</li>
          <li>Log drinks throughout the day</li>
          <li>Follow the recommended next step</li>
        </ol>
      </section>
    </div>
  );
}
