import { prisma } from "../data/db.js";
import { notesData } from "../services/notesService.js";

export async function searchByTitleAndUserId(title: string, userId: number) {
  const note = await prisma.notes.findFirst({
    where: {
      title,
      userId,
    },
  });

  return note;
}

export async function create(note: notesData){
  return await prisma.notes.create({
    data: {
      ...note,
    },
  });
}