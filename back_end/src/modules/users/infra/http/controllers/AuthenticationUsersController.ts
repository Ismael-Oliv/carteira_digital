import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUsersSerivce } from '../../../services/AuthenticateUserService';

export class AuthenticationUsersController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { login, password } = request.body;
    const authenticateUsersSerivce = container.resolve(
      AuthenticateUsersSerivce
    );
    const { token, user } = await authenticateUsersSerivce.execute({
      login,
      password,
    });

    return response.json({ token, user });
  }
}
