import { Router } from "express";

import * as middleware from "../middlewares/validateJWT.js";
import * as controller from "../controllers/credentialsController.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialsSchemas.js";

const credentialsRouter = Router();

credentialsRouter.post('/credentials',
  validateSchema(credentialSchema),
  middleware.validateJWT,
  controller.create 
);

export default credentialsRouter;
