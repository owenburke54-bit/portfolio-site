import Link from "next/link";

export const metadata = {
  title: "Owen Burke | Finance, Data Analytics & Performance",
  description:
    "Portfolio of Owen Burke - Finance & Data Analytics Student | Division I Student-Athlete.",
};

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Owen Burke
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-600">
          Finance &amp; Data Analytics Student | Division I Student-Athlete
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-5 sm:grid-cols-3">
        <Link
          href="/soccer"
          className="card block p-4 sm:p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Go to Soccer page"
        >
          <h3 className="font-semibold">Soccer</h3>
          <p className="mt-2 text-sm text-gray-600">
            NCAA Division 1 Men's Soccer Player at Stonehill College
          </p>
        </Link>
        <Link
          href="/projects/fin-advisor"
          className="card block p-4 sm:p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Go to Fin-Advisor project"
        >
          <h3 className="font-semibold">Finance / Fintech</h3>
          <p className="mt-2 text-sm text-gray-600">
            I'm drawn to finance and enjoy reading about the financial markets.
          </p>
        </Link>
        <Link
          href="/projects/hydraiq"
          className="card block p-4 sm:p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Go to HydraIQ project"
        >
          <h3 className="font-semibold">Health / Wearables</h3>
          <p className="mt-2 text-sm text-gray-600">
            I enjoy exploring how health data and tracking can lead to a healthier life.
          </p>
        </Link>
      </section>
    </div>
  );
}
