import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";
import ResizableEmbed from "@/components/ResizableEmbed";

export const metadata: Metadata = {
  title: "SessionPlanner | Owen Burke",
  description:
    "Soccer training session builder for structured individual and small-group work.",
};

const SESSIONPLANNER_APP_URL = "https://session-planner.vercel.app";

export default function SessionPlannerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="SessionPlanner"
        subtitle="Soccer Training Session Builder"
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
          SessionPlanner is a mobile-first training planning tool designed for players and trainers running individual or small-group soccer sessions.
        </p>
        <p className="text-[var(--text)]">
          Instead of relying on a large drill database, the app intelligently generates a balanced session structure based on inputs such as player count, skill level, focus areas, equipment, and session length.
        </p>
        <p className="text-[var(--text)]">
          The tool creates a recommended session template made up of structured training phases such as activation, ball mastery, passing patterns, dribbling, finishing, fitness, and cooldown. Users can then customize each block by adjusting timing, adding their own drill notes, and reorganizing the session to fit their needs.
        </p>
        <p className="text-[var(--text)]">
          Sessions can be saved and reused, making it easy to build a personal library of effective training plans.
        </p>
      </section>

      {/* Core Features */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <ul className="list-disc list-inside text-[var(--text)] space-y-1">
          <li>Smart session structure generation based on training inputs</li>
          <li>Mobile-first interface designed for planning sessions quickly on the field</li>
          <li>Fully editable training blocks with custom notes</li>
          <li>Intelligent time allocation across phases of the session</li>
          <li>Saved sessions for reuse and iteration</li>
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
