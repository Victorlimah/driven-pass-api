import { prisma } from "../data/db.js";

import { credendialData } from "../services/credentialsService.js";

export async function searchByTitleAndUserId(title: string, userId: number) {
  return prisma.credentials.findFirst({
    where: {
      title,
      userId
    }
  });
}

export async function create(credentials: credendialData) {
  return prisma.credentials.create({
    data: credentials,
  });
}
