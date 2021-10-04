import { getRepository } from 'typeorm';
import { Transaction } from '../entities/Transactions';
import { ITransactionRepository } from '../../../repository/ITransactionRepository';

interface TransactionDataType {
  login_origem: string;
  login_destino: string;
  valor_transferido: Number;
}

export class TransactionRepository implements ITransactionRepository {
  public async make({
    login_origem,
    login_destino,
    valor_transferido,
  }: TransactionDataType): Promise<Transaction> {
    const repository = getRepository(Transaction);

    const transaction = repository.create({
      login_origem,
      login_destino,
      valor_transferido,
      data: Date.now(),
    });

    await repository.save(transaction);
    return transaction;
  }
  public async list(login_origem: string): Promise<Transaction[]> {
    const repository = getRepository(Transaction);
    const transactions = await repository.find({
      where: login_origem,
    });

    return transactions;
  }
}
