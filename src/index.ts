import 'reflect-metadata';
import './di/index';
import express from 'express';
import UserRouter from './presentation/Routes';
import { container } from 'tsyringe';
import helmet from 'helmet';

const app = express();
const userRouter = container.resolve(UserRouter);

app.use(express.json());
app.use(helmet());
app.use(userRouter.router);

app.listen(3000, () => {
  console.log('Server is running on port 3000, localhost:3000');
});
