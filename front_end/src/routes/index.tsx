import { Switch } from 'react-router-dom';
import { Route } from './Route';
import Modal from 'react-modal';

import { NewTrasactionModal } from '../components/TransactionModal';
import { useModal } from '../hooks/useModal';
import { Home } from '../pages/Home';
import { SingIn } from '../pages/SingIn';
import { SingUp } from '../pages/SingUp';
import { Dashboard } from '../pages/Dashboard';
import { History } from '../pages/History';

Modal.setAppElement('#root');

export function Router() {
  const { handleOnClose, isModalOpen } = useModal();

  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/singup" component={SingUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/history" component={History} isPrivate />
      </Switch>

      <NewTrasactionModal isOpen={isModalOpen} onRequestClose={handleOnClose} />
    </>
  );
}
