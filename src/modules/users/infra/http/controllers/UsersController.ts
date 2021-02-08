import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);

    const listUsers = await usersRepository.find();

    return response.json(listUsers);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
