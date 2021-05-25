import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addNumberOfAvaliationsToProvider1621977866736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('providers', new TableColumn({
            name: 'avaliations',
            type: 'integer'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('providers', 'avaliations')
    }

}
