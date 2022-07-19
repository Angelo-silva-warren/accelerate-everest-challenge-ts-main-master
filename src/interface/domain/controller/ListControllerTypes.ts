import { NextFunction, Request, Response } from 'express';

export default interface IListcontroller {
  list: (req: Request, res: Response, next: NextFunction) => void;
}
