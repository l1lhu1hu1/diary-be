import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

export const createUser = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const randomIdForName = uuidv4()
  const newUser = await prismaClient.user.create({
    data: {
      name: `Alice${randomIdForName}`,
      email: `alice${randomIdForName}@hello.com`
    }
  })
  console.log('newUser', newUser)
  res.send(`new user id: ${newUser.id}`);
};
