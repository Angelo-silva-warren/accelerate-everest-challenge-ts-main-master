import 'reflect-metadata';
import './di/index';
import express from 'express';
import { container } from 'tsyringe';
import helmet from 'helmet';
import errorMiddleware from '@middleware/global/errorMiddleware';
import UserRouter from '@presentation/Routes';

const app = express();
const userRouter = container.resolve(UserRouter);

app.use(express.json());
app.use(helmet());
app.use(userRouter.router);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000, localhost:3000');
});
