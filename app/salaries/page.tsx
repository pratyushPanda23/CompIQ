"use client";

import { useEffect, useState } from "react";
import SalaryCard from "../components/SalaryCard";

export default function SalariesPage() {
  const [salaries, setSalaries] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState("");

  useEffect(() => {
    async function fetchSalaries() {
      const response =
        await fetch("/api/salaries");

      const data =
        await response.json();

      setSalaries(data);
    }

    fetchSalaries();
  }, []);

  const filteredSalaries = salaries
    .filter((salary) =>
      salary.company
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const salaryA = parseInt(
        a.totalComp.replace(/\D/g, "")
      );

      const salaryB = parseInt(
        b.totalComp.replace(/\D/g, "")
      );

      if (sortOrder === "high") {
        return salaryB - salaryA;
      }

      if (sortOrder === "low") {
        return salaryA - salaryB;
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Compensation Explorer
          </h1>

          <p className="text-slate-400 mt-2">
            Compare compensation across
            companies, levels and locations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Search company..."
            className="
              flex-1
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              p-3
              text-white
              outline-none
            "
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <button
            onClick={() =>
              setSortOrder("high")
            }
            className="
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-3
              rounded-xl
              transition
            "
          >
            High → Low
          </button>

          <button
            onClick={() =>
              setSortOrder("low")
            }
            className="
              bg-slate-800
              hover:bg-slate-700
              px-5
              py-3
              rounded-xl
              transition
            "
          >
            Low → High
          </button>

        </div>

        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">
          {filteredSalaries.map(
            (salary) => (
              <SalaryCard
                key={salary.id}
                id={salary.id}
                company={
                  salary.company
                }
                role={
                  salary.role
                }
                level={
                  salary.level
                }
                location={
                  salary.location
                }
                baseSalary={
                  salary.baseSalary
                }
                bonus={
                  salary.bonus
                }
                stock={
                  salary.stock
                }
                totalComp={
                  salary.totalComp
                }
              />
            )
          )}
        </div>

      </div>

    </main>
  );
}
