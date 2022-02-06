import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export enum Direction {
  asc = 'ASC',
  desc = 'DESC',
}

export class SortValidationDto {
  @ApiModelProperty()
  @IsDefined()
  @IsString()
  field: string;
}

export class ProductQueryDto {
  /* @ApiModelPropertyOptional({
    description: 'Query all with id',
  })
  @IsString()
  id?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with ProductName',
  })
  @IsString()
  ProductName?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with description',
  })
  @IsString()
  description?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with price',
  })
  @IsNumber()
  price?: number;
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

  @ApiModelPropertyOptional({
    description: 'Query all with sort',
  })
  @IsOptional()
  @Type(() => String)
  //   @IsString()
  //   @ValidateNested({ each: true })
  sort?: string[];

  @ApiModelPropertyOptional({
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
  @IsEnum(Direction, { always: true })
  dir: Direction;

  /* @ApiModelPropertyOptional({
    description: 'Query all with skip',
  })
  @IsOptional()
  @IsNumber()
  total?: number; */
}

// take: dataState.take,
//         skip: dataState.skip,
//         // page: (dataState.skip + dataState.take) / dataState.take,
//         sort: dataState.sort,
//         filter: dataState.filter.filters,
