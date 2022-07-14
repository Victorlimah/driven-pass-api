import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema.js";
import { authSchema } from "../schemas/authSchemas.js"

const authRouter = Router();

authRouter.post('signup',
  validateSchema(authSchema),
);

authRouter.post('signin',
  validateSchema(authSchema),
);

export default authRouter;
