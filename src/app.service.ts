import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './app.product.dto';

@Injectable()
export class AppService {
  private readonly products = [{ id: 1, title: 'Iphone-34', price: 3000 }];
  getProducts() {
    return this.products;
  }

  CreateProduct(product: CreateProductDto) {
    const newProduct = { id: Math.random(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(id: string) {
    return this.products.find((i) => i.id === +id);
  }
}
