import { useTransaction } from '../../../../hooks/useTransaction';

import { Container } from './styles';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

export function Sumary() {
  const { transactions } = useTransaction();

  const { income, outcome, total } = transactions.reduce(
    (acc: any, transaction: any) => {
      if (transaction.type === 'deposit') {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <FiArrowDownCircle />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <FiArrowUpCircle />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(outcome)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <RiMoneyDollarCircleLine />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
