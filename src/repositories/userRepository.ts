import { prisma } from "../data/db.js";

import { userDataCreate } from "../services/userService.js";

export async function search(param: string, value: string | number) {
  return prisma.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: userDataCreate) {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
}