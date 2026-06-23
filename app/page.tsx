import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-bold">
          CompIQ
        </h1>

        <p className="text-xl text-slate-400 mt-4">
          Compensation Intelligence Platform
        </p>

        <p className="text-slate-500 mt-6 max-w-2xl">
          Compare compensation across companies,
          levels, locations and compensation
          structures. Analyze base salary,
          bonuses, stock compensation and total
          compensation with a structured approach.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/salaries">
            <button className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700">
              Explore Compensation
            </button>
          </Link>

          <Link href="/compare">
            <button className="border border-slate-600 px-5 py-3 rounded-lg hover:bg-slate-800">
              Compare Compensation
            </button>
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="border border-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">
              Compare by Level
            </h2>

            <p className="text-slate-400 mt-2">
              Analyze compensation across
              different levels such as L3,
              L4, E4 and more.
            </p>
          </div>

          <div className="border border-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">
              Compensation Structure
            </h2>

            <p className="text-slate-400 mt-2">
              Understand base salary,
              bonus, stock grants and
              total compensation.
            </p>
          </div>

          <div className="border border-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">
              Location Insights
            </h2>

            <p className="text-slate-400 mt-2">
              Compare compensation across
              cities and locations.
            </p>
          </div>

          <div className="border border-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">
              Company Comparison
            </h2>

            <p className="text-slate-400 mt-2">
              Evaluate compensation
              packages across multiple
              companies.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
