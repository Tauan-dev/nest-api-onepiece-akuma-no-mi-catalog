import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogController } from './catalog/catalog.controller';
import { CatalogService } from './catalog/catalog.service';
import { DatabaseModule } from './database/database.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [DatabaseModule, CatalogModule],
  controllers: [AppController, CatalogController],
  providers: [AppService, CatalogService],
})
export class AppModule {}
