import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'lodash';
import { Repository } from 'typeorm';
import { ProductQueryDto } from './dto/productQuery.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>,
  ) {}

  async findAll({
    take,
    skip,
    sort,
    filters,
  }: ProductQueryDto): Promise<[Product[], number]> {
    /*     const t = query?.sort && JSON.parse(query.sort[0]);
    const direction = t?.dir === 'asc' ? 'ASC' : 'DESC';
    console.log('direction::', direction);
    console.log('T::', t?.field);
    console.log(query);

    console.log('.....Search String.....');
    const s = query?.filter?.map((ele) => JSON.parse(ele));
    const field = query?.filter
      ?.map((ele) => JSON.parse(ele))
      .map((e) => e.field); */
    // console.log('field::', field);
    // console.log(s?.map((e) => e.field));
    /*     const builderTest = this.repository.createQueryBuilder('products');
    if (query?.filter) {
      query?.filter
        ?.map((ele) => JSON.parse(ele))
        .map((e) => {
          console.log('Column::', e.field);
          switch (e.operator) {
            case 'eq': {
              builderTest.where('products' + `.${e.field} LIKE:s`, {
                s: `%${e.value}%`,
              });
              break;
            }
            default: {
              break;
            }
          }
        });
    }
    if (query?.sort) {
      builderTest
        .skip(query.skip)
        .take(query.take)
        .orderBy('products' + `.${t?.field}`, direction, 'NULLS LAST');
    }
    if (query) {
      builderTest.skip(query.skip).take(query.take);
    } */
    /* return query?.sort
      ? await this.repository
          .createQueryBuilder('products')
          .skip(query.skip)
          .take(query.take)
          .orderBy('products' + `.${t?.field}`, direction, 'NULLS LAST')
          .getManyAndCount()
      : await this.repository
          .createQueryBuilder('products')
          .skip(query.skip)
          .take(query.take)
          .getManyAndCount(); */

    const builder = this.repository
      .createQueryBuilder('products')
      .skip(skip)
      .take(take);
    const sortObj = find(sort, 'dir');
    const field = sortObj && sortObj['field'];
    const dir = sortObj && sortObj['dir'];
    const direction = dir === 'asc' ? 'ASC' : 'DESC';
    if (sortObj) {
      builder.orderBy(`products.${field}`, direction, 'NULLS LAST');
    }
    const filterObj = find(filters);
    console.log(filterObj);
    const operator = filterObj && filterObj['operator'];
    const fieldFilter = filterObj && filterObj['field'];
    console.log('Filter Operator:: ', operator);
    const value = filterObj && filterObj['value'];
    if (filterObj) {
      switch (operator) {
        case 'eq':
          builder.where(`products."${fieldFilter}" = :s`, {
            s: `${value}`,
          });
          break;
        case 'neq':
          builder.where(`products."${fieldFilter}" != :s`, {
            s: `${value}`,
          });
          break;
        case 'contains':
          builder.where(`products."${fieldFilter}" ILike :s`, {
            s: `%${value}%`,
          });
          break;
        case 'doesnotcontain':
          builder.where(`products."${fieldFilter}" NOT ILike :s`, {
            s: `%${value}%`,
          });
          break;
        case 'startswith':
          builder.where(`products."${fieldFilter}" ILike :s`, {
            s: `${value}%`,
          });
          break;
        case 'endswith':
          builder.where(`products."${fieldFilter}" ILike :s`, {
            s: `%${value}`,
          });
          break;
        case 'isnull':
          builder.where(`products."${fieldFilter}" IS NULL`);
          break;
        case 'isnotnull':
          builder.where(`products."${fieldFilter}" IS NOT NULL`);
          break;
        case 'isempty':
          builder.where(`products."${fieldFilter}" =''`);
          break;
        case 'isnotempty':
          builder.where(`products."${fieldFilter}" !=''`);
          break;
        case 'gte':
          builder.where(`products."${fieldFilter}" >= :s`, {
            s: `${value}`,
          });
          break;
        case 'gt':
          builder.where(`products."${fieldFilter}" > :s`, {
            s: `${value}`,
          });
          break;
        case 'lte':
          builder.where(`products."${fieldFilter}" <= :s`, {
            s: `${value}`,
          });
          break;
        case 'lt':
          builder.where(`products."${fieldFilter}" < :s`, {
            s: `${value}`,
          });
          break;
        default:
          break;
      }
    }

    return await builder.getManyAndCount();
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
