import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductQueryDto } from './dto/productQuery.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>,
  ) {}

  async findAll(query?: ProductQueryDto): Promise<[Product[], number]> {
    const t = query?.sort && JSON.parse(query.sort[0]);
    console.log('T::', t?.field);
    console.log(query);
    return await this.repository
      .createQueryBuilder('products')
      .skip(query.skip)
      .take(query.take)
      // .orderBy(query.field, query.direction)
      .orderBy('products`.${t?.field}`', 'ASC')
      .getManyAndCount();
  }

  async queryBuilder(alias: string) {
    return this.repository.createQueryBuilder(alias);
  }

  async find(query?: ProductQueryDto): Promise<Product[]> {
    // if(query)
    // return this.repository.

    // createQueryBuilder("products")
    //   .where('products.ProductName LIKE :s OR products.description LIKE :s', { s: `%${query.}%`,})

    //   .orderBy("products.ProductName", "DESC")
    console.log(query);
    const builder = this.repository
      .createQueryBuilder('products')
      .skip(query.skip)
      .take(query.take);
    const total = await builder.getCount();

    return builder.getMany();
  }
}
