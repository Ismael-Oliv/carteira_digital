import { IHashProvider } from '../infra/providers/HashProvider/Models/IHashProvider';
import { Users } from '../infra/typeorm/entities/Users';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../shared/errors/AppError';
import { IUsersRepository } from '../repository/IUsersRespository';

interface ICreateUser {
  login: string;
  name: string;
  password: string;
}

@injectable()
export class CreateUsersService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('hashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async create({ name, login, password }: ICreateUser): Promise<Users> {
    const Existentuser = await this.repository.FindByLogin(login);

    if (Existentuser) {
      throw new AppError('User already exists', 401);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.repository.create({
      name,
      login,
      password: hashedPassword,
    });

    await this.repository.updateBalance({
      login: user.login,
      saldo: 100,
    });

    return user;
  }
}
