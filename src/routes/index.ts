import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.post('/users', usersRouter);

export default routes;
