import {MigrationInterface, QueryRunner} from "typeorm";

export class Product1644385109048 implements MigrationInterface {
    name = 'Product1644385109048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "ProductName" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "dateTime" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
