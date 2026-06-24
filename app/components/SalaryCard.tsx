"use client";

import Link from "next/link";

type SalaryCardProps = {
  id: number;
  company: string;
  role: string;
  level?: string;
  location: string;

  baseSalary?: string;
  bonus?: string;
  stock?: string;

  totalComp: string;
};

export default function SalaryCard({
  id,
  company,
  role,
  level,
  location,
  baseSalary,
  bonus,
  stock,
  totalComp,
}: SalaryCardProps) {
  async function handleDelete(
    e: React.MouseEvent
  ) {
    e.preventDefault();

    await fetch(
      `/api/delete-salary/${id}`,
      {
        method: "DELETE",
      }
    );

    window.location.reload();
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300">

      <Link
        href={`/salaries/${encodeURIComponent(
          company
        )}`}
      >
        <div className="flex justify-between items-start mb-4">

          <div>
            <h2 className="text-2xl font-bold text-white">
              {company}
            </h2>

            <p className="text-slate-400">
              {role}
            </p>
          </div>

          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {level || "N/A"}
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">

          <div>
            <p className="text-slate-500">
              Location
            </p>

            <p className="text-white">
              {location}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Base Salary
            </p>

            <p className="text-white">
              {baseSalary || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Bonus
            </p>

            <p className="text-white">
              {bonus || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Stock
            </p>

            <p className="text-white">
              {stock || "N/A"}
            </p>
          </div>

        </div>

        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-slate-500 text-sm">
            Total Compensation
          </p>

          <p className="text-3xl font-bold text-green-400">
            {totalComp}
          </p>
        </div>

      </Link>

      <div className="flex gap-3 mt-6">

        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
        >
          Delete
        </button>

        <Link
          href={`/edit-salary/${id}`}
        >
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            Edit
          </button>
        </Link>

      </div>

    </div>
  );
}
