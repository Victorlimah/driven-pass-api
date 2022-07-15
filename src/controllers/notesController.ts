import { Request, Response } from "express";

import * as notesService from "../services/notesService.js";

export async function create(req: Request, res: Response){
  const data = { ...req.body, userId: res.locals.user.id };
  await notesService.create(data);
  res.sendStatus(201);
}

export async function getAll(req: Request, res: Response){
  const userId = Number(res.locals.user.id);
  const notes = await notesService.getAll(userId);
  res.send(notes);
}