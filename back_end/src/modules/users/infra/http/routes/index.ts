import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { AuthenticationUsersController } from '../controllers/AuthenticationUsersController';
import { CreateUsersController } from '../controllers/CreateUsersController';
import { GetBalanceController } from '../controllers/GetBalanceController';

const usersRoutes = Router();

const authenticationUsersController = new AuthenticationUsersController();
const createUsersController = new CreateUsersController();
const getBalanceController = new GetBalanceController();

usersRoutes.post('/login', authenticationUsersController.execute);
usersRoutes.post('/register', createUsersController.create);
usersRoutes.get('/balance', ensureAuthenticated, getBalanceController.execute);

export { usersRoutes };
