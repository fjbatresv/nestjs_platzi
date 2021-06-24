import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { UsresController } from './controllers/usres/usres.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, BrandsController, OrdersController, CustomersController, UsresController],
  providers: [AppService],
})
export class AppModule {}
