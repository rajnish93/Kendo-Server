import { Controller, Get, Query, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';
import { get } from 'lodash';
const { process } = require('@progress/kendo-data-query');

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Get()
  // async findAll() {
  //   return this.productService.findAll();
  // }

  @Get()
  async search(@Req() req: Request) {
    const builder = await this.productService.queryBuilder('products');

    if (req.query.s) {
      builder.where(
        'products.ProductName LIKE :s OR products.description LIKE :s',
        {
          s: `%${req.query.s}%`,
        },
      );
    }

    const sort: any = req.query.sort;

    if (sort) {
      builder.orderBy('products.price', sort.toUpperCase());
    }

    const page: number = parseInt(req.query.page as any) || 1;
    // const perPage = 10;
    const total = await builder.getCount();
    const take: any = req.query.take;
    console.log('req.query', req.query);
    if (take) {
      builder.offset((page - 1) * take).limit(take);
    }
    // builder.offset((page - 1) * perPage).limit(perPage);

    return {
      data: await builder.getMany(),
      total,
      // page,
      // last_page: Math.ceil(total / take),
    };
  }
}
