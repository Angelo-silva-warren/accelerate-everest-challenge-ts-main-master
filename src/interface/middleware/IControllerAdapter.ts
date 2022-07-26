import IController from '@interface/domain/controller/IController';
import { NextFunction, Request, Response } from 'express';

export type ControllerAdapterType = (
  controller: IController,
) => (req: Request, res: Response, next: NextFunction) => void;
