import { SearchModule } from './../search/search.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [SearchModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}