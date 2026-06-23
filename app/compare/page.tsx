"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [salaries, setSalaries] =
    useState<any[]>([]);

  const [
    selectedCompanies,
    setSelectedCompanies,
  ] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response =
        await fetch("/api/salaries");

      const data =
        await response.json();

      setSalaries(data);
    }

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Compare Compensation
        </h1>

        <p className="text-slate-400 mb-8">
          Compare compensation structures
          across companies, levels and
          locations.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

          <h2 className="text-xl font-semibold mb-4">
            Select Companies
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">

            {salaries.map(
              (salary) => (
                <label
                  key={salary.id}
                  className="
                  flex
                  items-center
                  gap-2
                  bg-slate-800
                  p-3
                  rounded-lg
                  hover:bg-slate-700
                  cursor-pointer
                "
                >
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(
                      salary.company
                    )}
                    onChange={() => {
                      if (
                        selectedCompanies.includes(
                          salary.company
                        )
                      ) {
                        setSelectedCompanies(
                          selectedCompanies.filter(
                            (
                              company
                            ) =>
                              company !==
                              salary.company
                          )
                        );
                      } else {
                        setSelectedCompanies(
                          [
                            ...selectedCompanies,
                            salary.company,
                          ]
                        );
                      }
                    }}
                  />

                  {salary.company}
                </label>
              )
            )}

          </div>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-4 text-left">
                  Company
                </th>

                <th className="p-4 text-left">
                  Role
                </th>

                <th className="p-4 text-left">
                  Level
                </th>

                <th className="p-4 text-left">
                  Location
                </th>

                <th className="p-4 text-left">
                  Base
                </th>

                <th className="p-4 text-left">
                  Bonus
                </th>

                <th className="p-4 text-left">
                  Stock
                </th>

                <th className="p-4 text-left">
                  Total Comp
                </th>

              </tr>

            </thead>

            <tbody>

              {salaries
                .filter((salary) =>
                  selectedCompanies.includes(
                    salary.company
                  )
                )
                .map((salary) => (
                  <tr
                    key={salary.id}
                    className="
                    border-t
                    border-slate-800
                    hover:bg-slate-900
                  "
                  >

                    <td className="p-4 font-semibold">
                      {salary.company}
                    </td>

                    <td className="p-4">
                      {salary.role}
                    </td>

                    <td className="p-4">
                      {salary.level ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      {salary.location}
                    </td>

                    <td className="p-4">
                      {salary.baseSalary ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      {salary.bonus ||
                        "N/A"}
                    </td>

                    <td className="p-4">
                      {salary.stock ||
                        "N/A"}
                    </td>

                    <td className="p-4 text-green-400 font-bold text-lg">
                      {
                        salary.totalComp
                      }
                    </td>

                  </tr>
                ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
