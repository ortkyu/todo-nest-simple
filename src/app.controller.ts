import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './app.product.dto';
import { Response } from 'express';

@Controller('/products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createProduct(@Body() createCatDto: CreateProductDto, @Res() res: Response) {
    console.log('createCatDto', createCatDto);
    createCatDto.title
      ? res.status(HttpStatus.CREATED).send('Продукт добавлен')
      : res.status(HttpStatus.BAD_REQUEST).send('Продукт NOT добавлен');
    return this.appService.CreateProduct(createCatDto);
  }

  @Get()
  getProducts() {
    console.log('getProducts');
    return this.appService.getProducts();
  }

  @Get(':id')
  getProductById(@Param() params: any) {
    console.log('getProductById');
    return this.appService.getProductById(params.id);
  }
}
