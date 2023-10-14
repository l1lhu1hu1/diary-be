import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const deleteAllDiary = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const result = await prismaClient.diary.deleteMany()
  console.log('result', result)
  res.send('deleted all diary');
};
