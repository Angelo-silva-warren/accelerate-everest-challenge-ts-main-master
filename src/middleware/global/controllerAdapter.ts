import IController from '@interface/domain/controller/IController';
import { NextFunction, Request, Response } from 'express';

export default function controllerAdapter(controller: IController) {
  return (req: Request, res: Response, next: NextFunction) =>
    controller.handle(req, res, next);
}
