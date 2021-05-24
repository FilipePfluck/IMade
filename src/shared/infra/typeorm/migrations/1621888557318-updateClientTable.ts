import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updateClientTable1621888557318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clients', 'address_id')
        await queryRunner.addColumns('clients', [
            new TableColumn({
                name: 'city',
                type: 'varchar'
            }),
            new TableColumn({
                name: 'neighborhood',
                type: 'varchar'
            }),
            new TableColumn({
                name: 'street',
                type: 'varchar'
            }),
            new TableColumn({
                name: 'number',
                type: 'integer'
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('clients', 'number')
        await queryRunner.dropColumn('clients', 'street')
        await queryRunner.dropColumn('clients', 'neighborhood')
        await queryRunner.dropColumn('clients', 'city')

        await queryRunner.addColumn('clients', new TableColumn({
            name: 'address_id',
            type: 'varchar'
        }))
    }

}
