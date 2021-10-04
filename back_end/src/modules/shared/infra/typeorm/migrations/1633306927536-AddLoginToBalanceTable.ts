import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddLoginToBalanceTable1633306927536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'balance',
      new TableColumn({
        name: 'login',
        type: 'varchar',
        isPrimary: true,
      })
    );

    await queryRunner.createForeignKey(
      'balance',
      new TableForeignKey({
        name: 'FK_Balance_login',
        columnNames: ['login'],
        referencedColumnNames: ['login'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('balance', 'FK_Balance_login');
    await queryRunner.dropColumn('balance', 'login');
  }
}
