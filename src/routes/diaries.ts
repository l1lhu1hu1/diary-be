import {Request, Response} from 'express';
export const diaries = (req: Request, res: Response) => {
  res.send('diaries called');
}
