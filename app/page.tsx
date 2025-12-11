import Link from "next/link";

export const metadata = {
  title: "Owen Burke | Finance, Data Analytics & Performance",
  description:
    "Portfolio of Owen Burke — Finance & Data Analytics | Division I Student-Athlete | Builder.",
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Owen Burke</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Finance & Data Analytics | Division I Student-Athlete | Builder.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <Link href="/passions-values" className="btn-secondary">
            Passions &amp; Values
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl text-gray-700">
        <p>
          I’m a student-athlete who enjoys applying finance-style thinking to performance and
          technology. I like building simple tools that make decisions clearer and habits easier.
          This site is a snapshot of what I care about and what I’m building.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="card p-4">
          <h3 className="font-semibold">Soccer</h3>
          <p className="mt-2 text-sm text-gray-600">
            Competing at a high level taught me the value of preparation, resilience, and teamwork.
          </p>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Finance / Fintech</h3>
          <p className="mt-2 text-sm text-gray-600">
            I’m drawn to quantitative thinking, clear KPIs, and systems that turn noise into signal.
          </p>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Health / Wearables</h3>
          <p className="mt-2 text-sm text-gray-600">
            I explore how tracking, feedback loops, and simple visuals can change behavior.
          </p>
        </div>
      </section>
    </div>
  );
}


