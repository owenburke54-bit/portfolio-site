import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import ResizableEmbed from "@/components/ResizableEmbed";

export const metadata: Metadata = {
  title: "SessionPlanner | Owen Burke",
  description:
    "Mobile-first soccer training session builder for players and trainers. Structured sessions, drill library, and on-field planning.",
};

const SESSIONPLANNER_APP_URL = "https://session-planner.vercel.app";

export default function SessionPlannerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="SessionPlanner"
        subtitle="A mobile-first soccer training planner built for players and trainers. SessionPlanner helps users generate structured individual and small-group sessions based on player count, session goals, field space, and available equipment."
      />

      {/* App preview (same treatment as HydraIQ) */}
      <section className="card p-6 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">App preview</h2>
          </div>
          <Link href={SESSIONPLANNER_APP_URL} className="btn" target="_blank" rel="noopener noreferrer">
            Open app
          </Link>
        </div>
        <div className="flex justify-center">
          <div style={{ width: 390 }}>
            <ResizableEmbed
              src={SESSIONPLANNER_APP_URL}
              title="SessionPlanner Preview"
              allowedOrigins={["https://session-planner.vercel.app"]}
              minHeight={800}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-[var(--text)]">
          SessionPlanner started from a simple idea: planning a good soccer session should be faster, more practical, and more structured.
        </p>
        <p className="text-[var(--text)]">
          Instead of piecing together random drills, the app helps players and trainers build sessions that actually flow. Users choose the type of session they want, the number of players, focus areas, available space, and equipment, and SessionPlanner generates a structured plan with detailed drill cards, coaching guidance, and diagrams.
        </p>
        <p className="text-[var(--text)]">
          The goal is to make session planning feel clear enough for a solo technical workout and strong enough for a trainer organizing a small group.
        </p>
      </section>

      {/* Core Features */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Mobile-first session builder for players and trainers</li>
          <li>Structured drill library with specific patterns, reps, and coaching tips</li>
          <li>Drill diagrams designed for quick visual understanding</li>
          <li>Session generation based on player count, focus areas, field size, and equipment</li>
          <li>Editable flow with drill swapping and session refinement</li>
        </ul>
      </section>

      {/* Design Principles */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Design Principles</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Mobile-first for real sideline and field use</li>
          <li>Structured sessions instead of random drill lists</li>
          <li>Clear drill instructions with practical coaching value</li>
          <li>Visual diagrams that support decision-making quickly</li>
          <li>Clean, focused UI that keeps planning simple</li>
        </ul>
      </section>

      {/* Problem -> Insight -> Action */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Problem → Insight → Action</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-2">
          <li>
            <span className="font-medium">Problem:</span> A lot of soccer session planning tools are either too generic, too messy, or not built for players doing real technical work on their own.
          </li>
          <li>
            <span className="font-medium">Insight:</span> Good training sessions depend on structure, sequencing, and realism. The same drill does not fit every player count or session type.
          </li>
          <li>
            <span className="font-medium">Action:</span> SessionPlanner translates player context into a more usable plan — one that feels practical for solo work, small groups, or trainer-led sessions.
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-[var(--text)] space-y-1">
          <li>Choose the type of session and number of players</li>
          <li>Set age group, skill level, length, field size, and focus areas</li>
          <li>Select the equipment available</li>
          <li>Generate a structured session with drill-by-drill guidance</li>
          <li>Review, swap, and refine until the plan fits</li>
        </ol>
      </section>

      {/* Tech Stack */}
      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Next.js with React and TypeScript</li>
          <li>Tailwind CSS for UI styling</li>
          <li>Vercel for hosting</li>
          <li>Claude-assisted product development</li>
        </ul>
      </section>
    </div>
  );
}
