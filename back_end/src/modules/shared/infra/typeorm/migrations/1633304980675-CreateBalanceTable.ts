import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBalanceTable1633304980675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'balance',
        columns: [
          {
            name: 'saldo',
            type: 'float8',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('balance');
  }
}
