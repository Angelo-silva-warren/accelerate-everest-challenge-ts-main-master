import { Request, Response } from 'express';

export default interface IUsercontroller {
  handle: (req: Request, res: Response) => void;
}
