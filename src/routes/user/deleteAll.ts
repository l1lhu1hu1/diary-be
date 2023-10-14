import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const deleteAllUser = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const result = await prismaClient.user.deleteMany()
  console.log('result', result)
  res.send('deleted all user');
};
