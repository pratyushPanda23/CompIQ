import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
        >
          CompIQ
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/salaries"
            className="hover:text-blue-400 transition"
          >
            Explorer
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-400 transition"
          >
            Compare
          </Link>

          <Link
            href="/add-salary"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            Add Compensation
          </Link>
        </div>

      </div>
    </nav>
  );
}
