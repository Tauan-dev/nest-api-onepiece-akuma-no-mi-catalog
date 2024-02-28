import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { createInfoDTO } from './dto/createinfo.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  async findAll() {
    return this.catalogService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.catalogService.findOne(id);
  }

  @Get('/:type')
  findgroup(@Param('type') type: string) {
    return this.catalogService.findGroup(type);
  }

  @Post('/createinfo')
  create(@Body() CreateCatalog: createInfoDTO) {
    return this.catalogService.createCatalog(CreateCatalog);
  }
}
