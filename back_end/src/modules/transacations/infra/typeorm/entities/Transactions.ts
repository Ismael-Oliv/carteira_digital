import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Users } from '../../../../users/infra/typeorm/entities/Users';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id_transacao: string;

  @Column()
  login_origem: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'login_origem' })
  origem: Users;

  @Column()
  login_destino: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'login_destino' })
  destino: Users;

  @Column()
  valor_transferido: Number;

  @Column()
  data: Date;
}
