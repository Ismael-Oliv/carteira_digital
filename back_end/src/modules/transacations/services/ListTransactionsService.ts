import { injectable, inject } from 'tsyringe';
import { AppError } from '../../shared/errors/AppError';
import { ITransactionRepository } from '../repository/ITransactionRepository';
import { IUsersRepository } from '../../users/repository/IUsersRespository';

@injectable()
export class ListTransactionsService {
  constructor(
    @inject('TransactinoRespository')
    private transactionRespository: ITransactionRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(login: string) {
    const ExistentUser = await this.usersRepository.FindByLogin(login);

    if (!ExistentUser) {
      throw new AppError('Usuario destino não existe', 403);
    }

    const transactions = await this.transactionRespository.list(login);
    return transactions;
  }
}
