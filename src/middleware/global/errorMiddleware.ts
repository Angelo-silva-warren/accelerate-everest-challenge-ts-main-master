import IStatusError from '@interface/domain/helper/IStatusError';
import { NextFunction, Request, Response } from 'express';

export default async (
  err: IStatusError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.code).json(err.message);
};
