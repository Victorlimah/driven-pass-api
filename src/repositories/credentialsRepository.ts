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

export async function getCredentialsUser(userId: number) {
  return prisma.wifi.findMany({
    where: {
      userId,
    },
  });
}

export async function getCredential(wifiId: number) {
  return prisma.wifi.findFirst({
    where: {
      id: wifiId,
    },
  });
}

export async function deleteCredential(wifiId: number, userId: number) {
  return prisma.wifi.delete({
    where: {
      id: wifiId,
    },
  });
}