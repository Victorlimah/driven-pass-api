import { Request, Response } from "express";

import { checkUser } from "../utils/userUtils.js";
import * as wifiService from "../services/wifiService.js";

export async function create(req: Request, res: Response){
  await wifiService.create(req.body);
  res.sendStatus(201);
}

export async function getWifisUser(req: Request, res: Response){
  const userId = Number(req.params.userId);
  const userIdToken = Number(res.locals.user.id);

  checkUser(userId, userIdToken);
  const wifis = await wifiService.getWifisUser(userId);
  res.send(wifis);
}
