import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const diaries = async(req: Request, res: Response) => {
  const userId = req.params.userId
  const prismaClient = new PrismaClient();
  const user = await prismaClient.user.findUnique({
    where: {id: Number(userId)},
    include: {diaries: true}
  })

  console.log('user', user)
  res.send('diaries called');
};
