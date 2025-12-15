import Link from "next/link";

export const metadata = {
  title: "Owen Burke | Finance, Data Analytics & Performance",
  description:
    "Portfolio of Owen Burke â€” Finance & Data Analytics Student | Division I Student-Athlete.",
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Owen Burke
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Finance &amp; Data Analytics Student | Division I Student-Athlete
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

      <section className="grid gap-5 sm:grid-cols-3">
        <div className="card p-5 transition hover:shadow-md">
          <h3 className="font-semibold">Soccer</h3>
          <p className="mt-2 text-sm text-gray-600">
            NCAA Division 1 Men's Soccer Player at Stonehill College
          </p>
        </div>
        <div className="card p-5 transition hover:shadow-md">
          <h3 className="font-semibold">Finance / Fintech</h3>
          <p className="mt-2 text-sm text-gray-600">
            Iâ€™m drawn to finance because it blends data and decision-making using quantitative
            thinking to turn complex markets into actionable insights.
          </p>
        </div>
        <div className="card p-5 transition hover:shadow-md">
          <h3 className="font-semibold">Health / Wearables</h3>
          <p className="mt-2 text-sm text-gray-600">
            I enjoy exploring how health data and tracking can lead to a healthier life.
          </p>
        </div>
      </section>
    </div>
  );
}
