import StatusError from '@util/StatusError';
import { NextFunction, Request, Response } from 'express';
import UserSchema from './UserSchema';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateBody = await UserSchema.validateAsync(req.body);
    req.body = validateBody;
    next();
  } catch (error) {
    next(new StatusError(422, `${error}`));
  }
};
