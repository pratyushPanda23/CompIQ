import prisma from "@/lib/prisma";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{
    company: string;
  }>;
}) {
  const { company } = await params;

  const decodedCompany =
    decodeURIComponent(company);

  const salary =
    await prisma.salary.findFirst({
      where: {
        company: decodedCompany,
      },
    });

  if (!salary) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Company Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="mb-8">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-5xl font-bold">
                {salary.company}
              </h1>

              <p className="text-slate-400 mt-2">
                {salary.role}
              </p>
            </div>

            <div className="bg-blue-600 px-4 py-2 rounded-full font-semibold">
              {salary.level || "N/A"}
            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Location
            </p>

            <p className="text-2xl font-bold mt-2">
              {salary.location}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Base Salary
            </p>

            <p className="text-2xl font-bold mt-2">
              {salary.baseSalary ||
                "N/A"}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Bonus
            </p>

            <p className="text-2xl font-bold mt-2">
              {salary.bonus ||
                "N/A"}
            </p>
          </div>

        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Stock Compensation
            </p>

            <p className="text-3xl font-bold mt-2">
              {salary.stock ||
                "N/A"}
            </p>
          </div>

          <div className="bg-green-900 border border-green-700 rounded-2xl p-6">
            <p className="text-green-200">
              Total Compensation
            </p>

            <p className="text-4xl font-bold text-green-300 mt-2">
              {salary.totalComp}
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
