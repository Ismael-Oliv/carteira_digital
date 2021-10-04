import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryColumn()
  login: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
