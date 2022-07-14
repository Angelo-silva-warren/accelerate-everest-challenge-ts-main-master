import { Request, Response } from 'express';

export default interface IListcontroller {
  list: (req: Request, res: Response) => void;
}
