import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from '../../pipes/parse-int.pipe';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(
    @Query('limit', ParseIntPipe)
    limit = 100,
    @Query('offset', ParseIntPipe)
    offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Product: Brand->${brand} Limit->${limit}. Offset ->${offset}`;
  }

  @Post()
  create(@Res() res: Response, @Body() body: any) {
    res.status(HttpStatus.OK).json({
      message: 'Accion de crear',
      payload: body,
    });
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return `Product ${id}`;
  }
}
