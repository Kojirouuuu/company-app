import { prisma } from "@/lib/prisma";
import { convertToFullWidth } from "@/lib/utils/text-conversion";
import { cacheLife } from "next/cache";

export async function getCompanies(query?: string) {
  "use cache";
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
  cacheLife("hours");
  return companies;
}

export async function getCompanyById(id: string) {
  "use cache";
  const company = await prisma.company.findUnique({
    where: {
      corporate_number: id,
    },
  });
  cacheLife("hours");
  return company;
}
