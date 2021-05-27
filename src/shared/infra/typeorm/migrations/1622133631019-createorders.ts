import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createorders1622133631019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'client_id',
                    type: 'uuid',
                },
                {
                    name: 'provider_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'min',
                    type: 'numeric',
                    scale: 3,
                    precision: 6,
                },
                {
                    name: 'max',
                    type: 'numeric',
                    scale: 3,
                    precision: 6,
                },
                {
                    name: 'date',
                    type: 'timestamp with time zone',
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'city',
                    type: 'varchar',
                },
            ]
        }))

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            name: 'orderClient',
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            name: 'orderProvider',
            columnNames: ['provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'providers',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'orderProvider')
        await queryRunner.dropForeignKey('orders', 'orderClient')

        await queryRunner.dropTable('orders')
    }

}
