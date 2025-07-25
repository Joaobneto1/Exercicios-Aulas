import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class roles1654271874117 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'roles',
				columns: [
					{
						name: 'id',
						type: 'serial',
						isPrimary: true,
					},
					{
						name: 'role',
						type: 'text',
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('roles')
	}
}
