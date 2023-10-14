import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const user = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const userId = Number(req.params.userId)
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId
    },
    include: {
      diaries: true
    }
  })
  console.log('user', user)
  res.send(`user id: ${user?.id}`);
};
