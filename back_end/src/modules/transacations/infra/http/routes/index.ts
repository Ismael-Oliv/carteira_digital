import { Router } from 'express';
import { MakeTransactionController } from '../controllers/MakeTransactionController';
import { ListTransactionsController } from '../controllers/ListTransactionsController';
import { ensureAuthenticated } from '../../../../users/infra/http/middleware/ensureAuthenticated';

const transactionRoutes = Router();

const makeTransactionController = new MakeTransactionController();
const listTransactionsController = new ListTransactionsController();

transactionRoutes.get(
  '/list',
  ensureAuthenticated,
  listTransactionsController.execute
);

transactionRoutes.post(
  '/make',
  ensureAuthenticated,
  makeTransactionController.execute
);

export { transactionRoutes };
