import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';
import { get } from 'lodash';
import { ProductQueryDto } from './dto/productQuery.dto';
import { Product } from './product.entity';
const { process } = require('@progress/kendo-data-query');

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Get()
  // async findAll() {
  //   return this.productService.findAll();
  // }
  @Post()
  async findAll(
    @Body() queryParams: ProductQueryDto,
  ): Promise<[Product[], number]> {
    return this.productService.findAll(queryParams);
  }

  /* @Get()
  async index(@Query() queryParams: ProductQueryDto): Promise<Product[]> {
    console.log('queryParams', queryParams);
    return this.productService.find(queryParams);
  } */

  /* @Get()
  async search(@Req() req: Request) {
    const builder = await this.productService.queryBuilder('products'); */

  // if (req.query.s) {
  //   builder.where(
  //     'products.ProductName LIKE :s OR products.description LIKE :s',
  //     {
  //       s: `%${req.query.s}%`,
  //     },
  //   );
  // }

  /* if (req.query.sort) {
      const d = JSON.parse(req.query.sort);
      console.log('field', d.field);
      console.log('dir', d.dir);
      builder.orderBy('products.:v', { v: `${d.field}` }, 'ASC');
    } */
  // ((e) => {
  //     console.log(e);
  //     console.log('field::', Object.keys(e));
  //     console.log('dir::', e['field']);
  //   });
  // }
  // if (req.query.filter) {
  // req.query.filter.map(e=>JSON.parse(e))
  // console.log(req.query.filter);
  // }
  // const sort: any = req.query.sort;

  // if (sort) {
  //   builder.orderBy('products.price');
  // }

  //   const page: number = parseInt(req.query.page as any) || 1;
  //   // const perPage = 10;
  //   const total = await builder.getCount();
  //   const take: any = req.query.take;
  //   console.log('req.query', req.query);
  //   if (take) {
  //     builder.offset((page - 1) * take).limit(take);
  //   }
  //   // builder.offset((page - 1) * perPage).limit(perPage);

  //   return {
  //     data: await builder.getMany(),
  //     total,
  //     // page,
  //     // last_page: Math.ceil(total / take),
  //   };
  // }
}
