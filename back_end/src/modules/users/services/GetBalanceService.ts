import { Balance } from '../infra/typeorm/entities/Balance';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../shared/errors/AppError';
import { IUsersRepository } from '../repository/IUsersRespository';

@injectable()
export class GetBalanceService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  public async get(login: string): Promise<Balance | undefined> {
    const Existentuser = await this.repository.FindByLogin(login);

    if (Existentuser) {
      throw new AppError('User already exists', 403);
    }

    const balance = await this.repository.getBalance(login);

    return balance;
  }
}
