import { Request, Response } from "express";

import * as wifiService from "../services/wifiService.js";

export async function create(req: Request, res: Response){
  await wifiService.create(req.body);
  res.sendStatus(201);
}
