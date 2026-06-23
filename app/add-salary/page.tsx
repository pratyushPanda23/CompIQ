"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSalaryPage() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [location, setLocation] = useState("");
  const [baseSalary, setBaseSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [stock, setStock] = useState("");
  const [totalComp, setTotalComp] = useState("");

  const router = useRouter();

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/add-salary",
        {
          method: "POST",
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

      if (!response.ok) {
        throw new Error(
          "Failed to add salary"
        );
      }

      router.push("/salaries");
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong"
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Add Compensation
        </h1>

        <p className="text-slate-400 mb-8">
          Add a compensation package to
          the CompIQ database.
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
            gap-4
          "
        >

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) =>
              setCompany(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) =>
              setRole(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Level (L3, L4, E4)"
            value={level}
            onChange={(e) =>
              setLevel(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Base Salary"
            value={baseSalary}
            onChange={(e) =>
              setBaseSalary(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Bonus"
            value={bonus}
            onChange={(e) =>
              setBonus(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Stock"
            value={stock}
            onChange={(e) =>
              setStock(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <input
            type="text"
            placeholder="Total Compensation"
            value={totalComp}
            onChange={(e) =>
              setTotalComp(
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 p-3 rounded-xl outline-none"
            required
          />

          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              p-3
              rounded-xl
              font-semibold
            "
          >
            Add Compensation
          </button>

        </form>

      </div>

    </main>
  );
}
