import { User } from '@prisma/client';

import * as passUtils from '../utils/passUtils.js';
import * as userRepository from '../repositories/userRepository.js';

export type userDataCreate = Omit<User, 'id' | 'createdAt'>;

export async function create(user: userDataCreate){
  const userExists = await userRepository.search('email', user.email);
  if(userExists) throw { type: "conflict", message: "User already exists" };

  const hashedPass = passUtils.encryptPassword(user.password);
  const newUser = await userRepository.create({ ...user, password: hashedPass });

  return newUser;
}