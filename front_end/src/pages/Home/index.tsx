import { Link } from 'react-router-dom';
import { Container, ImageInfo, Content } from './styles';

import Logo from '../../assets/logo.png';
import business_logo from '../../assets/negocio_logo.png';

export function Home() {
  return (
    <Container>
      <ImageInfo>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <section>
          <img src={business_logo} alt="business" />
        </section>
      </ImageInfo>
      <Content>
        <div>
          <section>
            <p>Faça transferência para seus melhores amigos</p>
          </section>
          <div>
            <Link to="/singin">Entrar</Link>
            <Link to="/singup">Cadastrar</Link>
          </div>
        </div>
      </Content>
    </Container>
  );
}
