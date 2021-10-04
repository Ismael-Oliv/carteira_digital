import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import Logo from '../../assets/dashboard_logo.png';
import { Container, Header } from './styles';

export function Dashboard() {
  const { handleOnOpen } = useModal();
  return (
    <Container>
      <Header>
        <nav>
          <section>
            <header>
              <span>Saldo</span>
            </header>
            <p>R$ 17.400,00</p>
          </section>
          <div>
            <button onClick={handleOnOpen}>Transferência</button>
            <Link to="/history">Histórico</Link>
          </div>
        </nav>
        <picture>
          <img src={Logo} alt="logo" />
        </picture>
      </Header>
    </Container>
  );
}
