import { Users } from '../infra/typeorm/entities/Users';
import { Balance } from '../infra/typeorm/entities/Balance';

interface IUser {
  login: string;
  name: string;
  password: string;
}

interface balance {
  login: string;
  saldo: number;
}

export interface IUsersRepository {
  create({ login, name, password }: IUser): Promise<Users>;
  FindByLogin(login: string): Promise<Users | undefined>;
  getBalance(login: string): Promise<Balance | undefined>;
  updateBalance({}: balance): Promise<void>;
}
