import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Factory } from 'nestjs-seeder';
import { randomInt } from 'crypto';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Factory((faker) => faker.commerce.productName())
  @Column()
  ProductName: string;

  @Factory((faker) => faker.lorem.words(10))
  @Column()
  description: string;

  @Factory((faker) => randomInt(10, 100))
  @Column()
  price: number;

  @Factory((faker) => faker.date.between('2021-01-01', '2022-01-31'))
  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;
}
