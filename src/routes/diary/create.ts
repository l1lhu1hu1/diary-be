import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

export const createDiary = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const randomIdForName = uuidv4()
  const userId = Number(req.params.userId)
  const newDiary= await prismaClient.diary.create({
    data: {
      userId: userId,
      title: `Title${randomIdForName}`,
      content: `Content${randomIdForName}`
    }
  })
  console.log('newDiary', newDiary)
  res.send(`new diary id: ${newDiary.id}`);
};
