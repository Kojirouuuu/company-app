import { prisma } from "@/lib/prisma";
import { convertToFullWidth } from "@/lib/utils/text-conversion";

export async function getCompanies(query?: string) {
  const convertedQuery = convertToFullWidth(query || "");
  const companies = await prisma.company.findMany({
    take: 100,
    orderBy: {
      assignment_date: "desc",
    },
    where: {
      OR: [{ name: { contains: convertedQuery, mode: "insensitive" } }],
    },
  });
  return companies;
}

export async function getCompanyById(id: string) {
  const company = await prisma.company.findUnique({
    where: {
      corporate_number: id,
    },
  });
  return company;
}
