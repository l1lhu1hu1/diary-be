import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const deleteUserDiary = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const result = await prismaClient.diary.deleteMany()
  console.log('result', result)
  res.send('deleted user diary');
};
