import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { Providers } from './hooks';

import GlobalStyle from './global/styles';

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Router />
      </Providers>
      <GlobalStyle />
    </BrowserRouter>
  );
}
