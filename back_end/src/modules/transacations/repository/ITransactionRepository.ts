import { Transaction } from '../infra/typeorm/entities/Transactions';

interface TransactionDataType {
  login_origem: string;
  login_destino: string;
  valor_transferido: Number;
}

export interface ITransactionRepository {
  make({}: TransactionDataType): Promise<Transaction>;
  list(login_origem: string): Promise<Transaction[]>;
}
