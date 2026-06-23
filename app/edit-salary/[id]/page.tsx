"use client";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function EditSalaryPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const router = useRouter();

  const [id, setId] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [role, setRole] =
    useState("");

  const [level, setLevel] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [
    baseSalary,
    setBaseSalary,
  ] = useState("");

  const [bonus, setBonus] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [
    totalComp,
    setTotalComp,
  ] = useState("");

  useEffect(() => {
    async function loadSalary() {
      const { id } =
        await params;

      setId(id);

      const response =
        await fetch(
          `/api/salary/${id}`
        );

      const data =
        await response.json();

      setCompany(
        data.company || ""
      );

      setRole(
        data.role || ""
      );

      setLevel(
        data.level || ""
      );

      setLocation(
        data.location || ""
      );

      setBaseSalary(
        data.baseSalary || ""
      );

      setBonus(
        data.bonus || ""
      );

      setStock(
        data.stock || ""
      );

      setTotalComp(
        data.totalComp || ""
      );
    }

    loadSalary();
  }, [params]);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await fetch(
      `/api/salary/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          company,
          role,
          level,
          location,
          baseSalary,
          bonus,
          stock,
          totalComp,
        }),
      }
    );

    router.push(
      "/salaries"
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Edit Compensation
        </h1>

        <p className="text-slate-400 mb-8">
          Update an existing compensation package.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-8
            shadow-xl
            flex
            flex-col
            gap-5
          "
        >

          <div>
            <label className="block mb-2 text-slate-400">
              Company
            </label>

            <input
              value={company}
              onChange={(e) =>
                setCompany(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Role
            </label>

            <input
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Level
            </label>

            <input
              value={level}
              onChange={(e) =>
                setLevel(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Location
            </label>

            <input
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Base Salary
            </label>

            <input
              value={baseSalary}
              onChange={(e) =>
                setBaseSalary(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Bonus
            </label>

            <input
              value={bonus}
              onChange={(e) =>
                setBonus(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Stock Compensation
            </label>

            <input
              value={stock}
              onChange={(e) =>
                setStock(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Total Compensation
            </label>

            <input
              value={totalComp}
              onChange={(e) =>
                setTotalComp(
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              p-3
              rounded-xl
              font-semibold
              mt-2
            "
          >
            Update Compensation
          </button>

        </form>

      </div>

    </main>
  );
}
