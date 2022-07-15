import { Router } from 'express';

import * as controller from '../controllers/notesController.js';

import * as middleware from '../middlewares/validateJWT.js';
import { notesSchema } from '../schemas/notesSchemas.js';
import { validateSchema } from '../middlewares/validateSchema.js';

const notesRouter = Router();

notesRouter.post('/notes',
  validateSchema(notesSchema),
  middleware.validateJWT,
  controller.create
);

export default notesRouter;
