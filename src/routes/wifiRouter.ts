import { Router } from "express";

import * as middleware from "../middlewares/validateJWT.js";
import * as controller from "../controllers/wifiController.js";

import { wifiSchema } from './../schemas/wifiSchemas.js';
import { validateSchema } from "../middlewares/validateSchema.js";

const wifiRouter = Router();

wifiRouter.post('/wifi',
  validateSchema(wifiSchema),
  controller.create
);

wifiRouter.get('/wifi/:userId',
  middleware.validateJWT,
  controller.getWifisUser
);

wifiRouter.delete('/wifi');

export default wifiRouter;
