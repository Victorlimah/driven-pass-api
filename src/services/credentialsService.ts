import { Credentials } from "@prisma/client";

import * as passUtil from "../utils/passUtils.js";
import * as repository from "../repositories/credentialsRepository.js";

export type credendialData = Omit<Credentials, "id" | "createdAt" >

export async function create(credentials: credendialData, userId: number) {
  const credential = await repository.searchByTitleAndUserId(credentials.title, userId);
  if (credential)
    throw { type: "CredentialAlreadyExists", message: "There is already a credential registered with this title."};
  
  const hashedPassword = passUtil.encryptSecurityPass(credentials.password); 
  return repository.create({ ...credentials, userId, password: hashedPassword });
}
