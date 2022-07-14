import Joi from "joi";

import { userDataCreate } from "../services/userService";

export const authSchema = Joi.object<userDataCreate>({
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required(),
});
