import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async queryBuilder(alias: string) {
    return this.repository.createQueryBuilder(alias);
  }
}
