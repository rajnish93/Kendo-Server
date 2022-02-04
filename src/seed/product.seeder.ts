import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../product/product.entity';

export class ProductSeeder implements Seeder {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  drop(): Promise<any> {
    return this.productRepository.delete({});
  }

  seed(): Promise<any> {
    const products = DataFactory.createForClass(Product).generate(50);

    return this.productRepository.insert(products);
  }
}
