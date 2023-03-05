import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot(), SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
