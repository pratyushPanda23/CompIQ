import prisma from "@/lib/prisma";

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  const salary =
    await prisma.salary.create({
      data: {
        company: body.company,
        role: body.role,
        level: body.level,
        location: body.location,

        baseSalary:
          body.baseSalary,

        bonus: body.bonus,

        stock: body.stock,

        totalComp:
          body.totalComp,
      },
    });

  return Response.json(
    salary
  );
}
