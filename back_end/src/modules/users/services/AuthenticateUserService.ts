import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import { AppError } from '../../shared/errors/AppError';
import { IHashProvider } from '../infra/providers/HashProvider/Models/IHashProvider';
import Auth from '../../../config/auth';
import { IUsersRepository } from '../repository/IUsersRespository';

interface IUserData {
  login: string;
  password: string;
}

@injectable()
export class AuthenticateUsersSerivce {
  constructor(
    @inject('UsersRepository')
    private userRespository: IUsersRepository,

    @inject('hashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({ login, password }: IUserData) {
    const user = await this.userRespository.FindByLogin(login);

    if (!user) {
      throw new AppError('Incorrect gave credentials', 403);
    }

    const matchedPassword = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!matchedPassword) {
      throw new AppError('Incorrect gave credentials', 403);
    }

    const { secret, expiresIn } = Auth.jwt;

    const token = sign({}, secret, {
      subject: user.login,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
