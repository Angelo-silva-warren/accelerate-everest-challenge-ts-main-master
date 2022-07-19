import { Request, Response, NextFunction } from 'express';

export default interface IUsercontroller {
  handle: (req: Request, res: Response, next: NextFunction) => void;
}
