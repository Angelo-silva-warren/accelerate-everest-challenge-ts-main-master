import { Request, Response, NextFunction } from 'express';

export default interface IController {
  handle: (req: Request, res: Response, next: NextFunction) => void;
}
