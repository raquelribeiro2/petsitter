import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  return response.json({ message: 'Olá!' });
});

export default usersRouter;
