import { container } from 'tsyringe';

import '../../users/infra/providers';

import { IUsersRepository } from '../../users/repository/IUsersRespository';
import { UsersRepository } from '../../users/infra/typeorm/repository/usersRespositorty';

import { ITransactionRepository } from '../../transacations/repository/ITransactionRepository';
import { TransactionRepository } from '../../transacations/infra/typeorm/repository/TransactionRespository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ITransactionRepository>(
  'TransactionRepository',
  TransactionRepository
);
