import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createoffers1622140394626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'offers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'order_id',
                    type: 'uuid',
                },
                {
                    name: 'provider_id',
                    type: 'uuid'
                },
                {
                    name: 'price',
                    type: 'numeric',
                    scale: 3,
                    precision: 6,
                },
                {
                    name: 'comment',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        await queryRunner.createForeignKey('offers', new TableForeignKey({
            name: 'offerOrder',
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))

        await queryRunner.createForeignKey('offers', new TableForeignKey({
            name: 'orderProvider',
            columnNames: ['provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'providers',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('offers', 'offerProvider')
        await queryRunner.dropForeignKey('offers', 'offerOrder')

        await queryRunner.dropTable('offers')
    }

}
