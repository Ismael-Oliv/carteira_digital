import { Router } from 'express';

import { usersRoutes } from '../../../../users/infra/http/routes';
import { transactionRoutes } from '../../../../transacations/infra/http/routes';

const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/transaction', transactionRoutes);

export { routes };
