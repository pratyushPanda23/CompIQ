import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;

  const salary =
    await prisma.salary.findUnique({
      where: {
        id: Number(id),
      },
    });

  return Response.json(salary);
}

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;

  const body =
    await request.json();

  const salary =
    await prisma.salary.update({
      where: {
        id: Number(id),
      },

      data: {
  company: body.company,
  role: body.role,
  level: body.level,
  location: body.location,

  baseSalary:
    body.baseSalary,

  bonus:
    body.bonus,

  stock:
    body.stock,

  totalComp:
    body.totalComp,
},
    });

  return Response.json(salary);
}
