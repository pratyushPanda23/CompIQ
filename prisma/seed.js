require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.salary.deleteMany();

  await prisma.salary.createMany({
    data: [
      {
        company: "Google",
        role: "Software Engineer",
        level: "L3",
        location: "Bangalore",
        baseSalary: "18 LPA",
        bonus: "2 LPA",
        stock: "12 LPA",
        totalComp: "32 LPA",
      },
      {
        company: "Microsoft",
        role: "Software Engineer",
        level: "L59",
        location: "Hyderabad",
        baseSalary: "17 LPA",
        bonus: "3 LPA",
        stock: "10 LPA",
        totalComp: "30 LPA",
      },
      {
        company: "Amazon",
        role: "SDE-1",
        level: "L4",
        location: "Bangalore",
        baseSalary: "18 LPA",
        bonus: "2 LPA",
        stock: "8 LPA",
        totalComp: "28 LPA",
      },
      {
        company: "Adobe",
        role: "Software Engineer",
        level: "MTS-1",
        location: "Noida",
        baseSalary: "17 LPA",
        bonus: "2 LPA",
        stock: "8 LPA",
        totalComp: "27 LPA",
      },
      {
        company: "Atlassian",
        role: "Software Engineer",
        level: "P4",
        location: "Bangalore",
        baseSalary: "22 LPA",
        bonus: "4 LPA",
        stock: "16 LPA",
        totalComp: "42 LPA",
      },
      {
        company: "Uber",
        role: "Software Engineer",
        level: "L4",
        location: "Bangalore",
        baseSalary: "25 LPA",
        bonus: "5 LPA",
        stock: "25 LPA",
        totalComp: "55 LPA",
      },
      {
        company: "Flipkart",
        role: "SDE-1",
        level: "S1",
        location: "Bangalore",
        baseSalary: "20 LPA",
        bonus: "3 LPA",
        stock: "10 LPA",
        totalComp: "33 LPA",
      },
      {
        company: "Goldman Sachs",
        role: "Analyst",
        level: "Associate",
        location: "Hyderabad",
        baseSalary: "16 LPA",
        bonus: "4 LPA",
        stock: "2 LPA",
        totalComp: "22 LPA",
      },
      {
        company: "JPMorgan",
        role: "Software Engineer",
        level: "502",
        location: "Mumbai",
        baseSalary: "18 LPA",
        bonus: "3 LPA",
        stock: "3 LPA",
        totalComp: "24 LPA",
      },
      {
        company: "Walmart",
        role: "SDE-2",
        level: "L3",
        location: "Bangalore",
        baseSalary: "24 LPA",
        bonus: "4 LPA",
        stock: "12 LPA",
        totalComp: "40 LPA",
      },
      {
        company: "NVIDIA",
        role: "Software Engineer",
        level: "IC2",
        location: "Bangalore",
        baseSalary: "24 LPA",
        bonus: "5 LPA",
        stock: "20 LPA",
        totalComp: "49 LPA",
      },
      {
        company: "Salesforce",
        role: "Software Engineer",
        level: "MTS",
        location: "Hyderabad",
        baseSalary: "20 LPA",
        bonus: "3 LPA",
        stock: "12 LPA",
        totalComp: "35 LPA",
      },
    ],
  });

  console.log("Seeded successfully 🚀");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
