import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../product/product.entity';
import { ProductSeeder } from './product.seeder';

seeder({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'table-search',
      entities: [Product],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
}).run([ProductSeeder]);
