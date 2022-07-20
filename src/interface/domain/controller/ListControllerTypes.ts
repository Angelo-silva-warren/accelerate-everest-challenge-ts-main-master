import { NextFunction, Request, Response } from 'express';

export default interface IListcontroller {
  handle: (req: Request, res: Response, next: NextFunction) => void;
}
