import prisma from "@/lib/prisma";

export async function GET() {
  const salaries =
    await prisma.salary.findMany();

  return Response.json(salaries);
}
