import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const diary = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const newUser = await prismaClient.user.findUnique({
      where: {
        name: 'Alice',
        email: 'alice@hello.com'
      }
  })
  console.log('newUser', newUser)
  res.send(`diary called with diary id: ${req.params.diaryId}`);
};
