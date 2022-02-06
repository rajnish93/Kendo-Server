import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductQueryDto {
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
}

// take: dataState.take,
//         skip: dataState.skip,
//         // page: (dataState.skip + dataState.take) / dataState.take,
//         sort: dataState.sort,
//         filter: dataState.filter.filters,
