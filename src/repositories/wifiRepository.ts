import { prisma } from "../data/db.js";
import { wifiData } from "../services/wifiService.js";

export async function create(wifi: wifiData) {
  return prisma.wifi.create({
    data: wifi
  });
}

export async function searchByTitleAndUserId(title: string, userId: number) {
  return prisma.wifi.findFirst({
    where: {
      title,
      userId
    }
  });
}

export async function getWifisUser(userId: number) {
  return prisma.wifi.findMany({
    where: {
      userId
    }
  });
}

export async function getWifi(wifiId: number) {
  return prisma.wifi.findFirst({
    where: {
      id: wifiId
    }
  });
}

export async function deleteWifi(wifiId: number, userId: number) {
  return prisma.wifi.delete({
    where: {
      id: wifiId,
    }
  });
}