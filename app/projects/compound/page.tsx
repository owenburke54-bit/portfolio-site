import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import ResizableEmbed from "@/components/ResizableEmbed";

export const metadata: Metadata = {
  title: "Compound | Owen Burke",
  description:
    "Compound helps you capture ideas and organize them with AI—local-first storage, topic classification, and structured notes.",
};

const COMPOUND_APP_URL = "https://compound-black.vercel.app";

export default function CompoundPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Compound"
        subtitle="A personal knowledge engine that captures ideas and organizes them with AI—local-first storage and offline support."
      />

      {/* Preview (mobile layout like HydraIQ) */}
      <section className="card p-6 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
          </div>
          <Link href={COMPOUND_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Open app
          </Link>
        </div>
        <div className="flex justify-center">
          <div style={{ width: 390 }}>
            <ResizableEmbed
              src={COMPOUND_APP_URL}
              title="Compound Preview"
              allowedOrigins={["https://compound-black.vercel.app"]}
              minHeight={800}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          Compound started with a simple frustration. Ideas and notes were scattered across apps and tabs.
        </p>
        <p className="text-[var(--text)]">
          Most tools add cloud sync, teams, and complexity. Compound focuses on capture and clarity—how you think, not where you store.
        </p>
        <p className="text-[var(--text)]">
          You add ideas, they get classified by topic, and your notes stay in one place. Local-first means it works offline and your data stays on your device. The structure grows with you.
        </p>
        <p className="text-[var(--text)]">
          Knowledge becomes organized instead of scattered.
        </p>
      </section>

      {/* Core Features */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Local-first storage with offline support</li>
          <li>AI-powered topic classification for incoming ideas</li>
          <li>Structured notes across custom categories</li>
          <li>Simple capture flow that does not get in the way</li>
        </ul>
      </section>

      {/* Data & Storage */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Data & Storage</h2>
        <p className="text-[var(--text)]">
          Compound stores everything locally on your device. No cloud sync by default. No account required to start.
        </p>
        <p className="text-[var(--text)]">
          The goal is not to add more integrations. It is to give you a focused place to think without worrying about where your notes live.
        </p>
      </section>

      {/* Design Principles */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Design Principles</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Local-first. Your data stays on your device</li>
          <li>Fast capture. Minimal friction when adding ideas</li>
          <li>Privacy focused. Only the minimum necessary data is stored</li>
        </ul>
      </section>

      {/* Problem -> Insight -> Action */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Problem → Insight → Action</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-2">
          <li>
            <span className="font-medium">Problem:</span> Notes and ideas pile up in random places. Most tools add sync, accounts, and overhead.
          </li>
          <li>
            <span className="font-medium">Insight:</span> Capture matters more than storage. Small daily additions compound into a useful knowledge base when they are structured.
          </li>
          <li>
            <span className="font-medium">Action:</span> Compound gives you one place to capture, classify, and organize ideas—without the cloud.
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Add an idea or note</li>
          <li>AI suggests topics and categories</li>
          <li>Store it locally—works offline</li>
          <li>Browse and build on your knowledge base over time</li>
        </ol>
      </section>

      {/* Tech Stack */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js with React and TypeScript</li>
          <li>Vercel for hosting</li>
          <li>LocalStorage and IndexedDB for local-first persistence</li>
        </ul>
      </section>
    </div>
  );
}
