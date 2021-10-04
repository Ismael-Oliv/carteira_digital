import {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../../services/api';

export interface ITransactions {
  login_origem: string;
  login_destino: string;
  valor_transferido: number;
}

export type ITransactionsData = Omit<ITransactions, 'id'>;

interface ITransactionProviderProps {
  CreateNewTransaction: (transactionInput: ITransactionsData) => Promise<void>;
  transactions: ITransactions[];
}
type ITransactionType = HTMLAttributes<Element>;

const TransactionContext = createContext({} as ITransactionProviderProps);

export function TransactionProvider({ children }: ITransactionType) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get<any>('/transaction/list').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, [transactions]);

  async function CreateNewTransaction(
    transactionInput: ITransactionsData
  ): Promise<void> {
    const response = await api.post<any>('/transaction/make', transactionInput);

    if (response.status === 200) {
      const transaction = response.data;
      setTransactions([...transactions, transaction]);
    } else {
      throw new Error('Erro ao fazer transação');
    }
  }

  return (
    <TransactionContext.Provider value={{ CreateNewTransaction, transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  const { CreateNewTransaction, transactions } = context;
  return { CreateNewTransaction, transactions };
}
