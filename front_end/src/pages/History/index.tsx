import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { Sumary } from './components/Summary';
import { TransactionTable } from './components/TransactionsTable';
import { Container, Header } from './styles';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/history_logo.png';

export function History() {
  const { handleOnOpen } = useModal();
  const { signOut } = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <section>
            <button onClick={handleOnOpen}>Nova Transferência</button>
            <button onClick={signOut}>
              <FiPower />
            </button>
          </section>
        </nav>
      </Header>
      <Sumary />
      <TransactionTable />
    </Container>
  );
}
