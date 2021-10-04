import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';
import { Balance } from '../entities/Balance';
import { IUsersRepository } from '../../../repository/IUsersRespository';

interface ICreateUser {
  login: string;
  name: string;
  password: string;
}

interface balance {
  login: string;
  saldo: number;
}

export class UsersRepository implements IUsersRepository {
  public async create({ login, name, password }: ICreateUser): Promise<Users> {
    const repository = getRepository(Users);
    const user = repository.create({
      login,
      name,
      password,
    });

    await repository.save(user);

    return user;
  }

  public async FindByLogin(login: string): Promise<Users | undefined> {
    const repository = getRepository(Users);
    const ExistenUser = await repository.findOne({
      where: {
        login,
      },
    });

    return ExistenUser;
  }

  public async getBalance(login: string): Promise<Balance | undefined> {
    const repository = getRepository(Balance);
    const balance = await repository.findOne({
      where: {
        login,
      },
    });

    return balance;
  }
  public async updateBalance({ login, saldo }: balance): Promise<void> {
    const repository = getRepository(Balance);
    await repository.save({
      login,
      saldo,
    });
  }
}
