import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class RemoveBioFromProvider1621895079207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('providers', 'bio')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('providers', new TableColumn({
            name: 'bio',
            type: 'varchar'
        }))
    }

}
