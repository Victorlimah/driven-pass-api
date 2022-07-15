import { Request, Response } from 'express';

import * as service from '../services/credentialsService.js';

export async function create(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  await service.create(req.body, userId);
  res.sendStatus(201);
}
