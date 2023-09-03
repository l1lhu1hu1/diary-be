import {Request, Response} from 'express';
export const diary = (req: Request, res: Response) => {
  res.send(`diary called with diary id: ${req.params.diaryId}`);
}
