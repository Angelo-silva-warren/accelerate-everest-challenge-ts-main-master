import { NextFunction, Request, Response } from 'express';
import IController from '../domain/controller/IController';

export type ControllerAdapterType = (
  controller: IController,
) => (req: Request, res: Response, next: NextFunction) => void;
