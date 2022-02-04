import {MigrationInterface, QueryRunner} from "typeorm";

export class Product1643940185002 implements MigrationInterface {
    name = 'Product1643940185002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "ProductName" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
