import { Notes } from "@prisma/client";

import { checkUser } from "../utils/userUtils.js";
import * as passUtils from "../utils/passUtils.js";
import * as notesRepository from "../repositories/notesRepository.js";

export type notesData = Omit<Notes, 'id' | 'createdAt'>;

export async function create(note: Notes) {
  const { title, userId } = note;
  const noteExists = await notesRepository.searchByTitleAndUserId(title, userId);

  if (noteExists)
    throw { type: "NoteAlreadyExists", message: "There is already a note registered with this title." };

  await notesRepository.create(note);
}

export async function getAll(userId: number) {
  return notesRepository.getAll(userId);
}
