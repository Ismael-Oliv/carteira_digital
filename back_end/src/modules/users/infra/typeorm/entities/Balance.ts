import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from './Users';

@Entity('balance')
export class Balance {
  @PrimaryColumn()
  login: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'login' })
  user: Users;

  @Column()
  saldo: number;
}
