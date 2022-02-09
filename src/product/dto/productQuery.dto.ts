import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductQueryDto {
  @ApiModelPropertyOptional({
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
  @IsString()
  dir?: string;

  @ApiModelPropertyOptional({
    description: 'Query all with filter',
  })
  @IsOptional()
  @Type(() => String)
  filter?: string[];
}

// take: dataState.take,
//         skip: dataState.skip,
//         // page: (dataState.skip + dataState.take) / dataState.take,
//         sort: dataState.sort,
//         filter: dataState.filter.filters,
