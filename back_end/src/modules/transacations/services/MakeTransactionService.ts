import { injectable, inject } from 'tsyringe';

import { AppError } from '../../shared/errors/AppError';
import { ITransactionRepository } from '../repository/ITransactionRepository';
import { IUsersRepository } from '../../users/repository/IUsersRespository';

interface TransactionDataType {
  login_origem: string;
  login_destino: string;
  valor_transferido: Number;
}

@injectable()
export class MakeTransactionService {
  constructor(
    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    login_origem,
    login_destino,
    valor_transferido,
  }: TransactionDataType) {
    const ExistentUser = await this.usersRepository.FindByLogin(login_destino);

    if (!ExistentUser) {
      throw new AppError('Usuario destino não existe', 403);
    }

    const balance = await this.usersRepository.getBalance(login_origem);

    if (balance!.saldo < valor_transferido) {
      throw new AppError('Theres no enought balance', 401);
    }

    const transaction = await this.transactionRepository.make({
      login_origem,
      login_destino,
      valor_transferido,
    });

    console.log(transaction);
    return transaction;
  }
}
