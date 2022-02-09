import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class SubSort {
  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly field: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly dir: string;
}

export class SubFilters {
  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly field: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly operator: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly value: string;
}

export class ProductQueryDto {
  /* @ApiModelPropertyOptional({
    description: 'Query all with ProductName',
  })
  @IsOptional()
  @Type(() => String)
  @IsString()
  ProductName?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with description',
  })
  @IsOptional()
  @Type(() => String)
  @IsString()
  description?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with price',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  price?: number;

  @IsOptional()
  @Type(() => Date)
  dateTime: Date;
 */
  @ApiModelPropertyOptional({
    description: 'Query all with take',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;

  @ApiModelPropertyOptional({
    description: 'Query all with skip',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip?: number;

  @ApiModelPropertyOptional({ type: [SubSort] })
  @IsOptional()
  @IsArray()
  readonly sort: SubSort[];

  /* @ApiModelPropertyOptional({
    description: 'Query all with field',
  })
  @IsOptional()
  @Type(() => String)
  @IsString()
  field?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with direction',
  })
  @IsOptional()
  @IsString()
  dir?: string;
 */
  @ApiModelPropertyOptional({ type: [SubFilters] })
  @IsOptional()
  @IsArray()
  readonly filters: SubFilters[];
}

// take: dataState.take,
//         skip: dataState.skip,
//         // page: (dataState.skip + dataState.take) / dataState.take,
//         sort: dataState.sort,
//         filter: dataState.filter.filters,
