import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const user = async(req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const user = await prismaClient.user.findUnique({
      where: {
        name: 'Alice',
        email: 'alice@hello.com'
      }
  })
  console.log('user', user)
  res.send(`user id: ${user?.id}`);
};
